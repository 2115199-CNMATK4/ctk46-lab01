"use client";

import { deleteGuestbookEntry } from "@/app/guestbook/actions";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DeleteButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    try {
      const result = await deleteGuestbookEntry(id);
      if (!result.success) {
        alert(result.errors?.message?.[0] ?? "Không thể xóa lời nhắn.");
        return;
      }

      setOpen(false);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-xs text-red-400 hover:text-red-600 transition-colors">
          Xóa
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xác nhận xóa lời nhắn</DialogTitle>
          <DialogDescription>
            Bạn có chắc muốn xóa lời nhắn này? Hành động này không thể hoàn tác.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <button
            type="button"
            onClick={() => setOpen(false)}
            disabled={isDeleting}
            className="px-4 py-2 rounded-lg border text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeleting ? "Đang xóa..." : "Xác nhận xóa"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
