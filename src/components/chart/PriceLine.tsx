import styled from "styled-components";
import {useState,useEffect} from "react"

type WrapperType = {
  left: number;
  hidden:boolean
}

const Wrapper = styled.div<WrapperType>`
  top: 12%;
  bottom: 0;
  left: 0;
  transform: translateX(${props=>props.left}px);
 transition: all .05s ease;
  width: 2px;
  background-color: #ebebeb;
  position: absolute;
  display: ${props=>props.hidden?"none":"block"};
`

const PriceLine = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      console.log(e);
      if (e.clientY > 200) {
        setPosition(e.clientX)
      } else {
        setPosition(0)
      }
    }

    window.document.addEventListener("mousemove",handleMouseMove)
    return () => {
      removeEventListener("mousemove",handleMouseMove)
    }
  }, []);
  return (
    <Wrapper left={position} hidden={position==0}></Wrapper>
  )
}

export default PriceLine