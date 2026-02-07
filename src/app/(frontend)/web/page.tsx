import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <div className="mb6">
          <p className="mb3">Brand Strategy and Web Development at <Link href={"https://badtaste.dev/"} target="_" className="wordLink green">bad taste</Link>. Seven years experience.</p>
          <p className="mb3">Elegant, simple, & bold.</p>
          <p className="mb3">I build digital identity with detail and nuanced communication through brand.</p>
           <p className="mb3">I take inspiration from Diana Vreeland: &quot;We all need a splash of bad taste—it&apos;s hearty, it&apos;s healthy, it&apos;s physical.&quot;</p>
          <p className="mb3">Education: University of Michigan - B.S. in Computer Science, Minor in American Culture. Self-taught design for edge.</p>
         
          <Link href="mailto:jordan@jordanfurr.com"><p className="wordLink green">Get in touch &rarr;</p></Link>
        </div>

      </div>
    </div>
  );
}
