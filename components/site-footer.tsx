import { SITE } from "@/data/site";

// Slim footer for the hub.
export function SiteFooter() {
  return (
    <footer
      className="mx-auto w-full max-w-xl px-4 pt-8 text-center"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 2rem)" }}
    >
      <a
        href={SITE.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-brand-2 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
      >
        {SITE.instagram.handle}
      </a>
      <p className="mt-1.5 text-xs text-muted-foreground">
        {SITE.name} · {SITE.tagline}
      </p>
    </footer>
  );
}
