import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "next-sanity";

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
                    <h1 className="mb3">{post?.title}</h1>
                    {post?.body ? (
                        <div className="prose">
                            <PortableText value={post.body} />
                        </div>
                    ) : null}
                </div>
                <Link href="/posts">&larr; Return to blog index</Link>
            </div>
        </div>
    );
}