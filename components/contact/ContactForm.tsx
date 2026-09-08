"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import styles from "./Contact.module.css";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\nService: ${data.get("service")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Project inquiry: " + data.get("service"))}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <form onSubmit={submit} className={styles.formShell} data-contact-reveal>
      <div className={styles.formTop}>
        <div>
          <span className={styles.label}>The first step</span>
          <h2>Tell us what you have in mind.</h2>
        </div>
        <p>A few details help us understand the goal, service mix, and timeline. Required fields are marked with *.</p>
      </div>
      <div className={styles.fields}>
        <label className={styles.field}>
          Your name *
          <input name="name" autoComplete="name" required maxLength={120} placeholder="Full name" />
        </label>
        <label className={styles.field}>
          Email address *
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
        </label>
        <label className={styles.field}>
          Company
          <input name="company" autoComplete="organization" maxLength={160} placeholder="Your brand or business" />
        </label>
        <label className={styles.field}>
          I&apos;m interested in *
          <select name="service" required defaultValue="">
            <option value="" disabled>Choose a service</option>
            {["Graphics & logo design", "Social media marketing", "Reels creation", "A mix of services", "Something else"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className={`${styles.field} ${styles.wide}`}>
          About your project *
          <textarea
            name="message"
            rows={5}
            required
            maxLength={4000}
            placeholder="Share your goals, the creative support you need, and any timeline you have in mind."
          />
        </label>
      </div>
      <div className={styles.helperRow}>
        <p>This opens a draft in your email app so you can review the message before sending.</p>
        <button type="submit" className={styles.submit}>
          Prepare project email
          <ArrowUpRight size={16} />
        </button>
      </div>
      {prepared ? (
        <p role="status" className={styles.status}>
          Your email draft has been requested. If your email app did not open, email {siteConfig.email} directly.
        </p>
      ) : null}
    </form>
  );
}
