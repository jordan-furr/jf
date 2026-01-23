import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <div className="mb6">
          <p className="mb3 spirit-blue">DESIGN</p>
          <p className="mb3">Elegant, simple, & bold.</p>
          <p className="mb3">Brand Strategy and Web Development at <Link href={"https://badtaste.dev/"} target="_" className="wordLink green">bad taste</Link>. Seven years experience.</p>
          <p className="mb3">I help you build a digital identity and communicate your offerings + values.</p>
          <p className="mb3">University of Michigan - B.S. in Computer Science, Minor in American Culture. Self-taught design for edge.</p>
          <p className="mb3">I take inspiration from Diana Vreeland: "We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical."</p>
          <Link href="mailto:jordan@jordanfurr.com"><p className="wordLink green">Get in touch &rarr;</p></Link>
        </div>

      </div>
    </div>
  );
}
