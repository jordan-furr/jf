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
       
        
        {/* <div className="blogPrevCont">
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
        </div> */}

        <p className="mb3">I believe in honesty. I sit with what is. I write memoir and memoir-theory. I write to spread light. I write with defiant precision about: sense of self, hard truths, and growth.</p>
        <p className="mb3"><i>Texting on a Horse</i>, a collection of essays, is set to be released in the Fall of 2026.</p>
        {/* <ul className="essays mb5">
          {essays.map((item) => {
            return (
              <li key={item.title}><p className="essayLine">{item.title}</p></li>
            );
          })}
        </ul> */}
         <p className="mb5 spirit-blue"><i>Letters</i>, monthly installments, begin this Lunar New Year (2/17/2026)</p>
      </div>
    </div>
  );
}
