import { FileText, ListChecks } from "lucide-react";
import { TopBar } from "@/components/top-bar";
import { SectionHeading } from "@/components/section-heading";
import { DocumentCard } from "@/components/document-card";
import { StepItem } from "@/components/step-item";
import { HighlightCallout } from "@/components/highlight-callout";
import { BrandFooter } from "@/components/brand-footer";
import { Disclaimer } from "@/components/disclaimer";
import { guideIcons } from "@/lib/guide-icons";
import type { Guide } from "@/data/types";

const sectionIcons = { documents: FileText, steps: ListChecks } as const;

// Reusable layout for any guide. Renders each section by its `type`, so new
// guides need only data — no template changes.
export function GuideTemplate({ guide }: { guide: Guide }) {
  const Icon = guideIcons[guide.icon];

  return (
    <>
      <TopBar />
      <main
        id="main-content"
        className="mx-auto w-full max-w-xl scroll-mt-20 px-4"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 2.5rem)" }}
      >
        {/* Title block */}
        <header className="pt-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand-2">
            <Icon className="size-4" strokeWidth={2} aria-hidden />
            دليل قانوني
          </span>
          <h1 className="mt-4 text-[1.7rem] font-extrabold leading-tight text-balance text-foreground">
            {guide.title}
          </h1>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {guide.subtitle}
          </p>
        </header>

        <div className="mt-8 space-y-10">
          {guide.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.type === "documents" ? (
                <>
                  <SectionHeading
                    icon={sectionIcons.documents}
                    title={section.heading}
                    count={section.items.length}
                  />
                  <div className="space-y-3">
                    {section.items.map((doc, di) => (
                      <DocumentCard
                        key={di}
                        index={di + 1}
                        title={doc.title}
                        description={doc.description}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <SectionHeading
                    icon={sectionIcons.steps}
                    title={section.heading}
                    count={section.items.length}
                  />
                  <ol className="list-none ps-1">
                    {section.items.map((step, si) => (
                      <StepItem
                        key={si}
                        index={si + 1}
                        text={step}
                        isLast={si === section.items.length - 1}
                      />
                    ))}
                  </ol>
                </>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10">
          <HighlightCallout text={guide.highlightBox} />
        </div>

        <div className="mt-10">
          <BrandFooter />
        </div>

        <div className="mt-6">
          <Disclaimer />
        </div>
      </main>
    </>
  );
}
