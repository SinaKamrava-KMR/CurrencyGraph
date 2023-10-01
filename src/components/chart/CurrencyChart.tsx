import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
 
  Filler,
} from "chart.js";
import zoom from "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { data, options } from "./chartConfig";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  zoom
);

const ChartAreaWrapper = styled.div`
  width: 100%;
`;

const CurrencyChart = () => {
  return (
    <ChartAreaWrapper>
      <Line data={data} options={options} />
    </ChartAreaWrapper>
  );
};

export default CurrencyChart;
