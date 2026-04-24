export default function BlogPostLoading() {
  return (
    <div>
      <div className="h-5 w-44 bg-gray-200 rounded animate-pulse mb-6" />

      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="h-10 w-4/5 bg-gray-200 rounded animate-pulse mb-6" />

        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
