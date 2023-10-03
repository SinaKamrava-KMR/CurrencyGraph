import styled from "styled-components";
import Header from "./components/header";
import CurrencyChart from "./components/chart/CurrencyChart";

const Container = styled.section`
  background-image: linear-gradient(150deg,#a859a8,#7f79c8,#599ed0);
  display: flex;
  flex-direction: column;
`;

const ChartWrapper = styled.section`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <ChartWrapper>
        <CurrencyChart />
      </ChartWrapper>
    </Container>
  );
};

export default App;
