import { ChartData, ChartOptions } from "chart.js";

import { Context } from "chartjs-plugin-datalabels";

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22,
];

export const data:ChartData<"line"> = {
  labels: labels,

  datasets: [
    {
      fill: true,
      tension: 0.3,
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
      data: [
        120, 20, 50, 10, 30, 50, 100, 23, 32, 50, 18, 87, 120, 20, 50, 10, 30,
        50, 100, 23, 32, 50, 18, 87, 120, 20, 50, 10, 30, 50, 100, 23, 32, 50, 18, 87, 120, 20, 50, 10, 30,
        50, 100, 23, 32, 50, 18, 87,
      ],
      pointStyle:false
    },
  ],
};

export const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
    },
  },

  scales: {
    x: {
      min: 0,
      max: 12,
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
      },
    
      grid: {
        color: "#ffffff23",
      },

      border: {
        display: false,
      },
    },
  },

  // onHover: function(evt, activeElements) {
  //   console.log(evt);
  //   console.log(activeElements);

  // }
};
