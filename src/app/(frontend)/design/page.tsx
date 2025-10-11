import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <div className="mb6">
          <p className="mb3">DESIGN</p>
          <p className="mb3">I practice brand strategy and web development at <Link href={"https://badtaste.dev/"} target="_" className="wordLink green">bad taste</Link>.</p>
          <p className="mb3">Over the last six years, I have designed and built websites for diverse clients, drawing on expertise from a Bachelor of Computer Science (2017–2021) and self-taught exploration.</p>
          <p className="mb3">I like design choices that are bold. I take inspiration from Diana Vreeland&apos;s quote: "We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use more of it. No taste is what I’m against."</p>
          <Link href="mailto:jordan@jordanfurr.com"><p className="wordLink green">Get in touch &rarr;</p></Link>
        </div>
        
      </div>
    </div>
  );
}
