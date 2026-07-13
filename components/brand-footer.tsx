import { BrandAvatar } from "@/components/brand-avatar";
import { InstagramIcon } from "@/components/instagram-icon";
import { SITE } from "@/data/site";

// The one call-to-action on the site: follow Si Lmo7ami on Instagram.
export function BrandFooter() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand px-6 py-8 text-center text-brand-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-2/50 to-transparent"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-4">
        <BrandAvatar size={64} className="rounded-2xl ring-4 ring-white/15" />
        <p className="max-w-xs text-base font-semibold leading-relaxed text-white/90">
          {SITE.signOff}
        </p>
        <a
          href={SITE.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-white px-6 text-base font-bold text-brand shadow-lg transition-transform hover:bg-white/95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <InstagramIcon className="size-5" />
          {SITE.followCta}
        </a>
        <span className="text-sm text-white/60">{SITE.instagram.handle}</span>
      </div>
    </section>
  );
}
