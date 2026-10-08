import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p>Thank you for your order!</p>
        <p className="mb3">You&apos;ll get a receipt by email, and I&apos;ll be in touch when your quilt ships.</p>
        <Link href={"/art"}><p className="underLink">Back to quilts</p></Link>
      </div>
    </div>
  );
}
