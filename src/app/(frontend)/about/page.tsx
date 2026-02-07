import Image from "next/image";
import Link from "next/link";
import { likes } from "@/app/likes";


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
        <p className="mb3">Jordan Ellis Furr is xxxtra. Writer, artist, designer, editor, developer, runner, friend, contrarian. Between Brooklyn and Paris, he basks in life.</p>
        <p className="mb1">Let&apos;s be penpals or talk about dreams. I&apos;d love to hear from you.</p>

        <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb2 underLink">jordan@jordanfurr.com</p></Link>
        <p className="mb5">Brooklyn, New York, 11211</p>

        <div>
          <p className="mb3 spirit-blue">Things I Love</p>
          <ul className="likes">
            {likes.map((item) => {
              return (
                <li key={item.title}><span className="hover-spirit">{item.title}</span></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
