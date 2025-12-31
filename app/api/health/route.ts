import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    app: "lafzo",
    status: "ok",
    timestamp: Date.now(),
  })
}
