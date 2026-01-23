import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PublishedAt } from "@/app/components/publishedAt";

const options = { next: { revalidate: 60 } };

export default async function Page() {

    const {data: posts} = await sanityFetch( { query: POSTS_QUERY }) 

  return (
    <div className="page">
      <div className="content">
        <p className="mb3">BLOG</p>
        <ul>
            {posts.map((post) => (
                <li key={post._id}>
                    <Link
                    href={`/posts/${post?.slug?.current}`}
                    >
                        <div className="flex-row">
                            <PublishedAt publishedAt={post?.publishedAt} />
                            <p className="pl3 underline">{post?.title}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
        <Link href="/writing" className="wordLink">&larr; Return</Link>
      </div>
    </div>
  );
}
