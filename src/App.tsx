import styled from "styled-components";
import Header from "./components/header";
import GlobalStyles from "./style/Global";
import CurrencyChart from "./components/chart/CurrencyChart";

const Container = styled.section`
 background-image: linear-gradient(150deg,#a859a8,#7f79c8,#599ed0);
 
`;
const ChartWrapper = styled.section`
width: 100%;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <ChartWrapper>
        <CurrencyChart />
      </ChartWrapper>
    </Container>
  );
};

export default App;
