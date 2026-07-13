// A numbered required-document card (Section 1). `description` is optional —
// some documents (e.g. the CNIE copy) need no extra explanation.
export function DocumentCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-foreground/10">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground tabular-nums">
        {index}
      </span>
      <div className="min-w-0 flex-1 space-y-1 pt-1">
        <h3 className="font-bold leading-snug text-foreground">{title}</h3>
        {description ? (
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
