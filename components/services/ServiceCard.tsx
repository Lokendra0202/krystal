type ServiceCardProps = {
  kicker: string;
  title: string;
  description: string;
};

export function ServiceCard({ kicker, title, description }: ServiceCardProps) {
  return (
    <article className="card-base rounded-[1.75rem] p-6">
      <p className="text-sm uppercase tracking-[0.18em] text-pink-bright">{kicker}</p>
      <h3 className="mt-6 font-heading text-2xl font-medium">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-text-secondary">{description}</p>
    </article>
  );
}
