import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <div className="max-w-2xl mx-auto mb-8 not-found-float">
        <Image
          src="/404-illustration.svg"
          alt="Minh hoa trang 404"
          width={560}
          height={320}
          priority
          className="w-full h-auto"
        />
      </div>

      <h1 className="text-6xl font-bold text-blue-200 mb-3">404</h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
