import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GuideCard } from "@/components/guide-card";
import { guides } from "@/data/guides";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "الدلائل القانونية بالدارجة",
  description: SITE.intro,
};

export default function GuidesHubPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto w-full max-w-xl flex-1 px-4">
        <p className="py-6 text-center text-[15px] leading-relaxed text-muted-foreground">
          {SITE.intro}
        </p>
        <ul className="grid grid-cols-1 gap-4">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
