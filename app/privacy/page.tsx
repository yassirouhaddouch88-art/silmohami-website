import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية ديال موقع سي لمحامي.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage title="سياسة الخصوصية">
      سياسة الخصوصية ديال سي لمحامي غادي تكون متوفرة هنا قريباً. هاد الموقع كيقدم
      معلومة قانونية عامة بالدارجة، وما كيجمعش المعطيات الشخصية ديالك.
    </PlaceholderPage>
  );
}
