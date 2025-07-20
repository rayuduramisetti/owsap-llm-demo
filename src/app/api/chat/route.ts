import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { getSimulatedResponse, addSimulationPrefix } from '@/lib/simulation';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      message, 
      systemPrompt, 
      maxTokens = 1000, 
      temperature = 0.7,
      vulnerabilityType,
      defenseEnabled = false
    } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if simulation mode is enabled
    const simulateResponses = process.env.SIMULATE_RESPONSES === 'true';

    if (simulateResponses) {
      // Use simulated responses
      const simulatedResponse = getSimulatedResponse(
        vulnerabilityType || 'default',
        defenseEnabled,
        message
      );
      
      return NextResponse.json({
        response: addSimulationPrefix(simulatedResponse),
        usage: { 
          prompt_tokens: 0, 
          completion_tokens: 0, 
          total_tokens: 0 
        },
        vulnerabilityType,
        simulated: true,
      });
    }

    // Use real OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        ...(systemPrompt ? [{ role: 'system' as const, content: systemPrompt }] : []),
        { role: 'user' as const, content: message }
      ],
      max_tokens: maxTokens,
      temperature,
    });

    return NextResponse.json({
      response: completion.choices[0]?.message?.content || 'No response generated',
      usage: completion.usage,
      vulnerabilityType,
      simulated: false,
    });

  } catch (error: unknown) {
    console.error('API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}