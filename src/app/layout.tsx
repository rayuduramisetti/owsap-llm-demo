import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWASP LLM Top 10 Demo",
  description: "Interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models",
  metadataBase: new URL("https://oswap.rayuduramisetti.com"),
  openGraph: {
    title: "OWASP LLM Top 10 Demo",
    description: "Interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models",
    url: "https://oswap.rayuduramisetti.com",
    siteName: "OWASP LLM Security Demo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OWASP LLM Top 10 Demo - Security Vulnerabilities Demonstration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWASP LLM Top 10 Demo",
    description: "Interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models",
    images: ["/og-image.png"],
  },
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
