import { cn } from "@/lib/utils";

// Inline Instagram glyph. lucide-react removed brand marks, so we ship our own
// for the (nominative) "follow on Instagram" link.
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
