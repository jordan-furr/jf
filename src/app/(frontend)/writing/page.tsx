import { essays } from "@/app/essay";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="mb3">LATEST</p>
        <Link href={"/posts"}> <p className="mb6 green wordLink">all posts</p></Link>
        <p className="mb3">ESSAYS</p>
        <p className="mb2">I write memoir-theory, blending my personal narrative with nmodern social theory. I fell in love with the genre while studying American Culture at the University of Michigan.</p>
        <p>My work reflects a sharp, reflective voice. Texting on a Horse, a debut essay collection reflects on:</p>
          <ul>
            {essays.map((item) => {
              return ( 
              <li key={item.title}>{item.title}</li>
              );
            })}
          </ul>
      </div>
    </div>
  );
}
