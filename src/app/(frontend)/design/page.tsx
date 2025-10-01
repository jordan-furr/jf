import SideBar from "@/app/components/sidebar";

export default function Page() {
  return (
    <div className="page">
      <SideBar imageSrc="/red-jordanfurr.png" />
      <div className="content">
        <p className="pageTitle">Design</p>
        <p>welcome</p>
      </div>
    </div>
  );
}
