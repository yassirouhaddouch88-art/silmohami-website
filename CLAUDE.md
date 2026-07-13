# CLAUDE.md — silmohami.com

Context and hard rules for anyone (human or AI) working on this codebase.

## What this is
A resource hub for **"Si Lmo7ami" (سي لمحامي)** — a Moroccan legal-education brand that explains
Moroccan law in **Darija** (Moroccan Arabic). It replaces the old flow of DMing PDF guides to followers:
instead, followers tap an Instagram link and read the guide instantly as a mobile web page.

- **Instagram:** [@silmo7ami](https://instagram.com/silmo7ami) · Tagline: محاميك بالدارجة 🇲🇦
- **Sole call-to-action:** the Instagram **follow** button in the brand footer.
  There is intentionally **NO** consultation / WhatsApp / booking CTA — the owner does not offer that
  service. Do not add one.

## Audience & the #1 constraint: mobile-first
**95%+ of traffic is the Instagram in-app browser on a phone.** Design, build, and test at **375px
width first**. Everything must be flawless on a small phone before anything else. Large tap targets
(≥44px), generous spacing, single column, respect `env(safe-area-inset-*)`.

## Language & direction
- All content is **Moroccan Darija in Arabic script**. No French. No Fus7a (formal Arabic).
- Tone: direct, warm, practical, authoritative-but-approachable (a trusted lawyer friend).
- Brand sign-off: «أنا سي لمحامي… تابعني باش تعرف اللي ليك واللي عليك.»
- The whole site is **RTL** (`dir="rtl" lang="ar"` on `<html>`).

## RTL — hard rule
Use **Tailwind logical properties ONLY**. Never physical directional utilities.
- ✅ `ms-* me-* ps-* pe-*`, `text-start / text-end`, `start-* / end-*`, `rounded-s-* / rounded-e-*`,
  `border-s-* / border-e-*`.
- ❌ `ml-* mr-* pl-* pr-*`, `left-* / right-*`, `text-left / text-right`.
- Gate before shipping: `grep -RInE '\b(ml-|mr-|pl-|pr-|left-|right-|text-left|text-right)[0-9a-z]' app components`
  must return nothing.
- For "forward" arrows use left-pointing icons (forward = left in RTL); "back" arrows point right.

## Tech stack
- **Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui** (base-nova style, Base UI primitives).
  shadcn was initialised with `--rtl` (`components.json` → `"rtl": true`); its components already ship
  logical properties.
- **Font:** Noto Sans Arabic via `next/font/google` (variable `--font-noto-arabic`, mapped to Tailwind
  `--font-sans` in `app/globals.css`).
- **Icons:** Lucide (`lucide-react`) for all structural UI. Emojis only in brand-voice copy.
- **Static/SSG**, Vercel-ready. Guide pages are prerendered via `generateStaticParams`.

> ⚠️ **Next.js 16** — APIs differ from older training data (see `AGENTS.md`). Notably: `params` is a
> `Promise` (must be `await`ed); `viewport` is its own export (`export const viewport: Viewport`);
> favicons come from `app/icon.png` + `app/apple-icon.png`. Check `node_modules/next/dist/docs/` when unsure.

## Content is data, not markup
Guides live in `data/guides.ts` (typed by `data/types.ts`); brand constants in `data/site.ts`.
Adding a weekly guide = append one `Guide` object. Never hardcode guide content into components.
`Section` is a discriminated union (`type: "documents" | "steps"`) so the template renders each block
with the right component.

## Brand palette (tokens in app/globals.css)
Navy `#0b2545` (primary) / `#163d66` (secondary), white cards, light blue-gray surfaces, warm amber
accent reserved for the emotional highlight callout. Text is navy ink on a soft blue-gray background.

## Running locally
Node is installed via **nvm** and is NOT on the default PATH. Prefix every npm/npx command:
```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
npm run dev      # http://localhost:3000  → redirects to /guides
npm run build    # SSG build (also the CI-style check)
npx tsc --noEmit # type check
```

## Scope guardrails (do NOT build)
Blog / SEO articles, e-commerce, complex nav menus, booking systems, or any consultation/WhatsApp CTA.
Scope is strictly the guides hub.
