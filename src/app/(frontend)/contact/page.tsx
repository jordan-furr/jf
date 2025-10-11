import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="mb3">HI</p>
        <p className="mb3">Brooklyn, New York, 11211 (Open to new penpals)</p>
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb3 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb3">+1 734-277-5378</p>
      </div>
    </div>
  );
}
