import type { SocialKey } from "@/lib/social-icon-paths";

// ─────────────────────────────────────────────────────────────────────────────
// Home page ("link in bio") content. Edit links, labels & numbers here — no need
// to touch component code. Follower stats are meant to be updated weekly.
// ─────────────────────────────────────────────────────────────────────────────

export type ActionIcon = "book" | "store";

export type HomeAction = {
  key: string;
  icon: ActionIcon;
  label: string;
  subtext?: string;
  href: string;
  variant: "primary" | "secondary";
  /** When set, shown as a pill at the end instead of the forward arrow. */
  badge?: string;
};

export type HomeSocial = {
  key: SocialKey;
  label: string;
  href: string;
};

export type HomeStat = {
  value: string;
  label: string;
};

export const HOME = {
  profile: {
    name: "سي لمحامي",
    tagline: "محاميك بالدارجة 🇲🇦",
    description:
      "بسّطنا ليك القانون المغربي بالدارجة — باش تعرف اللي ليك واللي عليك ⚖️",
  },

  actions: [
    {
      key: "guides",
      icon: "book",
      label: "الأدلة القانونية المجانية",
      subtext: "حمل الدليل اللي بغيتي فبلاصة",
      href: "/guides",
      variant: "primary",
    },
    {
      key: "store",
      icon: "store",
      label: "المتجر — عقود ونماذج جاهزة",
      subtext: "عقود الكراء، الشغل، الإرث...",
      href: "/store",
      variant: "secondary",
      badge: "قريباً",
    },
  ] satisfies HomeAction[],

  socialsHeading: "تابعنا",
  socials: [
    { key: "instagram", label: "إنستغرام", href: "https://www.instagram.com/silmo7ami/" },
    { key: "tiktok", label: "تيك توك", href: "https://www.tiktok.com/@silmo7ami" },
    { key: "facebook", label: "فيسبوك", href: "https://www.facebook.com/profile.php?id=61574321374959" },
    { key: "threads", label: "ثريدز", href: "https://www.threads.com/@silmo7ami" },
    { key: "youtube", label: "يوتيوب", href: "https://www.youtube.com/@SiLmo7ami" },
  ] satisfies HomeSocial[],

  // Placeholder numbers — update weekly.
  stats: [
    { value: "+200K", label: "متابع" },
    { value: "5", label: "منصات" },
    { value: "آلاف", label: "الأسئلة جاوبنا عليها" },
  ] satisfies HomeStat[],

  footer: {
    signOff: "أنا سي لمحامي... تابعني باش تعرف اللي ليك واللي عليك.",
    copyright: "© 2026 Si Lmo7ami",
  },
} as const;
