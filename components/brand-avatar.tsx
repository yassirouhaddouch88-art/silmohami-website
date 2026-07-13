import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

// The Si Lmo7ami character portrait framed as a rounded avatar. The source image
// is a tall portrait, so `object-top` keeps the face in frame at any square size.
export function BrandAvatar({
  size = 64,
  className,
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-2xl bg-brand-2",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/silmohami.webp"
        alt={SITE.logoAlt}
        fill
        sizes={`${size}px`}
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  );
}
