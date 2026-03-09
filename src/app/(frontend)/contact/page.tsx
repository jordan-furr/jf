import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="mb4">I&apos;m based in Brooklyn, New York, 11211. I&apos;d love to get a coffee with you.</p>
        <p className="mb2">Find me in 2026...</p>
        <p className="mb1">01::London+Paris.</p>
        <p className="mb1">02::Arizona.</p>
        <p className="mb1">03::Paris+Zurich.</p>
        <p className="mb1">04&05::NYC.</p>
        <p className="mb1">06&07::Paris+Zurich.</p>
        <p className="mb1">08::NYC.</p>
        <p className="mb4">09-12::TBD.</p>
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb3 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb3">+1 734-277-5378</p>
      </div>
    </div>
  );
}
