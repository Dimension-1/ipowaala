import Link from "next/link"


export function RecentPosts({ posts }) {
  return (
    <div className="border rounded">
      <h2 className="bg-gray-700 text-white p-3">Recent Post</h2>
      <ul className="p-4 space-y-2">
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={post.href} className="text-[#2B547E] hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

