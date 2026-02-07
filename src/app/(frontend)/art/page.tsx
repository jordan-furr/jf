import Image from "next/image";

export default function Page() {
  const imageOrder = [10, 1, 9, 4, 7,  3, 11, 2,8,  6,  5];
  return (
    <div className="page">
      <div className="content">
        <p className="mb5">I am a fiber artist at large. Quilting has my heart.</p>

        <p className="mb3">COASTERS, 2025</p>
        <div className="photo-grid">

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
        <p className="mb1">..</p>
      </div>
    </div>
  );
}
