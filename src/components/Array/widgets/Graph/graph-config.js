export const graphs = {
  /** Sub Array Power **/
  subArrayPower: {
    name: "subArrayPower",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Sub-A (w)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#ff4949',
          borderColor: '#ff4949',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#ff4949',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#ff4949',
          pointHoverBorderColor: '#000',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: []
        },
        {
          label: 'Sub-B (w)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#49ffc5',
          borderColor: '#49ffc5',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#49ffc5',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#49ffc5',
          pointHoverBorderColor: '#000',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: []
        },
        {
          label: 'Sub-C (w)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#499eff',
          borderColor: '#499eff',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#499eff',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#499eff',
          pointHoverBorderColor: '#000',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: []
        }
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          //**fontColor: 'rgb(255, 99, 132)'
        },
        position: 'bottom',
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            color: "rgba(255,99,132,0.2)"
          },
          ticks: {
            max: 200,
            min: 100,
            stepSize: 10
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    }
  },
  /** Pack Instantaneous Voltage & Pack Current **/
  totalArrayPower: {
    name: "totalArrayPower",
    type: "line",
    xAxisMax: 10,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Pack Voltage (v)',
          yAxisID: 'A',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(66, 244, 182, 1)',
          borderColor: 'rgba(66, 244, 182, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: []
        },
        {
          label: 'Pack Current (w)',
          yAxisID: 'B',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgb(65, 163, 244)',
          borderColor: 'rgb(65, 163, 244)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: []
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          //**fontColor: 'rgb(255, 99, 132)'
        },
        position: 'bottom',
      },
      scales: {
        yAxes: [{
          id: 'A',
          position: 'left',
          gridLines: {
            display: false,
            color: "rgba(255,99,132,0.2)"
          },
          ticks: {
            max: 100,
            min: 0,
            stepSize: 5
          },
        },{
          id: 'B',
          position: 'right',
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          },
          ticks: {
            max: 24,
            min: 0,
            stepSize: 2
          },
        }
        ],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    }
  },
};