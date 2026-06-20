import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { ARIZONA_POSTS_QUERY } from "@/sanity/lib/queries";
import { PublishedAt } from "@/app/components/publishedAt";

export default async function ArizonaPage() {

    const { data: posts } = await sanityFetch({ query: ARIZONA_POSTS_QUERY })

    return (
        <div className="page">
            <div className="content">
                <Link href="/writing"><p className="mb4 wordLink">&larr; Back to Writing</p></Link>

                <p className="mb3">Following three weeks in Arizona volunteering at a horse ranch doing healing work in Tucson. Over my journey I decide to move there from my current home in Brooklyn, NY.</p>

                <div className="arizonaPosts">
                    <ul>
                        {posts.map((post: any) => (
                         
                            <li key={post._id}>
                                   <p>...</p>
                                <div className="arizonaPost">
                                    <div className="flex-row pointer">
                                        <PublishedAt publishedAt={post?.publishedAt} />
                                        <p className="locationTag">{post?.location}</p>
                                    </div>
                                    <p>{post?.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
