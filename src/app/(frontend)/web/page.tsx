import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <div className="mb6">
          <p className="w-75 mb1">Seven years crafting websites + digital identities for creatives, projects, healers, practices, writers, and small brands</p>
          <Link href={"https://badtaste.dev/"}target="_"><p className="mb1 underLink">badtaste.dev</p></Link>
          <Link href={"mailto:jordan@jordanfurr.com"}><p className="mb4 ">jordan@jordanfurr.com</p></Link>
          <div className="flex-row mobile-stack">
            <div className="mb4 w-50 mobile-stack">
              <p>CAPABILITIES</p>
              <p>Brand/Web Design</p>
              <p>E-commerce</p>
              <p>Custom Development/Solutions</p>
              <p>Redesign, refresh, reimagine</p>
            </div>
             <div className="mb4 w-50 mobile-stack">
              <p>TECHNOLOGIES</p>
              <p>React/Next.js, Vue/Nuxt.js</p>
              <p>Wordpress, Shopify, Squarespace</p>
              <p>Sanity, Figma</p>
            </div>

          </div>

          <p>WORK</p>
          <div className="site-list mb4">
            <Link href="https://samewave7.com/" target="_"><p>Samewave7</p></Link>
            <Link href="https://starlaces.org/" target="_"><p>STAR Laces</p></Link>
            <Link href="https://www.theupsideofuncertainty.com/" target="_"><p>The Upside of Uncertainty</p></Link>
            <Link href="https://drink-wall.com/" target="_"><p>drink-wall</p></Link>
            <Link href="https://harmonpsychotherapy.com/" target="_"><p>Harmon Psychotherapy & Consulting</p></Link>
            <Link href="https://madewithharmony.com/" target="_"><p>Made with Harmony</p></Link>
            <Link href="https://upschool.org/" target="_"><p>UP School</p></Link>
            <Link href="https://spintheupwheel.netlify.app/" target="_"><p>Tool Library</p></Link>
            <Link href="https://www.hopeaccelerator.com/" target="_"><p>Hope Accelerator</p></Link>
            <Link href="https://earnestproject.com/" target="_"><p>Earnest Project</p></Link>
            <Link href="https://centerforexpandingcompassion.org/" target="_"><p>CFEC</p></Link>
            <Link href="https://ezrafurr.com/" target="_"><p>Ezra Geo</p></Link>
          </div>

          <div className="mb4">
            <p>?</p>
            <p>Projects take 1-4 months and cost between $500-$7,000.</p>
          </div>

          <Link href="/contact"><p className="wordLink green">Contact &rarr;</p></Link>
        </div>

      </div>
    </div>
  );
}
