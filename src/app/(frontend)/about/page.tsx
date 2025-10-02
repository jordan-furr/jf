import Image from "next/image";


export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="pageTitle">about</p>
        <Image
          src={"/jordan.jpeg"}
          alt="Jordan Furr"
          width={300}
          height={300}
          layout="responsive"
          className="mb3"
          priority
        />
        <p className="mb3">Jordan Ellis Furr is an xxxtra multi & passionate creator! Based in Brooklyn, he creates web art, websites, essays, textiles, videos, and more. He would love to hear from you to discuss, become penpals, collaborate, dream up a website, or something else. Please don't hesitate to send him an email.</p>
        <p>jordan@jordanfurr.com</p>
      </div>
    </div>
  );
}
