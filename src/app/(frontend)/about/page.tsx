import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <Image
          src={"/jordan.jpeg"}
          alt="Jordan Furr"
          width={300}
          height={300}
          layout="responsive"
          className="mb3"
          priority
        />
        <p className="mb3">Jordan Ellis Furr is an xxxtra multi & passionate creator! Based in Brooklyn, he creates web art, websites for clients, essays, textiles, videos, and more. He would love to hear from you to discuss, become penpals, collaborate, dream up a website, or something else. Please don&apos;t hesitate to send him an email.</p>
        <Link href="/writing"><p className="wordLink green mb3">Read my blog</p></Link>
        <p>jordan@jordanfurr.com</p>
      </div>
    </div>
  );
}
