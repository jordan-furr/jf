import { essays } from "@/app/essay";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { PublishedAt } from "@/app/components/publishedAt";

export default async function Page() {

  const { data: posts } = await sanityFetch({ query: RECENT_POSTS_QUERY })

  return (
    <div className="page">
      <div className="content">
        <p className="mb3 spirit-blue">LATEST</p>
        <div className="blogPrevCont">
          <ul>
            {posts.map((post: any) => (
              <li key={post._id}>
                <Link
                  href={`/posts/${post?.slug?.current}`}
                >
                  <div className="flex-row pointer blogLine">
                    <PublishedAt publishedAt={post?.publishedAt} />
                    <p className="underline flexible">{post?.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb3">ESSAYS</p>
        <p className="mb3">I write memoir-theory. I write to uplift. My work reflects a sharp, reflective voice.</p>
        <p className="mb3">Texting on a Horse, a debut essay collection set to be released in 2026 reflects on:</p>
        <ul className="essays">
          {essays.map((item) => {
            return (
              <li key={item.title}><p className="essayLine">{item.title}</p></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
