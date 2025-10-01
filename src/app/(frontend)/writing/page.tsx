import SideBar from "@/app/components/sidebar";

export default function Page() {
  return (
    <div className="page">
      <SideBar imageSrc="/navy-jordanfurr.png" />
      <div className="content">
        <p className="pageTitle">Latest</p>
        <p>welcome</p>
      </div>
    </div>
  );
}
