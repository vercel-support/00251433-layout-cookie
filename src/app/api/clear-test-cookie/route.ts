import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  cookies().delete("test");
  return NextResponse.json({ ok: true });
}
