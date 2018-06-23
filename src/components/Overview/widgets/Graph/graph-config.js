export const graphs = {
  /** Net Power **/
  netPower: {
    name: "netPower",
    data: {
      labels: ["0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM"],
          datasets
    :
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
      scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          },
          ticks: {
            max: 75,
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
  /** Speed **/
  batterySoc: {
    name: "batterySoc",
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
      scales: {
        yAxes: [{
          stacked: true,
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
};