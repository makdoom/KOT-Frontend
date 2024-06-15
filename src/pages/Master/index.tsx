import { cn } from "@/lib/utils";
import Header from "./Header";
import MainGrid from "./MainGrid";

const Master = () => {
  return (
    <div className={cn("w-full h-full flex flex-col")}>
      <Header />
      <MainGrid />
    </div>
  );
};
export default Master;
