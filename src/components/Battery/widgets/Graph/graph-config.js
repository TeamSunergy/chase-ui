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
        },
        {
          label: 'Pack Current (w)',
          yAxisID: 'B',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#41a3f4',
          borderColor: '#41a3f4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#41a3f4',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#41a3f4',
          pointHoverBorderColor: '#000',
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
            color: "#efefef"
          },
          ticks: {
            max: 130,
            min: 80,
            stepSize: 5
          },
        },{
          id: 'B',
          position: 'right',
          gridLines: {
            display: true,
            color: "rgba(65, 163, 244, 0.5)"
          },
          ticks: {
            max: 110,
            min: -50,
            stepSize: 10
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
  /** Delta Cell Voltage **/
  deltaCellVoltage: {
    name: "deltaCellVoltage",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Delta Hi-Cell Voltage (v)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#f4417c',
          borderColor: '#f4417c',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#f4417c',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#f4417c',
          pointHoverBorderColor: '#000',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: []
        },
        {
          label: 'Delta Lo-Cell Voltage (v)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#41d0f4',
          borderColor: '#41d0f4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#41d0f4',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#41d0f4',
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
            max: 0.5,
            min: -0.5,
            stepSize: 0.1
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
  /** Delta Cell Temperature **/
  deltaCellTemp: {
    name: "deltaCellTemp",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Delta Hi-Cell Temp (C)',
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
        },
        {
          label: 'Delta Lo-Cell Temp (C)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#41d0f4',
          borderColor: '#41d0f4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#41d0f4',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#41d0f4',
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
            max: 75,
            min: 0,
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
  /** Delta Hi-Cell Voltage
  deltaHiCellVoltage: {
    name: "deltaHiCellVoltage",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Delta Voltage (v)',
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
            display: true,
            color: "#efefef"
          },
          ticks: {
            max: 100,
            min: -100,
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
   **/
  /** Delta Lo-Cell Voltage
  deltaLoCellVoltage: {
    name: "deltaLoCellVoltage",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Delta Voltage (v)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#41d0f4',
          borderColor: '#41d0f4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#41d0f4',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#41d0f4',
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
            max: 100,
            min: -100,
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
   **/
  /** Delta Hi-Cell Temperature
  deltaHiCellTemp: {
    name: "deltaHiCellTemp",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Delta Temp (C)',
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
            display: true,
            color: "#efefef"
          },
          ticks: {
            max: 100,
            min: -100,
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
   **/
  /** Delta Lo-Cell Temperature
  deltaLoCellTemp: {
    name: "deltaLoCellTemp",
    type: "line",
    xAxisMax: 12,
    data: {
      labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      datasets: [
        {
          label: 'Delta Temp (C)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#41d0f4',
          borderColor: '#41d0f4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#41d0f4',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#41d0f4',
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
            max: 100,
            min: -100,
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
   **/
};