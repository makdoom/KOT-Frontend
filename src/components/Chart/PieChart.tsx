import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const data = {
    labels: ["Groceries", "Rent", "Entertainment", "Travelling", "Medical"],
    datasets: [
      {
        label: "Expensens",
        data: [200, 400, 100, 200, 600],
        backgroundColor: ["red", "yellow", "purple", "blue", "green"],
      },
    ],
  };

  return <Pie options={options} data={data} height={180} />;
};

export default PieChart;
