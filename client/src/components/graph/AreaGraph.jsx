import AreaGraphStyles from "./AreaGraph.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { useAppContext } from "../../context/AppContext";

const data = [
  {
    name: "Page A",
    saved: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    saved: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    saved: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    saved: 2780,
  },
  {
    name: "Page E",
    saved: 1890,
  },
  {
    name: "Page F",
    saved: 2390,
  },
  {
    name: "Page G",
    saved: 3490,
  },
];

const AreaGraph = ({ aspect }) => {
  const { monthlyRevSales } = useAppContext();

  return (
    <div className="chart">
      <div className="title">Monthly Overview</div>
      <ResponsiveContainer width="99%" aspect={aspect}>
        <AreaChart
          width={300}
          height={350}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
        >
          <defs>
            <linearGradient
              name="Total Saved"
              id="saved"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor="#1352b9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1352b9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="saved" stroke="blue" />

          <CartesianGrid
            strokeDasharray="3 3"
            className="chartGrid"
          />
          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            name="Total Saved"
            dataKey="saved"
            stroke="#1352b9"
            fillOpacity={1}
            fill="url(#saved)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaGraph;
