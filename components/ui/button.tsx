import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-surface shadow-soft hover:bg-brand-strong focus-visible:outline-brand",
  secondary:
    "border border-border-subtle bg-transparent text-text-strong hover:bg-surface-muted focus-visible:outline-border-strong",
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
