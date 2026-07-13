import { SocialIcon } from "@/components/social-icon";
import type { HomeSocial } from "@/lib/home-content";

// Row of circular social buttons. Icon-only, so each carries an aria-label.
export function SocialRow({ socials }: { socials: readonly HomeSocial[] }) {
  return (
    <ul className="flex items-center justify-center gap-3">
      {socials.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex size-12 items-center justify-center rounded-full bg-card text-brand shadow-sm ring-1 ring-foreground/10 transition duration-200 hover:bg-brand hover:text-white hover:ring-brand active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <SocialIcon name={s.key} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
