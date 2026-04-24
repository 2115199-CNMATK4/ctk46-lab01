"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-pressed={isDark}
      aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
    >
      {isDark ? (
        <>
          <span aria-hidden="true">☀️</span>
          <span>Sáng</span>
        </>
      ) : (
        <>
          <span aria-hidden="true">🌙</span>
          <span>Tối</span>
        </>
      )}
    </button>
  );
}
