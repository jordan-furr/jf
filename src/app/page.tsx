import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="starBG">
          <div className="starMenu">
            <div className="sRow R1">
              <Link href="/web"><p className="wordLink">Websites</p></Link>
              <Link href="/writing"><p className="wordLink">Studio</p></Link>
            </div>
            <div className="sRow R2">
              <Link href="/works"><p className="wordLink">Projects</p></Link>
              <Link href="/about"><p className="wordLink">About</p></Link>
            </div>
            <div className="sRow R3">
              <Link href="/art"><p className="wordLink">Quilts</p></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
