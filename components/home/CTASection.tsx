import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-panel rounded-[2rem] px-6 py-10 text-center md:px-12 md:py-16">
          <span className="eyebrow">Build Phase Next</span>
          <h2 className="mt-6 font-heading text-4xl font-semibold leading-tight md:text-5xl">
            Ready for the full page content build and portfolio storytelling layer.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-secondary">
            The structure is designed so we can deepen copy, visuals, and motion without
            changing the architecture.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/contact">Start the Conversation</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
