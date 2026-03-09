import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="starBG">
          <div className="starMenu">
            <div className="sRow R1">
              <Link href="/writing"><p className="wordLink">Writing</p></Link>
              <Link href="/web"><p className="wordLink">Website</p></Link>
            </div>
            <div className="sRow R2">
              <Link href="/art"><p className="wordLink">Art</p></Link>
              <Link href="/about"><p className="wordLink">About</p></Link>
            </div>
            <div className="sRow R3">
              <Link href="/works"><p className="wordLink">Works</p></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
