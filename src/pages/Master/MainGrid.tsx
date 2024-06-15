import { userColumns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import mockData from "../../MOCK_DATA.json";
import { cn } from "@/lib/utils";

const MainGrid = () => {
  return (
    <div className={cn("h-[calc(100%-40px)] bg-white rounded-md mt-4 p-4")}>
      <DataTable columns={userColumns} data={mockData} />
    </div>
  );
};
export default MainGrid;
