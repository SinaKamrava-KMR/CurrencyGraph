import styled from "styled-components";
import Options from "./Options";

const Wrapper = styled.header`
  background-image: linear-gradient(170deg, #af60b9, #9e6bc1, #7f79c8);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Text = styled.p<TextProps>`
  font-weight: ${(props) => props.weight};
  text-transform: uppercase;
  font-size: ${(props) => (props.weight === "bold" ? "2rem" : "1rem")};
  @media (min-width: 801px) {
    font-size: ${(props) => (props.weight === "bold" ? "2.5rem" : "1.3rem")};
  }
`;
const HeadText = styled.p`
 font-size: 1.2rem;
 margin-inline: auto;
 text-transform: uppercase;

`;

const Small = styled.small`
  text-transform: uppercase;
  color: #d4d4d4;
  font-size: 1.2rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <Text weight="light"> Bitcoin Wallet</Text>
      <Text weight="bold"> 0 btn</Text>
      <Small>0 usd</Small>
      <Options />
      <HeadText>
        Price Graph
      </HeadText>
    </Wrapper>
  );
};

export default Header;
