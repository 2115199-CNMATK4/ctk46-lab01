import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User } from "@/types/post";
import LikeButton from "@/components/like-button";

interface BlogPostPageProps {
 params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
 if (!res.ok) {
  notFound();
 }
 return res.json();
}

async function getUser(userId: number): Promise<User> {
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
 if (!res.ok) {
  throw new Error("Không thể tải thông tin tác giả");
 }
 return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
 const { id } = await params;
 const post = await getPost(id);
 const author = await getUser(post.userId);

 return (
  <div>
   <Link
    href="/blog"
    className="text-violet-600 hover:underline text-sm mb-6 inline-block"
   >
    ← Quay lại danh sách
   </Link>
   <article>
    <div className="flex items-center gap-3 mb-4">
     <span className="bg-violet-100 text-violet-700 text-xs px-2 py-1 rounded">
            Tác giả #{post.userId}
     </span>
         <span className="text-sm text-gray-400">Bài #{post.id}</span>
    </div>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
         <span>
            Tác giả: <strong className="text-gray-700">{author.name}</strong>
         </span>
         <span>•</span>
         <span>{author.email}</span>
        </div>
    <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-8">
         {post.body}
        </div>
        <div className="border-t pt-6 mb-6">
         <h3 className="font-semibold mb-2">Về tác giả</h3>
         <p className="text-gray-600 text-sm">
            <strong>{author.name}</strong> (@{author.username}) — {author.company.name}
         </p>
         <p className="text-gray-500 text-sm">{author.company.catchPhrase}</p>
    </div>
    <div className="border-t pt-6">
     <LikeButton />
    </div>
   </article>
  </div>
 );
}
