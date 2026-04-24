"use client";
import { useActionState, useState } from "react";
import { createGuestbookEntry, ActionState } from "@/app/guestbook/actions";

const initialState: ActionState = {
  success: false,
};

export default function GuestbookForm() {
  const [formVersion, setFormVersion] = useState(0);

  return (
    <GuestbookFormContent
      key={formVersion}
      onReset={() => setFormVersion((prev) => prev + 1)}
    />
  );
}

function GuestbookFormContent({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(
    createGuestbookEntry,
    initialState,
  );

  if (state.success) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 mb-8 space-y-4">
        <p className="text-green-600 text-sm font-medium">
          Gửi lời nhắn thành công!
        </p>
        <button
          type="button"
          onClick={onReset}
          className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-gray-50 rounded-lg p-6 mb-8 space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tên của bạn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nhập tên của bạn"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none
focus:ring-2 focus:ring-blue-500"
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Lời nhắn
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Viết lời nhắn của bạn..."
          required
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none
focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700
transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Đang gửi..." : "Gửi lời nhắn"}
      </button>
    </form>
  );
}
