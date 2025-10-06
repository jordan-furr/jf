import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <div className="mb6">
          <p className="pageTitle">design</p>
          <p className="mb3">I practice brand strategy and web development at <Link href={"https://badtaste.dev/"} className="wordLink green">bad taste</Link>.</p>
          <p className="mb3">Over the last six years, I have designed and built websites for diverse clients, drawing on expertise gained from earning a Bachelor of Computer Science (2017–2021).</p>
          <Link href="mailto:jordan@jordanfurr.com"><p className="wordLink green">Get in touch</p></Link>
        </div>
        <div className="">
          <p className="subTitle">highlights</p>
          <p>...coming soon...</p>
        </div>
      </div>
    </div>
  );
}
