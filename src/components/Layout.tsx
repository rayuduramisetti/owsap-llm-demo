'use client';

import Link from 'next/link';
import { useState } from 'react';

const vulnerabilities = [
  { id: 'LLM01', name: 'Prompt Injection', path: '/llm01' },
  { id: 'LLM02', name: 'Sensitive Information Disclosure', path: '/llm02' },
  { id: 'LLM03', name: 'Supply Chain', path: '/llm03' },
  { id: 'LLM04', name: 'Data and Model Poisoning', path: '/llm04' },
  { id: 'LLM05', name: 'Improper Output Handling', path: '/llm05' },
  { id: 'LLM06', name: 'Excessive Agency', path: '/llm06' },
  { id: 'LLM07', name: 'System Prompt Leakage', path: '/llm07' },
  { id: 'LLM08', name: 'Vector and Embedding Weaknesses', path: '/llm08' },
  { id: 'LLM09', name: 'Misinformation', path: '/llm09' },
  { id: 'LLM10', name: 'Unbounded Consumption', path: '/llm10' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 border-2 border-gray-300 rounded bg-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-80 bg-gray-50 border-r-2 border-gray-300 transform transition-transform
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <h1 className="text-xl font-bold">OWASP LLM Top 10</h1>
          </Link>
          
          <nav>
            <ul className="space-y-2">
              {vulnerabilities.map((vuln) => (
                <li key={vuln.id}>
                  <Link
                    href={vuln.path}
                    className="block p-3 rounded hover:bg-gray-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-bold text-sm">{vuln.id}</div>
                    <div className="text-sm text-gray-600">{vuln.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-0 pt-16 lg:pt-0">
        {children}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}