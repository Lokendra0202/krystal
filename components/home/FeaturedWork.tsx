import { portfolioItems } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedWork() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="A portfolio framework that feels editorial, not templated."
          description="These are intentionally lightweight placeholders that establish layout rhythm, card styling, and motion behavior for the full portfolio build."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="card-base overflow-hidden rounded-[1.75rem]">
                <div className="aspect-[4/5] bg-[radial-gradient(circle_at_top,_rgba(255,77,184,0.32),_transparent_35%),linear-gradient(180deg,#1b1b1b_0%,#0e0e0e_100%)]" />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-text-muted">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-medium">{item.title}</h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
