import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Approach"
          title="A simple process, shaped for clarity and momentum."
          description="We’re using a clean three-step structure now so the final content pass can drop in without reworking the core layout."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="card-base rounded-[1.75rem] p-6">
              <span className="text-sm font-semibold text-pink-bright">0{index + 1}</span>
              <h3 className="mt-6 font-heading text-2xl font-medium">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
