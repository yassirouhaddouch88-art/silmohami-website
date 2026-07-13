// The warm, reassuring callout near the end of a guide — the emotional peak.
// Gold accent (reserved for this one element) sets it apart from the navy UI.
export function HighlightCallout({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border-s-4 border-gold bg-gold-soft px-5 py-6 text-center ring-1 ring-gold-border">
      <p className="text-lg font-semibold leading-loose text-foreground text-balance">
        {text}
      </p>
    </div>
  );
}
