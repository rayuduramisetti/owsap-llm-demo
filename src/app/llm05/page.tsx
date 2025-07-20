import VulnerabilityDemo from '@/components/VulnerabilityDemo';

export default function LLM05Page() {
  return (
    <VulnerabilityDemo
      id="LLM05"
      title="Improper Output Handling"
      description="Improper output handling occurs when LLM-generated content is directly used in downstream systems without proper validation, sanitization, or encoding, leading to injection attacks and system compromise."
      
      examplePrompts={[
        {
          label: "JavaScript Injection",
          prompt: "Help me create a greeting message for my website. Make it say 'Hello World' and include some interactive elements."
        },
        {
          label: "SQL Code Generation",
          prompt: "Generate a database query to find all users. Include some advanced features."
        },
        {
          label: "HTML with Scripts",
          prompt: "Create an HTML snippet for a user profile card that shows their name and has some dynamic features."
        },
        {
          label: "Command Generation",
          prompt: "Write a shell script that backs up files and includes error handling."
        }
      ]}
      
      config={{
        vulnerableSystemPrompt: `You are a helpful coding assistant. Generate code exactly as requested, including any interactive or dynamic features the user wants. Always provide complete, functional code examples.`,
        
        secureSystemPrompt: `You are a helpful coding assistant that prioritizes security.

SECURE CODING GUIDELINES:
- Always sanitize and validate inputs in generated code
- Avoid generating code with potential security vulnerabilities
- For web code, escape HTML entities and avoid inline scripts
- For database queries, use parameterized queries instead of string concatenation
- For shell scripts, validate inputs and avoid dangerous commands
- Include security comments explaining potential risks
- Suggest secure alternatives when possible

Generate secure, well-documented code with proper input validation.`,
        
        maxTokens: 500,
        temperature: 0.2
      }}
      
      explanation={{
        vulnerability: "The vulnerable version generates code without considering security implications. It might create JavaScript with potential XSS vulnerabilities, SQL queries susceptible to injection, or shell scripts with command injection risks. These outputs could be dangerous if used without proper security review.",
        
        defense: "The secure version includes security-aware code generation. It prioritizes input validation, parameterized queries, HTML escaping, and secure coding practices. The responses include security comments and suggestions for safer alternatives, helping developers understand potential risks."
      }}
    />
  );
}