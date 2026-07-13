import { Info } from "lucide-react";
import { SITE } from "@/data/site";

export function Disclaimer() {
  return (
    <p className="flex items-start gap-2.5 rounded-xl bg-muted/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
      <span>{SITE.disclaimer}</span>
    </p>
  );
}
