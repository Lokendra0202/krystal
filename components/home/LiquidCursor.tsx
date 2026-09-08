"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SIZE = 640;
const CENTER = SIZE / 2;

/** A spring-driven, continuously deforming liquid surface; no particle trail. */
export function LiquidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let active = false;
    let initialized = false;
    let last = 0;
    let targetX = 0, targetY = 0, x = 0, y = 0, vx = 0, vy = 0;
    let deformation = 0, deformationVelocity = 0, angle = 0, opacity = 0;
    let phase = 0;
    const points = Array.from({ length: 64 }, () => ({ x: 0, y: 0 }));

    const clear = () => ctx.clearRect(0, 0, SIZE, SIZE);
    const stop = () => { cancelAnimationFrame(frame); frame = 0; last = 0; };
    const configure = () => {
      stop(); clear(); initialized = false; active = false; opacity = 0;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = SIZE * ratio;
      canvas.height = SIZE * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      canvas.style.opacity = "0";
    };

    const draw = (time: number) => {
      frame = 0;
      const dt = Math.min((time - (last || time - 16.67)) / 16.67, 2);
      last = time;
      if (media.matches) {
        x = targetX; y = targetY; vx = 0; vy = 0;
        deformation = 0; deformationVelocity = 0; opacity = active ? 1 : 0;
      }
      // Substeps keep the damped spring consistent on slower displays.
      const steps = Math.ceil(dt * 2);
      const step = dt / steps;
      for (let i = 0; i < steps; i++) {
        vx = (vx + (targetX - x) * 0.024 * step) * Math.exp(-0.23 * step);
        vy = (vy + (targetY - y) * 0.024 * step) * Math.exp(-0.23 * step);
        x += vx * step; y += vy * step;
        const desired = Math.min(Math.hypot(vx, vy) / 32, 1);
        deformationVelocity = (deformationVelocity + (desired - deformation) * 0.07 * step) * Math.exp(-0.25 * step);
        deformation += deformationVelocity * step;
      }
      const speed = Math.hypot(vx, vy);
      if (speed > 0.15) {
        const desiredAngle = Math.atan2(vy, vx);
        const delta = Math.atan2(Math.sin(desiredAngle - angle), Math.cos(desiredAngle - angle));
        angle += delta * (1 - Math.exp(-0.13 * dt));
      }
      opacity += ((active ? 1 : 0) - opacity) * (1 - Math.exp(-0.075 * dt));
      phase += dt * 0.035;
      const rect = host.getBoundingClientRect();
      canvas.style.transform = `translate3d(${x - rect.left - CENTER}px, ${y - rect.top - CENTER}px, 0)`;
      canvas.style.opacity = String(opacity);
      clear();
      ctx.save();
      ctx.translate(CENTER, CENTER);
      ctx.scale(0.42, 0.42);
      ctx.rotate(angle);
      const strain = Math.max(0, Math.min(deformation, 1.15));
      const stretch = 1 + strain * 0.65;
      const squash = 1 / Math.sqrt(stretch);
      // A rear lobe and velocity-driven harmonics form one continuous gel boundary.
      // As velocity decays, every harmonic vanishes and the surface becomes round.
      for (let i = 0; i < points.length; i++) {
        const theta = i / points.length * Math.PI * 2;
        const rearLobe = Math.exp(-Math.pow((theta - Math.PI) / 0.55, 2));
        const ripple = strain * (0.055 * Math.sin(theta * 3 + phase) + 0.035 * Math.cos(theta * 5 - phase * 0.7));
        const radius = 108 * (1 + ripple + strain * rearLobe * 0.22);
        points[i].x = Math.cos(theta) * radius * stretch;
        points[i].y = Math.sin(theta) * radius * squash;
      }
      const path = new Path2D();
      const first = points[0], end = points[points.length - 1];
      path.moveTo((first.x + end.x) / 2, (first.y + end.y) / 2);
      points.forEach((point, index) => {
        const next = points[(index + 1) % points.length];
        path.quadraticCurveTo(point.x, point.y, (point.x + next.x) / 2, (point.y + next.y) / 2);
      });
      path.closePath();
      const liquid = ctx.createRadialGradient(-35, -38, 8, 0, 0, 190);
      liquid.addColorStop(0, "rgba(195,145,208,0.65)");
      liquid.addColorStop(0.3, "rgba(150,88,173,0.58)");
      liquid.addColorStop(0.65, "rgba(113,54,141,0.48)");
      liquid.addColorStop(1, "rgba(153,48,110,0.28)");
      ctx.fillStyle = liquid;
      ctx.shadowColor = "rgba(169,95,191,0.28)";
      ctx.shadowBlur = 22;
      ctx.filter = "blur(5px)";
      ctx.fill(path);
      ctx.shadowBlur = 0;
      ctx.filter = "blur(2px)";
      ctx.strokeStyle = "rgba(255,214,245,0.13)";
      ctx.lineWidth = 1.4;
      ctx.stroke(path);
      // Broad translucent highlight gives the body depth rather than a flat fill.
      ctx.clip(path);
      const highlight = ctx.createRadialGradient(-42, -48, 0, -22, -20, 100);
      highlight.addColorStop(0, "rgba(225,201,230,0.08)");
      highlight.addColorStop(1, "rgba(255,246,255,0)");
      ctx.fillStyle = highlight;
      ctx.fillRect(-250, -250, 500, 500);
      ctx.restore();
      const unsettled = Math.hypot(targetX - x, targetY - y) > 0.1 || speed > 0.02 || Math.abs(deformation) > 0.001 || Math.abs(opacity - (active ? 1 : 0)) > 0.001;
      if (unsettled && !media.matches) start(); else last = 0;
    };
    const start = () => {
      if (!frame && initialized && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX; targetY = event.clientY;
      active = true;
      if (!initialized) {
        x = targetX; y = targetY; vx = 0; vy = 0;
        deformation = 0; deformationVelocity = 0; initialized = true;
      }
      start();
    };
    const leave = () => { active = false; start(); };
    const visibility = () => {
      if (document.hidden) { stop(); canvas.style.opacity = "0"; active = false; opacity = 0; }
    };
    configure();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", start, { passive: true });
    window.addEventListener("resize", start, { passive: true });
    window.addEventListener("blur", leave);
    document.documentElement.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", configure);
    return () => {
      stop();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", start);
      window.removeEventListener("resize", start);
      window.removeEventListener("blur", leave);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", configure);
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div aria-hidden="true" data-liquid-cursor style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 1000, overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ pointerEvents: "none", position: "absolute", left: 0, top: 0, opacity: 0, width: SIZE, height: SIZE, maxWidth: "none" }} />
    </div>,
    document.body,
  );
}
