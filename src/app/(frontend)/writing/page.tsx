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

        <p className="mb3">Notes, meditations, memoir-theory, and inquiries.</p>

        <div className="mb3">
          <p>FEATURED</p>
          <Link href="/writing/southwest"><p className="wordLink">From Southwest</p></Link>
          <Link href="/writing/why"><p className="wordLink">Why Write</p></Link>
        </div>

        <p className="mb3 spirit-blue"><i>Texting on a Horse</i>, a debut essay collection, coming soon.</p>
        
        {/* <ul className="essays mb5">
          {essays.map((item) => {
            return (
              <li key={item.title}><p className="essayLine">{item.title}</p></li>
            );
          })}
        </ul> */}
       
      </div>
    </div>
  );
}
