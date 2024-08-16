import PageLayout from "../../../Components/PageLayout";
import { EventCategoryList } from "../../../constants/events";
import CategoryCard from "../components/CategoryCard";

export default function EventCategory() {
  return (
    <PageLayout title={"Events"} imgUrl={"/events/events.jpg"}>
      <div className="px-5 py-5 flex gap-5 flex-wrap items-center justify-center">
        {EventCategoryList.map((item) => (
          <CategoryCard key={item.id} title={item.title} url={item.url} img={item.img} />
        ))}
        
      </div>
    </PageLayout>
  );
}
