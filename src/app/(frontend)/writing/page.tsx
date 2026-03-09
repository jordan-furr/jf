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

        <p className="mb3">I write to be honest. I sit with what is. I write to amplify light. I use defiant precision.</p>
        <p className="mb1 spirit-blue"><i>Texting on a Horse</i>, a collection of essays, is set to be released in the Fall of 2026.</p>
        {/* <ul className="essays mb5">
          {essays.map((item) => {
            return (
              <li key={item.title}><p className="essayLine">{item.title}</p></li>
            );
          })}
        </ul> */}
        <p className="mb5 spirit-blue"><i>Letters</i>, monthly installments, begin 04/2026</p>

        <div className="journalEntry">
          <p className="mb2">September, 2024</p>
          <p>I write because I long to find you, Jordan.
            Thank you for prompting me again and again. I can feel the future in each blank page. If I keep writing will it come faster? I wish I could remember everything. The days and nights that burned alive in presence. The fucking glory of seasons passing and the heartache I thought would kill me. The absolute magic of arriving at a new identity. A new path in front of me. The joy of getting to feel lonely. The outfit you wish you wore on a different day. The lunch you make for yourself in private. When you notice a new freckle or suddenly remember an old friend. A fresh leaf falls next to you, atop the ones now leaving brown marks on the sidewalk. It will never all be noticed. We can only grieve the sheer amount of detail we overlook as well as cling to. To treat our lives seriously while knowing we are just another. Can’t help but admire us. To love this blank notebook, but feel ugly as I fill the pages. How did I get there? These pages are happy to be of use, and yet, of course they were beautiful in their potential. </p>
        </div>
      </div>
    </div>
  );
}
