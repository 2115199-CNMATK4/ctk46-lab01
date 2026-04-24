"use client";

import { useEffect } from "react";
import Link from "next/link";

interface AppErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AppError({ error, reset }: AppErrorProps) {
  useEffect(() => {
    console.error("Ung dung gap loi:", error);
  }, [error]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <p className="text-sm text-red-600 font-medium mb-3">Da co loi xay ra</p>
      <h1 className="text-3xl font-bold mb-4">Ung dung tam thoi bi gian doan</h1>
      <p className="text-gray-600 mb-8">
        Rat tiec, he thong vua gap su co khong mong muon. Ban co the thu tai lai
        hoac quay ve trang chu.
      </p>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Thu lai
        </button>
        <Link
          href="/"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Ve trang chu
        </Link>
      </div>
    </div>
  );
}
