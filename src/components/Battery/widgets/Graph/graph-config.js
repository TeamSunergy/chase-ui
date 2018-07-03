export const graphs = {
  /** Pack Instantaneous Voltage & Pack Current **/
  packVoltageAndCurrent: {
    name: "packVoltageAndCurrent",
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
  /** Pack Instantaneous Voltage **/
  packInstantaneousVoltage: {
    name: "packInstantaneousVoltage",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Pack Voltage (v)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgb(244, 65, 124)',
          borderColor: 'rgb(244, 65, 124)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(244, 65, 124)',
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
};