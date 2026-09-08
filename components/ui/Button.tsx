import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200";

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm md:px-7 md:py-3.5",
};

const variantStyles = {
  primary:
    "bg-[linear-gradient(135deg,#ff4db8_0%,#ff2b9a_100%)] text-white shadow-[0_16px_40px_rgba(255,43,154,0.28)] hover:-translate-y-0.5",
  secondary:
    "border border-white/12 bg-white/5 text-white hover:border-pink-bright/30 hover:bg-white/8",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
