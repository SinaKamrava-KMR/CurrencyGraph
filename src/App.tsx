import styled from "styled-components";
import Header from "./components/header";
import GlobalStyles from "./style/global";
import Chart from "./components/chart/Chart";

const Container = styled.section`
 background-image: linear-gradient(150deg,#a859a8,#7f79c8,#599ed0);
 
`;
const ChartWrapper = styled.section`
  /* background-image: linear-gradient(45deg,#b17ecb,#599ed0); */
  height:500px;
  padding: 2rem;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <ChartWrapper>
        <Chart />
      </ChartWrapper>
    </Container>
  );
};

export default App;
