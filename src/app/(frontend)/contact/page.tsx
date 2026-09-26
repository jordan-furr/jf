import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb3 underLink">jordan@jordanfurr.com</p></Link>
        <Link href={"https://www.instagram.com/jordyfurr"}><p className="mb3 underLink">Instagram</p></Link>
        
        <p>Brooklyn, New York</p>
        <p>Paris, France</p>
        <p>Tucson, Arizona</p>
        <p className="mb5">Tucson, Arizona</p>
      </div>
    </div>
  );
}
