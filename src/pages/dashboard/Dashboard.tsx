// import Chart from "@/components/Chart";
import Chart from "@/components/Chart";
import { BarChart2, FileText, Tag, UserPlus } from "lucide-react";

const data = [
  {
    label: "Total Sales",
    value: "2000",
    icon: <BarChart2 size={16} className="text-white" />,
    color: "#fa5a7e",
    bgColor: "#ffe2e6",
  },
  {
    label: "Total Orders",
    value: "200",
    icon: <FileText size={16} className="text-white" />,
    color: "#ff947a",
    bgColor: "#fff4de",
  },
  {
    label: "Product Sold",
    value: "2000",
    icon: <Tag size={16} className="text-white" />,
    color: "#3cd856",
    bgColor: "#dcfce7",
  },
  {
    label: "New Customers",
    value: "100",
    icon: <UserPlus size={16} className="text-white" />,
    color: "#bf83ff",
    bgColor: "#f4e8ff",
  },
];

const Dashboard = () => {
  return (
    <div className="w-full ">
      <div className="grid sm:grid-cols-2 gap-3 ">
        <div className="p-3 bg-white rounded-lg h-[250px] flex flex-col">
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Daily Sales</h3>
            <p className="text-xs text-muted-foreground mt-1">Sales Summary</p>
          </div>

          <div className="mt-8 flex justify-between gap-3">
            {data.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: item.bgColor }}
                className={`p-3 rounded-md flex-1`}
              >
                <div className="rounded-lg">
                  <div
                    style={{ backgroundColor: item.color }}
                    className={`rounded-full h-8 w-8 flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                </div>
                <p className="mt-3 font-semibold text-lg">{item.value}</p>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <h3 className="font-semibold text-xl">Daily Business</h3>
          <div className="mt-6">
            <Chart type="line" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mt-3 ">
        <div className="p-3 bg-white rounded-lg h-[250px] flex flex-col">
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Bill Wise Sales</h3>
          </div>
          <div className="mt-6">
            <Chart type="bar" />
          </div>
        </div>
        <div className="p-3 bg-white rounded-lg h-[250px] flex flex-col">
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Item Wise Sales</h3>
          </div>
          <div className="mt-6">
            <Chart type="line" />
          </div>
        </div>
        <div className="p-3 bg-white rounded-lg h-[250px] flex flex-col">
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Daily Collection</h3>
          </div>
          <div className="mt-6">
            <Chart type="pie" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
