type PortfolioCardProps = {
  title: string;
  category: string;
};

export function PortfolioCard({ title, category }: PortfolioCardProps) {
  return (
    <article className="card-base overflow-hidden rounded-[1.75rem]">
      <div className="aspect-[4/5] bg-[radial-gradient(circle_at_top,_rgba(255,77,184,0.32),_transparent_35%),linear-gradient(180deg,#1b1b1b_0%,#0e0e0e_100%)]" />
      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-text-muted">{category}</p>
        <h3 className="mt-3 font-heading text-2xl font-medium">{title}</h3>
      </div>
    </article>
  );
}
