import { likes } from "@/app/likes";

export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="mb3 spirit-blue">Welcome to... Things I Like!</p>
        <ul className="likes">
          {likes.map((item) => {
            return (
              <li key={item.title}><p className="">{item.title}</p></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
