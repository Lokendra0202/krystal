type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 font-heading text-4xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-text-secondary md:text-lg">
        {description}
      </p>
    </div>
  );
}
