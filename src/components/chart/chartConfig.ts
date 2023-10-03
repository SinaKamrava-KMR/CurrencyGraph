import { ChartData, ChartOptions } from "chart.js";

import { Context } from "chartjs-plugin-datalabels";
import { datasets } from "../../data/datasets";

const labels = datasets.map(data => {
  return `${data.date.year}/${data.date.month}/${data.date.day}`
})

export const data:ChartData<"line"> = {
  labels: labels,

  datasets: [
    {
      fill: true,
      tension: 0.25,
      backgroundColor: (context: Context) => {
        const bgColor: string[] = [
          "rgba(255, 253, 254, 0.807)",

          "rgba(253, 246, 248, 0.098)",
        ];

        if (!context.chart.chartArea) return;

        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradiantBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradiantBg.addColorStop(0, bgColor[0]);
        gradiantBg.addColorStop(1, bgColor[1]);
        return gradiantBg;
      },
      borderColor: "rgba(246, 246, 246, 0.647)",
      data:datasets.map(data=>data.price) ,
      pointStyle: false,
    },
  ],
};

export const options: ChartOptions<"line"> = {
  responsive: true,
  events: ['mousemove'],
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
    },
    tooltip: {
      enabled: false
    }
  },

  scales: {
    x: {
      min: 0,
      max: 60,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      //  border: {
      //   color: '#597aff'
      // }
    },
    y: {
      
      position: "right",
      ticks: {
        color: "#fff",
        callback: function (value) {
          
          return  Number(value).toFixed(3);
      }
     
      },
    
      grid: {
        color: "#ffffff23",
      },

      border: {
        display: false,
      },
    },
  },
  hover: {
    mode: 'index',
    intersect: false
 },
  onHover: function(_evt, activeElements) {
    // console.log(evt);
    activeElements[0].element.options.pointStyle = true;
    
  },
  
};
