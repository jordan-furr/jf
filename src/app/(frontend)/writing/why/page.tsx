import Link from "next/link";

export default async function Page() {

  return (
    <div className="page">
      <div className="content">
        <Link href="/writing"><p className="mb4 wordLink">&larr; Back to Writing</p></Link>

        {/* <div className="journalEntry">
          <p className="mb2">January, 2026</p>
          <p>...</p>
        </div> */}

        <div className="journalEntry">
          <p className="mb2">September, 2024</p>
          <p>I write because I long to find you, Jordan.
            Thank you for prompting me again and again. I can feel the future in each blank page. If I keep writing will it come faster? I wish I could remember everything. The days and nights that burned alive in presence. The fucking glory of seasons passing and the heartache I thought would kill me. The absolute magic of arriving at a new identity. A new path in front of me. The joy of getting to feel lonely. The outfit you wish you wore on a different day. The lunch you make for yourself in private. When you notice a new freckle or suddenly remember an old friend. A fresh leaf falls next to you, atop the ones now leaving brown marks on the sidewalk. It will never all be noticed. We can only grieve the sheer amount of detail we overlook as well as cling to. To treat our lives seriously while knowing we are just another. Can’t help but admire us. To love this blank notebook, but feel ugly as I fill the pages. How did I get there? These pages are happy to be of use, and yet, of course they were beautiful in their potential. </p>
        </div>
      </div>
    </div>
  );
}
