import { essays } from "@/app/essay";


export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="pageTitle">blog</p>
        <p className="mb6">...coming soon...</p>
        <p className="pageTitle">essays</p>
        <p className="mb3">I write memoir-theory, blending my personal narrative with nmodern social theory. I fell in love with the genre while studying American Culture at the University of Michigan.</p>
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
