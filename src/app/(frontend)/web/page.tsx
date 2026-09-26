import Link from "next/link";

export default function Page() {
  return (
    <div className="page website-page">
      <div className="content">
        <div className="mb6">
          <p className="w-75 mb1"><b>BAD TASTE</b></p>
          <p className="w-75 mb4">
            Brand and web studio. Seven years crafting custom digital experiences and brand identities for creatives, small businesses, healers, non-profits, and unique projects.</p>
            <p className="w-75 mb1">MANIFESTO</p>
            <p className="mb4">A website is a platform, a reflection, a statement, a gallery, a journey, an expression, an archive, an autobiography.</p>
          <div className="flex-row mobile-stack">
            <div className="mb4 w-50 mobile-stack">
              <p className="mb1">CAPABILITIES</p>
              <p>Brand/Web Design</p>
              <p>E-commerce</p>
              <p>Custom Development/Solutions</p>
              <p>Redesign, refresh, reimagine</p>
            </div>
            <div className="mb4 w-50 mobile-stack">
              <p className="mb1">TECHNOLOGIES</p>
              <p>React/Next.js, Vue/Nuxt.js</p>
              <p>Wordpress, Shopify, Squarespace</p>
              <p>Sanity, Figma</p>
            </div>

          </div>

          <p className="mb1">SELECTED WORK</p>
          <div className="site-list mb5">
            <Link href="https://samewave7.com/" target="_"><p>Samewave7</p></Link>
            <Link href="https://drink-wall.com/" target="_"><p>drink-wall</p></Link>
            <Link href="https://leeannslade.com/" target="_"><p>LeeAnn Slade</p></Link>
            <Link href="https://www.hopeaccelerator.com/" target="_"><p>Hope Accelerator</p></Link>
            <Link href="https://starlaces.org/" target="_"><p>STAR Laces</p></Link>
                        <Link href="https://www.theupsideofuncertainty.com/" target="_"><p>The Upside of Uncertainty</p></Link>
                                    <Link href="https://madewithharmony.com/" target="_"><p>Made with Harmony</p></Link>
            <Link href="https://equinimitytucson.com/" target="_"><p>Equinimity Tucson</p></Link>
                        <Link href="https://www.amberlater.com/" target="_"><p>Amber Later</p></Link>
            <Link href="https://spintheupwheel.netlify.app/" target="_"><p>42 Tool Selector</p></Link>
            <Link href="https://earnestproject.com/" target="_"><p>Earnest Project</p></Link>
            {/* <Link href="https://centerforexpandingcompassion.org/" target="_"><p>Center For Expanding Compassion</p></Link> */}
            {/* <Link href="https://upschool.org/" target="_"><p>UP School</p></Link>
            <Link href="https://ezrafurr.com/" target="_"><p>Ezra Geo</p></Link> */}
          </div>

          <div className="mb4">
            <p className="mb2">?</p>
            <p className="mb1">PRICING</p>
            <p>Simple site: $600-900</p>
            <p>Portfolio / informative site: $1,000-2,200</p>
            <p className="mb4">E-commerce: $1,500-3,000+</p>
            <p className="mb2">Timelines run from a few weeks to several months depending on scope.</p>
          </div>

          <Link href="/contact"><p className="wordLink">Start a project &rarr;</p></Link>
        </div>

      </div>
    </div>
  );
}
