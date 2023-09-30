import { HiArrowNarrowDown,HiArrowNarrowUp,HiOutlineSwitchHorizontal,HiOutlineCreditCard } from "react-icons/hi";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const IconWrapper = styled.div`
width: 3rem;
height: 3rem;
border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3c5ff37;
  font-size: 1.5rem;
  @media (min-width:810px) {
    font-size: 2rem;
    width: 5rem;
height: 5rem;
  }

`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: #e8e8e8;
  @media (min-width:810px) {
    font-size: 1.5rem;
  }
`



const Options = () => {
  return (
    <Wrapper>

      <Item>
      <IconWrapper>
        <HiArrowNarrowDown/>
        </IconWrapper>
        <p>Receive</p>
      </Item>
      <Item>
      <IconWrapper>
        <HiArrowNarrowUp/>
        </IconWrapper>
        <p>Send</p>
      </Item>
      <Item>
      <IconWrapper>
        <HiOutlineSwitchHorizontal/>
        </IconWrapper>
        <p>Exchange</p>
      </Item>
      <Item>
      <IconWrapper>
        <HiOutlineCreditCard/>
        </IconWrapper>
        <p>Buy</p>
      </Item>

    </Wrapper>
  )
}

export default Options