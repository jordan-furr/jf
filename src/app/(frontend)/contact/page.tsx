import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p>I&apos;m based in Brooklyn, New York, 11211</p>
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb3 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb5">+1 734-277-5378</p>
        <p className="mb2">2026</p>
        <p className="mb1">01::London+Paris.</p>
        <p className="mb1">02::Tucson.</p>
        <p className="mb1">03::Paris</p>
        <p className="mb1">04&05::NYC.</p>
        <p className="mb1">06&07&08::Paris.</p>
        <p className="mb4">09-12::Tucson.</p>
      </div>
    </div>
  );
}
