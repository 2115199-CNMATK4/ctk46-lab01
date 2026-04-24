const projects = [
  {
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Đang phát triển",
  },
  {
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng Todo App với React và Local Storage",
    tech: ["React", "CSS Modules", "JavaScript"],
    status: "Hoàn thành",
  },
  {
    title: "API RESTful",
    description: "API quản lý sản phẩm với Node.js và Express",
    tech: ["Node.js", "Express", "MongoDB"],
    status: "Hoàn thành",
  },
  {
    title: "Chat Realtime",
    description: "Ứng dụng chat realtime với Socket.IO",
    tech: ["React", "Socket.IO", "Node.js"],
    status: "Đang phát triển",
  },
];
export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold dark:text-white">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Hoàn thành"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
