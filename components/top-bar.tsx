import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandAvatar } from "@/components/brand-avatar";
import { SITE } from "@/data/site";

// Slim sticky bar on guide pages: back-to-hub link + brand mark.
// ArrowRight points to the reading start (right in RTL) = "back".
export function TopBar() {
  return (
    <div
      className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-md"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-14 w-full max-w-xl items-center justify-between px-4">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-semibold text-brand-2 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowRight className="size-4" aria-hidden />
          الدلائل
        </Link>
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 rounded-full transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${SITE.name} — الصفحة الرئيسية`}
        >
          <BrandAvatar size={32} className="rounded-xl" />
          <span className="text-sm font-bold text-foreground">{SITE.name}</span>
        </Link>
      </div>
    </div>
  );
}
