import type { Metadata, Viewport } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — دلائل قانونية بالدارجة`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "دلائل قانونية مغربية بالدارجة، مبسطة ومباشرة. تعرف على حقوقك، الوثائق اللي خاصك والخطوات العملية مع سي لمحامي.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: ["قانون مغربي", "الدارجة", "دلائل قانونية", "سي لمحامي", "حقوق", "التكافل العائلي"],
  openGraph: {
    type: "website",
    locale: "ar_MA",
    siteName: SITE.name,
    title: `${SITE.name} — دلائل قانونية بالدارجة`,
    description: "دلائل قانونية مغربية بالدارجة، مبسطة ومباشرة، من سي لمحامي.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b2545",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoArabic.variable} h-full`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-brand-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          تجاوز للمحتوى
        </a>
        {children}
      </body>
    </html>
  );
}
