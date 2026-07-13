import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  icon: Icon,
  title,
  count,
}: {
  icon: LucideIcon;
  title: string;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-2">
        <Icon className="size-5" strokeWidth={2} aria-hidden />
      </span>
      <h2 className="text-xl font-extrabold text-foreground">{title}</h2>
      {typeof count === "number" ? (
        <span className="ms-auto rounded-full bg-muted px-2.5 py-0.5 text-sm font-semibold text-muted-foreground tabular-nums">
          {count}
        </span>
      ) : null}
    </div>
  );
}
