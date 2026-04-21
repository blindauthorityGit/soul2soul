import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

function createTextComponent<TDefault extends ElementType>(
  defaultTag: TDefault,
  defaultClassName: string,
) {
  return function TextComponent<T extends ElementType = TDefault>({
    as,
    className,
    children,
    ...props
  }: TextProps<T>) {
    const Component = (as ?? defaultTag) as ElementType;

    return (
      <Component className={cn(defaultClassName, className)} {...props}>
        {children}
      </Component>
    );
  };
}

export const Display = createTextComponent(
  "h1",
  "font-serif text-balance text-5xl leading-[1.05] tracking-tight text-text-strong sm:text-6xl md:text-7xl",
);

export const H1 = createTextComponent(
  "h1",
  "font-serif text-4xl leading-tight tracking-tight text-text-strong sm:text-5xl",
);

export const H2 = createTextComponent(
  "h2",
  "font-serif text-3xl leading-tight tracking-tight text-text-strong sm:text-4xl",
);

export const H3 = createTextComponent(
  "h3",
  "font-serif text-2xl leading-snug tracking-tight text-text-strong sm:text-3xl",
);

export const Eyebrow = createTextComponent(
  "p",
  "text-xs font-medium uppercase tracking-[0.18em] text-text-muted",
);

export const Lead = createTextComponent(
  "p",
  "text-lg leading-relaxed text-text-default sm:text-xl",
);

export const Body = createTextComponent(
  "p",
  "text-base leading-relaxed text-text-default sm:text-lg",
);

export const Small = createTextComponent(
  "small",
  "text-sm leading-relaxed text-text-muted",
);
