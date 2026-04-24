const skillGroups = [
  {
    title: "Ngôn ngữ lập trình",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Cơ sở dữ liệu & công cụ",
    skills: ["PostgreSQL", "MongoDB", "Git", "GitHub"],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>
      <p className="text-gray-600 mb-8">
        Tổng hợp các kỹ năng và công nghệ mình đang sử dụng trong học tập và làm
        dự án.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="border rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
