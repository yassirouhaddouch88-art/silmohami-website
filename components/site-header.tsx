import { BrandAvatar } from "@/components/brand-avatar";
import { SITE } from "@/data/site";

// Hub hero header: navy band with the brand character for immediate recognition.
export function SiteHeader() {
  return (
    <header className="relative overflow-hidden bg-brand text-brand-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-2/70 to-transparent"
        aria-hidden
      />
      <div
        className="relative mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-4 pb-10 text-center"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 2.25rem)" }}
      >
        <BrandAvatar
          size={92}
          priority
          className="rounded-[1.6rem] shadow-xl shadow-black/25 ring-4 ring-white/15"
        />
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight">{SITE.name}</h1>
          <p className="text-sm font-medium text-white/75">{SITE.tagline}</p>
        </div>
        <a
          href={SITE.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {SITE.instagram.handle}
        </a>
      </div>
    </header>
  );
}
