import { services } from "@/lib/data";

import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  return (
    <section className="section pt-0">
      <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
