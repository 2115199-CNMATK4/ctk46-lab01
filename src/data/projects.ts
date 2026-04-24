export interface Project {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "website-portfolio",
    title: "Website Portfolio",
    excerpt: "Website cá nhân xây dựng bằng Next.js và Tailwind CSS.",
    content: `Dự án portfolio được xây dựng để giới thiệu thông tin cá nhân, kỹ năng và các bài viết.

Mục tiêu chính là tạo một website có tốc độ tải trang nhanh, tối ưu SEO và dễ dàng mở rộng nội dung trong tương lai.

Những điểm nổi bật:
- App Router với cấu trúc route rõ ràng
- Tối ưu hiệu năng render và tài nguyên tĩnh
- Giao diện responsive cho desktop và mobile`,
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "todo-app",
    title: "Ứng dụng Quản lý Công việc",
    excerpt: "Todo App giúp theo dõi công việc hằng ngày và lưu dữ liệu local.",
    content: `Ứng dụng được thiết kế để quản lý công việc cá nhân với thao tác nhanh và trực quan.

Người dùng có thể tạo, cập nhật trạng thái hoàn thành và xóa công việc không còn cần thiết.

Những điểm nổi bật:
- Lưu trạng thái bằng Local Storage
- Lọc danh sách theo trạng thái công việc
- Giao diện đơn giản, dễ sử dụng`,
    tech: ["React", "CSS Modules", "JavaScript"],
  },
  {
    id: "restful-api",
    title: "API RESTful",
    excerpt: "API quản lý sản phẩm sử dụng Node.js, Express và MongoDB.",
    content: `Dự án backend cung cấp các endpoint để quản lý dữ liệu sản phẩm theo kiểu RESTful.

Hệ thống hỗ trợ đầy đủ các thao tác CRUD, validate đầu vào và cấu trúc response nhất quán.

Những điểm nổi bật:
- Thiết kế route và controller tách biệt
- Validate dữ liệu trước khi ghi vào database
- Xử lý lỗi và trả về mã trạng thái HTTP phù hợp`,
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
