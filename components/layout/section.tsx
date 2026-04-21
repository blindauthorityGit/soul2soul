import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-20 sm:py-24 lg:py-28", className)} {...props} />;
}
