export const graphs = {
  /** Battery SoC **/
  batterySoc: {
    name: "batterySoc",
    type: "line",
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Battery SOC (%)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
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
            max: 100,
            min: 0,
            stepSize: 5
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
  /** Net Power **/
  netPower: {
    name: "netPower",
    type: "line",
    data: {
      labels: ["0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM"],
          datasets :
          [
            {
              label: 'Net Power (watts)',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
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
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          },
          ticks: {
            max: 200,
            min: -200,
            stepSize: 50
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
  /** Net Power Gauge **/
  netPowerGauge: {
    name: "netPowerGauge",
    type: "horizontalbar",
    data: {
      labels: ["-"],
      datasets: [
        {
          label: 'Net Power Gauge',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
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
          data: [0]
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
          stacked: false,
          gridLines: {
            display: false,
            color: "rgba(255,99,132,0.2)"
          },
        }],
        xAxes: [{
          stacked: false,
          gridLines: {
            display: true
          },
          ticks: {
            max: 500,
            min: -500,
            stepSize: 100
          }
        }]
      }
    }
  },
};