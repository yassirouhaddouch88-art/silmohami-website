import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandAvatar } from "@/components/brand-avatar";

// Shared shell for simple standalone pages (store / privacy / terms).
export function PlaceholderPage({
  badge,
  title,
  children,
}: {
  badge?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-1 flex-col items-center justify-center gap-5 px-6 text-center"
      style={{
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 2rem)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 2rem)",
      }}
    >
      <BrandAvatar
        size={84}
        priority
        className="rounded-full shadow-lg ring-4 ring-white"
      />
      {badge ? (
        <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold ring-1 ring-gold-border">
          {badge}
        </span>
      ) : null}
      <h1 className="text-2xl font-extrabold text-balance text-foreground">
        {title}
      </h1>
      <div className="max-w-sm text-[15px] leading-relaxed text-muted-foreground text-pretty">
        {children}
      </div>
      <Link
        href="/"
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-base font-bold text-brand-foreground shadow-md transition hover:bg-brand-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <ArrowRight className="size-4" aria-hidden />
        رجع للرئيسية
      </Link>
    </main>
  );
}
