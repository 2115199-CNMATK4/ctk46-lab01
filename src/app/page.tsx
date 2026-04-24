import Link from "next/link";
export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div
          className="w-24 h-24 bg-violet-100 dark:bg-violet-900/40 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <span className="text-4xl dark:text-white">A</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là <span className="text-violet-600 dark:text-violet-400">Hoàng Phạm Anh Duy</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê phát triển
          web và khám phá các công nghệ mới.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            Liên hệ
          </Link>
        </div>
      </div>
      {/* Skills section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.JS",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-violet-50 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:text-gray-200 dark:hover:text-violet-300 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* CTA section */}
      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Đọc Blog của tôi</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ
        </p>
        <Link
          href="/blog"
          className="text-violet-600 dark:text-violet-400 font-semibold hover:underline"
        >
          Xem blog →
        </Link>
      </div>
    </div>
  );
}
