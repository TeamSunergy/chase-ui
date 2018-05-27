import React from 'react'
//npm horizontal gauge
const defaultProps = {
  width: 500,
  height: 80,
  value: 0,
  max: 100,
  min: 0,
  box: { x1: "2%", x2: "96%", y1: "30%", y2: "40%", widthK: 0.96 },
  axis: { x1: "2%", x2: "98%", y1: "90%", y2: "80%", widthK: 0.98 },
  ticks: [{label: '0', value: 0}, {label: '50', value: 50}, {label: '100', value: 100}]
}

export default (props) => {

  props = {
    ...defaultProps,
    ...props
  };

  function calcAxisPos(val) {
    if(props.min === val) {
      return props.axis.x1;
    } else if (props.max === val) {
      return props.axis.x2;
    } else {
      return (val-props.min) * (props.width * props.axis.widthK)/(props.max-props.min);
    }
  }

  return (
    <svg width={props.width} height={props.height}>
      <defs>
        <linearGradient id="gradient" x1={props.box.x1} y1={props.box.y1} x2={props.box.x2} y2={props.box.y1} spreadMethod="pad">
          <stop offset="0%" stopColor="red" stopOpacity="1"></stop>
          <stop offset="50%" stopColor="yellow" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="green" stopOpacity="1"></stop>
        </linearGradient>
      </defs>
      <g>
        <rect x={props.box.x1} y={props.box.y1} width={props.box.x2} height={props.box.y2} fill="url(#gradient)"></rect>
      </g>
      <g>
        <text textAnchor="middle" x={calcAxisPos(props.value)} y={props.axis.y1} fontSize="12" fill="#000">
          {props.value}
        </text>
      </g>
      <g>
        <line y1={props.box.y1} x1={calcAxisPos(props.value)} y2={"70%"} x2={calcAxisPos(props.value)} strokeWidth="1" stroke="#000"></line>
      </g>
    </svg>
  );
}