import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "المتجر — قريباً",
  description: "عقود ونماذج قانونية جاهزة بالدارجة، قريباً على سي لمحامي.",
};

export default function StorePage() {
  return (
    <PlaceholderPage badge="قريباً" title="المتجر — عقود ونماذج جاهزة">
      راه كنوجّدو ليك عقود ونماذج قانونية جاهزة (عقود الكراء، الشغل، الإرث...) باش
      تحمّلها وتعمّرها وتستعملها بسهولة. تابعنا باش تكون أول من يعرف فاش تولي متوفرة!
    </PlaceholderPage>
  );
}
