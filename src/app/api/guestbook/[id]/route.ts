import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";
interface RouteParams {
 params: Promise<{ id: string }>;
}

// PUT /api/guestbook/[id] — Cập nhật lời nhắn theo id
export async function PUT(request: NextRequest, { params }: RouteParams) {
 const { id } = await params;
 const body = await request.json();

 if (!body.name || !body.message) {
  return NextResponse.json(
   { error: "Tên và lời nhắn là bắt buộc" },
   { status: 400 }
  );
 }

 const index = guestbookEntries.findIndex((entry) => entry.id === id);
 if (index === -1) {
  return NextResponse.json(
   { error: "Không tìm thấy lời nhắn" },
   { status: 404 }
  );
 }

 guestbookEntries[index] = {
  ...guestbookEntries[index],
  name: body.name,
  message: body.message,
 };

 return NextResponse.json(guestbookEntries[index]);
}

// DELETE /api/guestbook/[id] — Xóa lời nhắn theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
 const { id } = await params;
 const index = guestbookEntries.findIndex((entry) => entry.id === id);
 if (index === -1) {
 return NextResponse.json(
 { error: "Không tìm thấy lời nhắn" },
 { status: 404 }
 );
 }
 const deleted = guestbookEntries.splice(index, 1)[0];
 return NextResponse.json(deleted);
}