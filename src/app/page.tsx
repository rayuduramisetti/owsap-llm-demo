import Link from 'next/link';

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">OWASP LLM Top 10 Demo</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Interactive demonstration of the OWASP Top 10 security vulnerabilities for Large Language Models.
            Each vulnerability includes real LLM interactions showing both vulnerable and protected behaviors.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vulnerabilities.map((vuln) => (
            <Link
              key={vuln.id}
              href={vuln.path}
              className="block p-6 border-2 border-gray-300 rounded-lg hover:border-gray-500 transition-colors"
            >
              <div className="text-xl font-bold mb-2">{vuln.id}</div>
              <div className="text-lg">{vuln.name}</div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-600">
          <p>Built for educational purposes to demonstrate LLM security vulnerabilities</p>
        </footer>
      </div>
    </div>
  );
}
