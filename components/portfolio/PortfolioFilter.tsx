import { portfolioFilters } from "@/lib/data";

export function PortfolioFilter() {
  return (
    <section className="section-tight">
      <div className="container flex flex-wrap gap-3">
        {portfolioFilters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-4 py-2 text-sm transition ${
              index === 0
                ? "bg-white/10 text-white"
                : "border border-white/10 bg-white/5 text-text-secondary hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
