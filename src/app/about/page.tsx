import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="size-14">
          <AvatarFallback className="bg-blue-100 text-violet-700 text-lg">
            HD
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">Giới thiệu</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Hoàng Pham Anh Duy
          </p>
        </div>
      </div>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          Xin chào! Tôi là <strong>Hoàng Pham Anh Duy</strong>, sinh viên năm 4 ngành
          Công nghệ Thông tin tại Đại học Đà Lạt.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.JS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>SQL & PostgreSQL</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-gray-500 dark:text-gray-400">
            Cử nhân Công nghệ Thông tin (2021 — 2025)
          </p>
        </div>
      </div>
    </div>
  );
}
