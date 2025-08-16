// /app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { email, botfield } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  if (botfield) return NextResponse.json({ ok: true });

  const key = process.env.BUTTONDOWN_API_KEY!;
  const base = "https://api.buttondown.com/v1/subscribers";
  const headers = {
    Authorization: `Token ${key}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Buttondown-Collision-Behavior": "add",
  };

  // 1) Does a record exist?
  const getRes = await fetch(`${base}/${encodeURIComponent(email)}`, { headers });
  if (getRes.ok) {
    // 2) It exists → make it active
    const patch = await fetch(`${base}/${encodeURIComponent(email)}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ type: "regular" }), // programmatically allowed
    });
    const data = await patch.json().catch(() => ({}));
    return patch.ok
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: data?.detail || data?.error || "Update failed" }, { status: patch.status });
  }

  if (getRes.status === 404) {
    // 3) No record → create one (single opt-in)
    const create = await fetch(base, {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address: email, type: "regular" }),
    });
    const data = await create.json().catch(() => ({}));
    return create.ok
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: data?.detail || data?.error || "Create failed" }, { status: create.status });
  }

  return NextResponse.json({ error: "Buttondown error" }, { status: 500 });
}
