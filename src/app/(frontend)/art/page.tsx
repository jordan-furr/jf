import Image from "next/image";

export default function Page() {
  const imageOrder = [10, 1, 9, 4, 7, 11, 2, 8];
  return (
    <div className="page">
      <div className="content">
        {/* <p className="mb5">I am a fiber artist at large. Quilting has my heart.</p>*/}
        <div className="flex-row ">
          <div>
            <Image
              src="/boat_large.JPG"
              alt=""
              fill
              sizes="(max-width: 799px) 50vw, 16.7vw"
              className="coaster-img"
            />
            <p>Orange Sunset</p>
          </div>
          <div>
            <Image
              src="/boat.JPG"
              alt=""
              fill
              sizes="(max-width: 799px) 50vw, 16.7vw"
              className="coaster-img"
            />
            <p>Alive Light</p>
          </div>

        </div>



        <p className="mb3">COASTERS, 2025</p>
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
        </div>
        <p className="mb3">FOR SALE</p>
        <div className="flex-row space-between">
          <a className="w-45" href="https://buy.stripe.com/test_7sY00j2ef2mD25n5of6wE00">
            <div className="quiltItem">

              <Image
                src="/boat.JPG"
                alt=""
                width={120}
                height={160}
                layout="responsive"
                className="mb3"
              />
              <div className="flex-row space-between">
                <p>Orange Sunset</p>
                <p>$180</p>
              </div>
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
                className="mb3"
              />
              <div className="flex-row space-between">
                <p>Alive Light</p>
                <p>$100</p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
