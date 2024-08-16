import PageLayout from "../../Components/PageLayout";
import Tabview from "./components/Tabview";
export default function Schedule() {
  return (
    <PageLayout title={"Event Timings"} imgUrl={"/ambassador.png"}>
        <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background">
          <p className="font-extrabold text-5xl leading-normal">Schedule</p>
          <div>
            <Tabview tab1={"Day 1"} tab2={"Day 2"} />
          </div>
        </div>
    </PageLayout>
  );
}

