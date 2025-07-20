# OWASP LLM Top 10 Demo

A comprehensive web application demonstrating the OWASP Top 10 security vulnerabilities for Large Language Models (LLMs), built with Next.js and integrated with OpenAI's API.

## Features

- **Interactive Demonstrations**: Each of the 10 OWASP LLM vulnerabilities has its own page with real LLM interactions
- **Mobile-First Design**: Fully responsive layout optimized for mobile devices
- **Defense Toggles**: Switch between vulnerable and protected modes to see the difference
- **Real LLM Backend**: Uses OpenAI's GPT-3.5-turbo for authentic demonstrations
- **Educational Content**: Detailed explanations of each vulnerability and its defenses

## OWASP LLM Top 10 Vulnerabilities Covered

1. **LLM01: Prompt Injection** - Manipulation of LLM through crafted input
2. **LLM02: Sensitive Information Disclosure** - Inadvertent revelation of confidential data
3. **LLM03: Training Data Poisoning** - Compromised training data affecting model behavior
4. **LLM04: Denial of Service** - Resource exhaustion attacks
5. **LLM05: Insecure Output Handling** - Improper validation of LLM outputs
6. **LLM06: Excessive Agency** - Too much autonomy granted to the LLM
7. **LLM07: System Prompt Leakage** - Exposure of system instructions
8. **LLM08: Embedding Leakage** - Unauthorized access to vector embeddings
9. **LLM09: Misinformation** - Generation of false or misleading information
10. **LLM10: Unbounded Resource Consumption** - Uncontrolled resource usage

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables by editing `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here

# Feature flag to simulate responses instead of using OpenAI API
# Set to 'true' to enable simulation mode, 'false' or leave empty to use real API
SIMULATE_RESPONSES=false
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Home Page**: Browse all 10 vulnerabilities from the main dashboard
2. **Navigation**: Use the sidebar (desktop) or hamburger menu (mobile) to navigate between vulnerabilities
3. **Interactive Testing**: 
   - Select example prompts or write your own
   - Toggle defense ON/OFF to see the difference
   - View system prompts to understand the underlying configuration
4. **Learning**: Read the explanations to understand how each vulnerability works and how defenses protect against them

## Simulation Mode

For testing and demonstration purposes without requiring an OpenAI API key, you can enable simulation mode:

1. Set `SIMULATE_RESPONSES=true` in your `.env.local` file
2. The application will use pre-defined responses that demonstrate each vulnerability
3. All responses will be prefixed with `[SIMULATED RESPONSE]` to clearly indicate simulation mode
4. This is perfect for:
   - Educational demonstrations
   - Testing the interface
   - Understanding vulnerability concepts without API costs

## Project Structure

```
src/
├── app/
│   ├── api/chat/          # OpenAI API integration
│   ├── llm01/ through llm10/  # Individual vulnerability pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Layout.tsx        # Navigation layout
│   └── VulnerabilityDemo.tsx  # Reusable demo component
```

## Security Note

This application is designed for **educational purposes only**. It demonstrates security vulnerabilities in a controlled environment. Do not use the vulnerable configurations in production systems.

## License

This project is for educational use in demonstrating LLM security vulnerabilities.
