import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poyuan's answer",
  description: "Poyuan's answers to interview questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
}
