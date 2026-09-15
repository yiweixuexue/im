import type { Metadata } from "next";
import "./globals.css";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "ImArtisan · 屮微我",
    template: "%s · ImArtisan",
  },
  description:
    "屮微我东方审美定制服装与 ImArtisan 中国传统工艺精品：为中国客户提供专属定制，为国际客户呈现当代生活中的东方手艺。",
  keywords: [
    "ImArtisan",
    "屮微我",
    "Chinese heritage craft",
    "新中式定制",
    "旗袍定制",
    "Bian embroidery",
  ],
  other: { "codex-preview": "development" },
  icons: {
    icon: `${siteBasePath}/favicon.svg`,
    shortcut: `${siteBasePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content / 跳至正文
        </a>
        {children}
      </body>
    </html>
  );
}
