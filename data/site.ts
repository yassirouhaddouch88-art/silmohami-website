// Brand constants for Si Lmo7ami (سي لمحامي). Single source of truth for
// identity, links and the recurring brand copy shared across pages.

export const SITE = {
  name: "سي لمحامي",
  latinName: "Si Lmo7ami",
  tagline: "محاميك بالدارجة 🇲🇦",
  /** Short intro line for the hub. */
  intro: "دلائل قانونية مغربية بالدارجة، مبسطة ومباشرة — باش تعرف اللي ليك واللي عليك.",
  url: "https://silmohami.com",

  instagram: {
    handle: "@silmo7ami",
    url: "https://instagram.com/silmo7ami",
  },

  /** Brand sign-off used in the footer CTA block. */
  signOff: "أنا سي لمحامي — تابعني باش تعرف اللي ليك واللي عليك ⚖️",
  followCta: "تابعني على إنستغرام",

  /** Legal disclaimer shown at the bottom of every guide. */
  disclaimer:
    "هاد الدليل معلومة عامة وماشي بديل عن استشارة قانونية مباشرة. كل حالة عندها ظروفها الخاصة.",

  /** Alt text for the brand portrait / avatar. */
  logoAlt: "سي لمحامي — أفاتار المحامي",
} as const;
