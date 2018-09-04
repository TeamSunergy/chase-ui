export const graphs = {
  /** Pack Voltage **/
  packVoltage: {
    name: "packVoltage",
    type: "line",
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Pack Voltage (v)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#42f4b6',
          borderColor: '#42f4b6',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#42f4b6',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#42f4b6',
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
            display: true,
            color: "#efefef"
          },
          ticks: {
            max: 130,
            min: 80,
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
  /** Vehicle Speed **/
  speed: {
    name: "speed",
    type: "line",
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Speed (mph)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#f441b2',
          borderColor: '#f441b2',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#f441b2',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#f441b2',
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
            color: "#efefef"
          },
          ticks: {
            max: 85,
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
            color: "#efefef"
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
            color: "#efefef"
          },
        }],
        xAxes: [{
          stacked: false,
          gridLines: {
            display: true
          },
          ticks: {
            max: 25,
            min: -25,
            stepSize: 5,
          }
        }]
      }
    }
  },
};
