import styled from "styled-components";
import {useState,useEffect} from "react"
// import {
//   Chart as ChartJS,
// } from "chart.js";
type WrapperType = {
  left: number;
  hidden:boolean
}
// type PriceLineType = {
//   chartRef:ChartJS<"line", number[], string>
// }

const Wrapper = styled.div<WrapperType>`
  top: 15%;
  bottom: 0;
  left: 0;
  transform: translateX(${props=>props.left}px);
 transition: all .05s ease;
  width: 2px;
  background-color: #ebebeb;
  position: absolute;
  display: ${props=>props.hidden?"none":"block"};
`
const ToolTip = styled.div<WrapperType>`
  top: 10%;
  left: -5%;
  transform: translateX(${props=>props.left}px);
 transition: all .05s ease;
  width: 10%;
  border-radius: .5rem;
  height: 30px;
  background-color: #ebebeb;
  position: absolute;
  display: ${props=>props.hidden?"none":"block"};
`

const PriceLine = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      console.log(e);
      // console.log(chartRef?.current!.scales.x.chart._active.elements);
      if (e.clientY > 330) {
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
    <>
    <ToolTip left={position} hidden={position==0}></ToolTip>
    <Wrapper left={position} hidden={position==0}></Wrapper>
    </>
  )
}

export default PriceLine