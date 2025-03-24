import { cn } from "@/lib/utils";
import React from "react";

const Section = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ children, className, ...props }) => (
  <section className={cn("flex flex-col max-w-4xl gap-4", className)} {...props}>
    {children}
  </section>
))
Section.displayName = "Section";

export { Section };