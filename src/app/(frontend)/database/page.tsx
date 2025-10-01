import SideBar from "@/app/components/sidebar";

export default function Page() {
  return (
    <div className="page">
      <SideBar imageSrc="/yellow-jordanfurr.png" />
      <div className="content">
        <p className="pageTitle">Database</p>
        <p>welcome to things I like</p>
      </div>
    </div>
  );
}
