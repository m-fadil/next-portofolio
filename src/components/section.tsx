import { cn } from "@/lib/utils";

export function Section({
  className,
  children
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return <section className={cn("flex flex-col max-w-4xl gap-4", className)}>{children}</section>
}