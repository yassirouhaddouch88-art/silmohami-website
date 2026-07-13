import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "شروط الاستعمال",
  description: "شروط استعمال موقع سي لمحامي.",
};

export default function TermsPage() {
  return (
    <PlaceholderPage title="شروط الاستعمال">
      شروط استعمال موقع سي لمحامي غادي تكون متوفرة هنا قريباً. المحتوى اللي كاين
      هو معلومة عامة وماشي بديل عن استشارة قانونية مباشرة.
    </PlaceholderPage>
  );
}
