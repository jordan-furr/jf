import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="mb3 spirit-blue">ABOUT</p>
        <Image
          src={"/jordan.jpeg"}
          alt="Jordan Furr"
          width={300}
          height={300}
          layout="responsive"
          className="mb3"
          priority
        />
        <p className="mb3">Jordan Ellis Furr is xxxtra passionate about life. He is a writer, artist, designer, editor, developer, artist, athlete, and mystic. Based across Brooklyn and Paris, he creates dreams and basks in life.</p>
        <p className="mb3">Let's be penpals, collaborate, or dream up a website. Something else? I'd love to hear from you.</p>
        
        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb2 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb3">Brooklyn, New York, 11211</p>

        <Link href="/writing"><p className="wordLink orange mb3">Read my blog &rarr;</p></Link>
      </div>
    </div>
  );
}
