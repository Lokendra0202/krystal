import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMotion } from "@/components/contact/ContactMotion";
import styles from "@/components/contact/Contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Krystal Creative about your brand, social media, or next creative project.",
};

const nextSteps = [
  {
    number: "01",
    title: "Share the spark",
    text: "Send the idea, goal, service need, or rough brief. A polished brief is welcome, but a clear starting point is enough.",
  },
  {
    number: "02",
    title: "Shape the scope",
    text: "We look at the audience, timeline, deliverables, and the visual direction your brand needs before work begins.",
  },
  {
    number: "03",
    title: "Create with rhythm",
    text: "Once the direction is clear, we move through design, content, and refinements with regular check-ins.",
  },
];

export default function ContactPage() {
  return (
    <ContactMotion>
      <ContactHero />
      <section className={styles.main} id="project-brief">
        <div className={`container ${styles.mainGrid}`}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <section className={styles.steps} data-contact-reveal>
        <div className="container">
          <div className={styles.stepsHead}>
            <div>
              <span className={styles.label}>Next steps</span>
              <h2>From first note to finished creative, the process stays clear.</h2>
            </div>
            <p>
              Every project starts with a conversation, then turns into a focused plan with the right
              amount of strategy, design, and production.
            </p>
          </div>
          <div className={styles.stepGrid}>
            {nextSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ContactMotion>
  );
}
