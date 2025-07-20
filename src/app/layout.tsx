import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWASP LLM Top 10 Demo",
  description: "Comprehensive interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models. Learn about prompt injection, sensitive information disclosure, supply chain attacks, data poisoning, improper output handling, excessive agency, system prompt leakage, vector weaknesses, misinformation, and unbounded consumption through hands-on examples with real LLM interactions.",
  authors: [{ name: "Rayudu Ramisetti" }],
  metadataBase: new URL("https://owasp.rayuduramisetti.com"),
  openGraph: {
    title: "OWASP LLM Top 10 Demo - Interactive Security Vulnerability Training",
    description: "Comprehensive interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models. Learn about prompt injection, sensitive information disclosure, supply chain attacks, data poisoning, improper output handling, excessive agency, system prompt leakage, vector weaknesses, misinformation, and unbounded consumption through hands-on examples with real LLM interactions.",
    url: "https://owasp.rayuduramisetti.com",
    siteName: "OWASP LLM Security Demo",
    images: [
      {
        url: "https://owasp.rayuduramisetti.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "OWASP LLM Top 10 Demo - Interactive Security Vulnerability Training Platform",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWASP LLM Top 10 Demo - Interactive Security Training",
    description: "Comprehensive interactive demonstration of OWASP Top 10 security vulnerabilities for Large Language Models. Learn about prompt injection, sensitive information disclosure, supply chain attacks, and more through hands-on examples.",
    images: ["https://owasp.rayuduramisetti.com/og-image.png"],
    creator: "@rayuduramisetti",
  },
  robots: {
    index: true,
    follow: true,
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
