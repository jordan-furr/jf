import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <div className="projectList">
          <p>Founded and co-founded:</p>
          <div>
            <p className="subTitle">STAR Laces <Link href={"https://starlaces.org/"} target="_" className="wordLink green">&#8599;</Link></p>
            <Image
              src={"/starlaces.png"}
              alt="STAR Laces Website preview"
              width={1918}
              height={958}
              style={{ width: '100%', height: 'auto' }}
              className="mb2"
              priority
            />
            <p>[STAR LACES retail website, <Link href={"https://starlaces.org/"} target="_" className="wordLink green">live</Link>] One of the first major projects I worked on. I built a team and we won a $7000 grant in 2019 from a Social Innovation competition. I began selling prototypes and growing the brand a year prior.</p>
          </div>
          <div>
            <p className="subTitle">SAMEWAVE7 <Link href={"https://samewave7.com/"} target="_" className="wordLink green">&#8599;</Link></p>
             <Image
              src={"/samewave.png"}
              alt="Samewave Website preview"
              width={1420}
              height={574}
              style={{ width: '100%', height: 'auto' }}
              className="mb2"
              priority
            />
            <p className="mb3">[SAMEWAVE7 archive, <Link href={"https://samewave7.com/"} target="_" className="wordLink green">live</Link>] Artist Collective I participate in. We create editorial content and occasionally take commissions or sell goods.</p>
          </div>
          {/* <div>
            <p className="subTitle">drink-wall <Link href={"https://drink-wall.com/"} target="_" className="wordLink green">&#8599;</Link></p>
            <Image
              src={"/drinkwall.png"}
              alt="Drink-Wall Website preview"
              width={1420}
              height={574}
              style={{ width: '100%', height: 'auto' }}
              className="mb2"
              priority
            />
            <p>[drink-wall website, <Link href={"https://starlaces.org/"} target="_" className="wordLink green">live</Link>] a journal for visual drink + food displays in grocery and deli stores globally</p>
          </div> */}
          <div>
            <p className="subTitle">Green Butterfly</p>
            <p className="mb3">iOS app that helps users see the real impact of their daily environmental choices. By logging even small actions, like recycling one bottle or taking the stairs, the app shows how these add up to offset measurable amounts of CO₂ visualized as balloons.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
