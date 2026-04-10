import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.message.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { name, content } = await req.json();
  if (!name || !content) return NextResponse.json({ error: "不能为空" }, { status: 400 });
  const message = await prisma.message.create({ data: { name, content } });
  return NextResponse.json(message, { status: 201 });
}
