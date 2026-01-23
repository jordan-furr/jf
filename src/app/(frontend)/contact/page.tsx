import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="mb3">Hi!</p>
        <p className="mb3">I'm based in Brooklyn, New York, 11211. I'd love to get a coffee with you.</p>
        <p className="mb1">In 02/2026 I'll be in Arizona.</p>
        <p className="mb3">In 03/2026  I'll be in Paris.</p>
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb3 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb3">+1 734-277-5378</p>
      </div>
    </div>
  );
}
