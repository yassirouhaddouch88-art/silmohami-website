import type { Metadata } from "next";
import Link from "next/link";
import { BrandAvatar } from "@/components/brand-avatar";
import { ActionLink } from "@/components/action-link";
import { SocialRow } from "@/components/social-row";
import { StatStrip } from "@/components/stat-strip";
import { HOME } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "سي لمحامي — محاميك بالدارجة",
  description: HOME.profile.description,
  openGraph: {
    type: "website",
    title: "سي لمحامي — محاميك بالدارجة",
    description: HOME.profile.description,
  },
};

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-5"
      style={{
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 2.5rem)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.75rem)",
      }}
    >
      {/* Subtle navy-tinted glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-secondary to-transparent"
      />

      {/* Hero */}
      <section className="flex flex-col items-center text-center">
        <BrandAvatar
          size={112}
          priority
          className="rounded-full shadow-xl shadow-brand/15 ring-4 ring-white"
        />
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">
          {HOME.profile.name}
        </h1>
        <p className="mt-1 text-sm font-bold text-brand-2">
          {HOME.profile.tagline}
        </p>
        <p className="mt-3 max-w-[19rem] text-[15px] leading-relaxed text-balance text-muted-foreground">
          {HOME.profile.description}
        </p>
      </section>

      {/* Primary actions */}
      <section className="mt-8 flex flex-col gap-3.5">
        {HOME.actions.map((action) => (
          <ActionLink key={action.key} action={action} />
        ))}
      </section>

      {/* Follow */}
      <section className="mt-8">
        <h2 className="mb-3.5 text-center text-sm font-bold text-foreground/70">
          {HOME.socialsHeading}
        </h2>
        <SocialRow socials={HOME.socials} />
      </section>

      {/* Social proof */}
      <section className="mt-8">
        <StatStrip stats={HOME.stats} />
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-10 text-center">
        <p className="mx-auto max-w-xs text-sm font-medium leading-relaxed text-balance text-foreground/75">
          {HOME.footer.signOff}
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span>{HOME.footer.copyright}</span>
          <span aria-hidden>·</span>
          <Link
            href="/privacy"
            className="rounded-sm underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            سياسة الخصوصية
          </Link>
          <span aria-hidden>·</span>
          <Link
            href="/terms"
            className="rounded-sm underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            شروط الاستعمال
          </Link>
        </div>
      </footer>
    </main>
  );
}
