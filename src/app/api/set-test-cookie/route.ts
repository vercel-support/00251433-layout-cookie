import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  cookies().set("test", "test123");
  return NextResponse.json({ ok: true });
}
