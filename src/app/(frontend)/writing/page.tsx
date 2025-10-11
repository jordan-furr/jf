import { essays } from "@/app/essay";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { PublishedAt } from "@/app/components/publishedAt";

const options = { next: { revalidate: 60 } };

export default async function Page() {

  const { data: posts } = await sanityFetch({ query: RECENT_POSTS_QUERY })

  return (
    <div className="page">
      <div className="content">
        <p className="mb3">LATEST</p>
        <div className="blogPrevCont">
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <Link
                  href={`/posts/${post?.slug?.current}`}
                >
                  <div className="flex-row pointer">
                    <PublishedAt publishedAt={post?.publishedAt} />
                    <p className="underline">{post?.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={"/posts"}> <span className="orange hovBlack">View all posts &rarr;</span></Link>
        </div>

        <p className="mb3">ESSAYS</p>
        <p className="mb2">I write memoir-theory, blending my personal narrative with nmodern social theory. I fell in love with the genre while studying American Culture at the University of Michigan.</p>
        <p>My work reflects a sharp, reflective voice. Texting on a Horse, a debut essay collection reflects on:</p>
        <ul>
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
