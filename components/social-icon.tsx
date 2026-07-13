import { cn } from "@/lib/utils";
import { socialIconPaths, type SocialKey } from "@/lib/social-icon-paths";

// Renders a brand glyph (Instagram, TikTok, Facebook, Threads, YouTube).
export function SocialIcon({
  name,
  className,
}: {
  name: SocialKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      <path d={socialIconPaths[name]} />
    </svg>
  );
}
