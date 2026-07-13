import { cn } from "@/lib/utils";

// A numbered step (Section 2) rendered as a vertical timeline. The connector is a
// flex-grown line (no absolute positioning) so it stays correct in RTL.
export function StepItem({
  index,
  text,
  isLast,
}: {
  index: number;
  text: string;
  isLast: boolean;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground tabular-nums ring-4 ring-brand/10">
          {index}
        </span>
        {!isLast ? (
          <span className="mt-1 w-0.5 flex-1 rounded-full bg-border" aria-hidden />
        ) : null}
      </div>
      <div className={cn("min-w-0 flex-1 pt-1.5", isLast ? "pb-0" : "pb-7")}>
        <p className="text-[15px] leading-relaxed text-foreground">{text}</p>
      </div>
    </li>
  );
}
