import {
  HeartHandshake,
  Scale,
  FileText,
  Gavel,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { GuideIcon } from "@/data/types";

// Maps a guide's `icon` data key to a Lucide component. Keeps the data layer
// free of UI/React imports.
export const guideIcons: Record<GuideIcon, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  scale: Scale,
  "file-text": FileText,
  gavel: Gavel,
  shield: Shield,
};
