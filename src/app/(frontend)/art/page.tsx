import Image from "next/image";
import { quilts } from "../../quilts";

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
          {Object.entries(quilts).filter(([, quilt]) => !("hidden" in quilt)).map(([key, quilt]) => {
            const item = (
              <div className="quiltItem">
                <Image
                  src={quilt.image}
                  alt=""
                  width={120}
                  height={160}
                  layout="responsive"
                  className="mb2 quiltImg"
                />
                <div className="flex-row space-between mb1">
                  <p>{quilt.name}</p>
                  <p>{quilt.price}</p>
                </div>
                <div className="flex-row space-between">
                  <p>{quilt.size}</p>
                  {quilt.sold && <p className="sold">SOLD</p>}
                </div>
              </div>
            );
            return quilt.sold ? (
              <div className="w-45" key={key}>{item}</div>
            ) : (
              <a className="w-45" href={`/api/checkout?item=${key}`} key={key}>{item}</a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
