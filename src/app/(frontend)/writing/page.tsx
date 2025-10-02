import { essays } from "@/app/essay";


export default function Page() {
  return (
    <div className="page">
      <div className="content">
        <p className="pageTitle">latest</p>
        <p className="mb6">...coming soon...</p>
        <p className="pageTitle">essay</p>
        <p className="mb3">I write memoir-theory, blending my personal narrative with history and modern social theory. I fell in love with the genre while earning a minor in American Culture from the University of Michigan.</p>
        <p>My work reflects a sharp, reflective voice. Texting on a Horse, a debut essay collection set to be completed in 2025, reflects on:</p>
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
