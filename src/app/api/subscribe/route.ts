import { NextResponse } from "next/server";

// Always run this route on the server at request time — it reads secrets
// (BREVO_API_KEY / BREVO_LIST_ID) that must never reach the browser.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Maps the form's role values to friendly labels stored in Brevo.
const ROLE_LABELS: Record<string, string> = {
  "uk-doctor": "UK-qualified doctor",
  "international-doctor": "International doctor",
  "canadian-professional": "Canadian healthcare professional",
  "clinic-partner": "Clinic / operator / partner",
  other: "Other",
};

type SubscribeBody = {
  firstName?: string;
  email?: string;
  role?: string;
  message?: string;
  consent?: boolean;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: SubscribeBody;
  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const firstName = (body.firstName || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const role = (body.role || "").trim();
  const message = (body.message || "").trim();
  const consent = body.consent === true;
  const honeypot = (body.company || "").trim();

  // Honeypot: a real user never fills this hidden field. Pretend success so
  // bots don't learn they were blocked.
  if (honeypot) {
    return NextResponse.json({ ok: true, mock: false });
  }

  // Server-side validation mirrors the client form.
  if (!firstName) {
    return NextResponse.json(
      { ok: false, error: "First name is required." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }
  if (!role || !ROLE_LABELS[role]) {
    return NextResponse.json(
      { ok: false, error: "Please select a valid role." },
      { status: 400 }
    );
  }
  if (!consent) {
    return NextResponse.json(
      { ok: false, error: "Consent is required to subscribe." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  // Attributes stored against the contact in Brevo.
  const attributes = {
    FIRSTNAME: firstName,
    ROLE: ROLE_LABELS[role],
    MESSAGE: message,
    SOURCE: "MapleMed website",
    CONSENT: true,
    CONSENT_DATE: new Date().toISOString(),
  };

  // ---------------------------------------------------------------------------
  // Development fallback:
  // If the Brevo environment variables are missing, return a mock success so
  // the UI can be built and tested without a live Brevo account.
  //
  // TODO: Before going live, set BREVO_API_KEY and BREVO_LIST_ID (see README).
  //       In production these MUST be configured — we return a 500 below if
  //       they are absent so a misconfiguration is never silently ignored.
  // ---------------------------------------------------------------------------
  if (!apiKey || !listId) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[subscribe] BREVO_API_KEY / BREVO_LIST_ID not set — returning mock success (development only)."
      );
      return NextResponse.json({ ok: true, mock: true });
    }
    console.error(
      "[subscribe] Missing BREVO_API_KEY / BREVO_LIST_ID in production."
    );
    return NextResponse.json(
      { ok: false, error: "Subscription service is not configured." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes,
        listIds: [Number(listId)],
        updateEnabled: true, // update the contact if they already exist
      }),
      cache: "no-store",
    });

    // Brevo returns 201 (created) or 204 (updated). Both are success.
    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    const data = (await res.json().catch(() => null)) as
      | { code?: string; message?: string }
      | null;

    // A duplicate contact is fine — treat it as success.
    if (data?.code === "duplicate_parameter") {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    console.error("[subscribe] Brevo error:", res.status, data);
    return NextResponse.json(
      { ok: false, error: "Could not complete your subscription. Please try again." },
      { status: 502 }
    );
  } catch (err) {
    console.error("[subscribe] Network error contacting Brevo:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the subscription service. Please try again." },
      { status: 502 }
    );
  }
}

// Reject other methods clearly.
export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405 }
  );
}
