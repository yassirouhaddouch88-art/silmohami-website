import Link from "next/link";
import { ArrowLeft, BookOpen, ShoppingBag, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HomeAction, ActionIcon } from "@/lib/home-content";

const actionIcons: Record<ActionIcon, LucideIcon> = {
  book: BookOpen,
  store: ShoppingBag,
};

// A large, full-width stacked action button — the core of the link-in-bio page.
// `primary` = filled navy (main CTA); `secondary` = white card.
export function ActionLink({ action }: { action: HomeAction }) {
  const Icon = actionIcons[action.icon];
  const isPrimary = action.variant === "primary";

  return (
    <Link
      href={action.href}
      className={cn(
        "group flex items-center gap-4 rounded-2xl px-5 py-4 transition duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isPrimary
          ? "bg-brand text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand-2 focus-visible:ring-brand"
          : "bg-card text-foreground shadow-sm ring-1 ring-foreground/10 hover:shadow-md hover:ring-brand/25 focus-visible:ring-ring",
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl",
          isPrimary ? "bg-white/12 text-white" : "bg-brand/10 text-brand-2",
        )}
      >
        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-snug">{action.label}</span>
        {action.subtext ? (
          <span
            className={cn(
              "mt-0.5 block text-[13px] leading-snug",
              isPrimary ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {action.subtext}
          </span>
        ) : null}
      </span>

      {action.badge ? (
        <span className="shrink-0 rounded-full bg-gold-soft px-2.5 py-1 text-[11px] font-bold text-gold ring-1 ring-gold-border">
          {action.badge}
        </span>
      ) : (
        <ArrowLeft
          className={cn(
            "size-5 shrink-0 transition-transform group-hover:-translate-x-0.5",
            isPrimary ? "text-white/60" : "text-muted-foreground",
          )}
          aria-hidden
        />
      )}
    </Link>
  );
}
