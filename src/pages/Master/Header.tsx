import { useParams } from "react-router-dom";
import { capitalize, cn } from "@/lib/utils";
import { CirclePlus, CircleX, SaveAll, Settings } from "lucide-react";

const Header = () => {
  const { formName } = useParams();

  return (
    <div className={cn("flex justify-between items-center mt-1")}>
      <h3 className="font-medium text-lg">{capitalize(formName)} Master</h3>
      <div className="flex gap-1 text-sm bg-white rounded-md">
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <CirclePlus size={17} />
          <p className="text-sm">New</p>
        </div>
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <SaveAll size={17} />
          <p className="text-sm">Save</p>
        </div>
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <Settings size={17} />
          <p className="text-sm">Setting</p>
        </div>
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <CircleX size={17} />
          <p className="text-sm">Close</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
