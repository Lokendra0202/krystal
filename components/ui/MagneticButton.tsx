"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { PointerEvent } from "react";

import { Button } from "@/components/ui/Button";

type MagneticButtonProps = {
  children: React.ReactNode;
  href: string;
  size?: "sm" | "md";
};

export function MagneticButton({
  children,
  href,
  size = "md",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 15 });
  const springY = useSpring(y, { stiffness: 180, damping: 15 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Button href={href} size={size}>
        {children}
      </Button>
    </motion.div>
  );
}
