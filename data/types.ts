// Content types for the guides hub. Content lives in data/*.ts, fully decoupled
// from the UI — adding a weekly guide means appending one `Guide` object.

/** A required document, rendered as a numbered document card. */
export type DocumentItem = {
  title: string;
  description: string;
};

/**
 * A guide section. Discriminated union on `type` so the guide template can render
 * each block with the right component (document cards vs. numbered steps).
 */
export type Section =
  | {
      type: "documents";
      heading: string;
      items: DocumentItem[];
    }
  | {
      type: "steps";
      heading: string;
      items: string[];
    }
  | {
      type: "text";
      /** Optional — omit to continue the previous section without a new heading. */
      heading?: string;
      body: string;
    };

/** A Lucide icon key (mapped to a component in the UI layer, keeps data UI-free). */
export type GuideIcon = "heart-handshake" | "scale" | "file-text" | "gavel" | "shield";

export type Guide = {
  /** URL segment — keep ASCII & short for clean, shareable Instagram links. */
  slug: string;
  /** Structural icon shown on the hub card. */
  icon: GuideIcon;
  /** Full guide title in Darija. */
  title: string;
  /** Supporting line under the title. */
  subtitle: string;
  /** One-line blurb used on the hub card. */
  description: string;
  /** Ordered content blocks. */
  sections: Section[];
  /** Warm, reassuring callout shown near the end (the emotional peak). */
  highlightBox: string;
};
