import { ensureLLMNetworking } from "@/lib/llm-fetch";
ensureLLMNetworking();
import { NextResponse } from "next/server";
import {
  formatLLMError,
  getLLMClient,
  getLLMModel,
  getLLMProvider,
  getLLMProviderLabel,
  getSetupMessage,
  hasLLMConfigured,
} from "@/lib/llm";

export async function GET() {
  const provider = getLLMProvider();
  const providerLabel = getLLMProviderLabel();

  if (!hasLLMConfigured()) {
    return NextResponse.json({
      configured: false,
      provider,
      providerLabel,
      model: getLLMModel(),
      message: getSetupMessage(),
    });
  }

  const client = getLLMClient();
  if (!client) {
    return NextResponse.json({
      configured: false,
      provider,
      providerLabel,
      model: getLLMModel(),
      message: getSetupMessage(),
    });
  }

  try {
    await client.models.list();
    return NextResponse.json({
      configured: true,
      valid: true,
      provider,
      providerLabel,
      model: getLLMModel(),
      message: `${providerLabel} is configured (${getLLMModel()}).`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        configured: true,
        valid: false,
        provider,
        providerLabel,
        model: getLLMModel(),
        message: formatLLMError(error),
      },
      { status: 401 },
    );
  }
}
