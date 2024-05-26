import { Search } from "lucide-react";
import { Input } from "./ui/input";

const Searchbar = () => {
  return (
    <Input
      type="search"
      id="search"
      autoFocus
      placeholder="Search forms"
      className="h-9 w-[200px] min-w-[200px]"
      icon={{
        placement: "start",
        className: "h-9",
        component: <Search size={19} className="text-muted-foreground" />,
      }}
    />
  );
};
export default Searchbar;
