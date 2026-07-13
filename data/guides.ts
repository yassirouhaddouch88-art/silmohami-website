import type { Guide } from "./types";

// All guides. To publish a new weekly guide, append a `Guide` object here — no UI
// changes required. Keep `slug` short & ASCII for clean, shareable Instagram links.
export const guides: Guide[] = [
  {
    slug: "takaful",
    icon: "heart-handshake",
    title: "دليلك الكامل لصندوق التكافل العائلي",
    subtitle:
      "الوثائق والخطوات اللي خاصك باش تاخدي حقك وحق وليداتك بقوة القانون",
    description:
      "الوثائق والخطوات باش تاخدي النفقة من صندوق التكافل العائلي.",
    sections: [
      {
        type: "documents",
        heading: "الوثائق المطلوبة",
        items: [
          {
            title: "الطلب المطبوع",
            description:
              "كيتخاد مباشرة من كتابة الضبط بالمحكمة الابتدائية، وكتعمري البيانات ديالو هناك.",
          },
          {
            title: "النسخة التنفيذية من حكم النفقة",
            description: "كتطلبيها من المحكمة اللي حكمات ليك بالنفقة.",
          },
          {
            title: "محضر تعذر التنفيذ",
            description:
              "وهادا هو أهم ورقة! كيعطيه ليك المفوض القضائي المكلف بالتنفيذ، كيثبت فيه أن الأب معسر، أو غايب، أو مجهول العنوان وما لقى ما يحجز ليه.",
          },
          {
            title: "نسخة من بطاقتك الوطنية (CNIE)",
            description: "",
          },
          {
            title: "شهادة الحياة للأبناء",
            description: "للأبناء المحكوم لصالحهم بالنفقة.",
          },
          {
            title: "شهادة مدرسية للأبناء",
            description: "إذا كانوا متمدرسين.",
          },
        ],
      },
      {
        type: "steps",
        heading: "الخطوات العملية",
        items: [
          "كتحصلي على حكم النفقة وكتطلبي النسخة التنفيذية ديالو.",
          "كتكلفي مفوض قضائي باش يبدا مسطرة التنفيذ ضد الأب.",
          'يلا رجع المفوض القضائي بـ "محضر تعذر التنفيذ"، كتجمعي هاد المحضر مع باقي الوثائق اللي ذكرنا الفوق.',
          "كتحطي الملف مباشرة فـ قسم قضاء الأسرة بالمحكمة الابتدائية المختصة، ورئيس المحكمة كيعطي الأمر لوزارة المالية باش تبدا تصرف ليك التسبيقات شهرياً.",
        ],
      },
    ],
    highlightBox: "🌸 طالبي بحقك وحق وليداتك وماتردديش.. الله ييسر ليك الأمور! ⚖️",
  },
];

export function getAllSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
