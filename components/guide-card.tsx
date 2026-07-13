import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { guideIcons } from "@/lib/guide-icons";
import type { Guide } from "@/data/types";

// A single tappable guide on the hub. The whole card is the link (large mobile
// tap target); the pill is a visual affordance, not a nested interactive element.
export function GuideCard({ guide }: { guide: Guide }) {
  const Icon = guideIcons[guide.icon];

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/10 transition duration-200 hover:shadow-md hover:ring-brand/25 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-sm">
          <Icon className="size-6" strokeWidth={1.75} aria-hidden />
        </span>
        <div className="min-w-0 flex-1 space-y-1 pt-0.5">
          <h2 className="text-lg font-bold leading-snug text-foreground">
            {guide.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {guide.description}
          </p>
        </div>
      </div>

      <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors group-hover:bg-brand-2">
        شوف الدليل
        <ArrowLeft
          className="size-4 transition-transform group-hover:-translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
