import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb3 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb4">+1 734-277-5378</p>
        <p>Brooklyn, New York</p>
        <p>Paris, France</p>
        <p className="mb5">Tucson, Arizona</p>
      </div>
    </div>
  );
}
