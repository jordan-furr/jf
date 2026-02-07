import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { PublishedAt } from "@/app/components/publishedAt";


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="page">
            <div className="content">
                <div className="mb6">
                    <h1 className="mb3 postTitle">{post?.title}</h1>
                    <PublishedAt publishedAt={post?.publishedAt} />
                    {post?.body ? (
                        <div className="prose pt4">
                            <PortableText value={post.body} />
                        </div>
                    ) : null}
                </div>
                <Link href="/writing" className="wordLink">&larr; Return</Link>
            </div>
        </div>
    );
}