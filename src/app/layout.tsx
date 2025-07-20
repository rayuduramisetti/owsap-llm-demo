import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWASP LLM Top 10 Demo",
  description: "Interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono bg-white text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
