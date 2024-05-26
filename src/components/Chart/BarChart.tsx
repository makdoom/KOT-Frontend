import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = () => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 200,
        },
        grid: {
          display: false,
        },
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
        backgroundColor: "green",
        borderColor: "red",
      },
    ],
  };

  return <Bar options={options} data={data} height={180} />;
};

export default BarChart;
