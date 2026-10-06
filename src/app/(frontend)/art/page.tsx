import Image from "next/image";

export default function Page() {
  const imageOrder = [10, 1, 9, 4, 7, 11, 2, 8];
  return (
    <div className="page">
      <div className="content">
        {/* <p className="mb5">I am a fiber artist at large. Quilting has my heart.</p>*/}
       



        {/* <p className="mb3">COASTERS, 2025</p>
        <div className="photo-grid mb7">
          {imageOrder.map((n) => (
            <div className="coaster" key={n}>
              <Image
                src={`/coaster-${n}.png`}
                alt=""
                fill
                sizes="(max-width: 799px) 50vw, 16.7vw"
                className="coaster-img"
              />
            </div>
          ))}
        </div> */}
        {/* <p className="mb3">FOR SALE</p> */}
        <div className="flex-row space-between">
          <a className="w-45" href="https://buy.stripe.com/test_7sY00j2ef2mD25n5of6wE00">
            <div className="quiltItem">

              <Image
                src="/boat.JPG"
                alt=""
                width={120}
                height={160}
                layout="responsive"
                className="mb2"
              />
              <div className="flex-row space-between mb1">
                <p>Orange Sunset</p>
                <p>$180</p>
              </div>
              <p>22.5"x12.5"</p>
            </div>
          </a>
          <a className="w-45" href="https://buy.stripe.com/test_7sY00j2ef2mD25n5of6wE00">
            <div className="quiltItem">
              <Image
                src="/triangle.JPG"
                alt=""
                width={120}
                height={160}
                layout="responsive"
                className="mb2"
              />
              <div className="flex-row space-between mb1">
                <p>Light</p>
                <p>$110</p>
              </div>
              <p>20.5"x10.5"</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
