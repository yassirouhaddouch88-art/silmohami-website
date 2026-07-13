import Link from "next/link";
import { BrandAvatar } from "@/components/brand-avatar";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex min-h-dvh w-full max-w-xl flex-1 flex-col items-center justify-center gap-5 px-4 text-center">
      <BrandAvatar size={80} className="rounded-3xl shadow-lg ring-4 ring-brand/10" />
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold text-foreground">ماكايناش هاد الصفحة</h1>
        <p className="text-muted-foreground">
          يمكن الرابط ماشي صحيح، ولا هاد الدليل تبدل. رجع للدلائل وشوف اللي كاين.
        </p>
      </div>
      <Link
        href="/guides"
        className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-base font-bold text-brand-foreground shadow-md transition hover:bg-brand-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        شوف الدلائل
      </Link>
    </main>
  );
}
