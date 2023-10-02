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
import { useEffect, useRef } from "react";
import PriceLine from "./PriceLine";

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
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Labels = styled.div`
  width: 100%;
  height: 10rem;
  margin-inline: auto;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 810px) {
    width: 90%;
    font-size: 1.5rem;
  }
`;
interface ItemProps {
  active: boolean;
}

const Item = styled.p<ItemProps>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#ffffff2b" : "transparent")};
`;
const Flex1 = styled.span`
  flex: 1;
`;

const labels = ["1y", "6m", "3m", "2m", "1m", "1w", "1d", "24h"];

const CurrencyChart = () => {
  const lineRef = useRef<ChartJS<"line", number[], string>>(null);
  
  useEffect(() => {
    console.log(lineRef.current!.chartArea.width);
 
  }, []);

  return (
    <ChartAreaWrapper>
      <Labels>
        {labels.map((item, idx) => (
          <Item active={idx == 4} key={idx}>
            {item.toUpperCase()}
          </Item>
        ))}
      </Labels>
      <Flex1 />
      <Line ref={lineRef} data={data} options={options} />
      <PriceLine/>
    </ChartAreaWrapper>
  );
};

export default CurrencyChart;
