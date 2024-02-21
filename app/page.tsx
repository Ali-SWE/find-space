import Overview from "./components/Overview";
import Info from "./components/Info";
import Table from "./components/Table";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between pt-[38px] px-24 mt-5 mb-5">
      <Overview/>
      <Info/>
      <Table/>
    </div>
  );
}
