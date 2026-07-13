import type { HomeStat } from "@/lib/home-content";

// Understated social-proof row (follower counts etc.). Decorative — numbers are
// editable in lib/home-content.ts.
export function StatStrip({ stats }: { stats: readonly HomeStat[] }) {
  return (
    <div className="flex items-stretch justify-center rounded-2xl bg-card px-1 py-4 shadow-sm ring-1 ring-foreground/10">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 px-2 text-center [&:not(:last-child)]:border-e [&:not(:last-child)]:border-border"
        >
          <span className="text-lg font-extrabold leading-none text-brand tabular-nums">
            {s.value}
          </span>
          <span className="text-[11px] leading-tight text-muted-foreground text-balance">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
