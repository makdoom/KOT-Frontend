import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

type ChartPropType = {
  type: "line" | "bar" | "pie";
};

const Chart = ({ type }: ChartPropType) => {
  const factoryChartOptions = {
    line: <LineChart />,
    bar: <BarChart />,
    pie: <PieChart />,
  };
  return factoryChartOptions[type];
};

export default Chart;
