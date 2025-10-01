import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="starBG">
          <div className="starMenu">
            <div className="sRow R1">
              <Link href="/writing"><p className="wordLink">writing</p></Link>
              <Link href="/design"><p className="wordLink">design</p></Link>
            </div>
            <div className="sRow R2">
              <Link href="/projects"><p className="wordLink">projects</p></Link>
              <Link href="/timeline"><p className="wordLink">timeline</p></Link>
            </div>
            <div className="sRow R3">
              <Link href="/database"><p className="wordLink">database</p></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
