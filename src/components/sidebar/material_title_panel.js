import React from 'react';

const MaterialTitlePanel = (props) => {
  // const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

  return (
    <div>
      <div>
      {props.title}
      </div>
      {props.children}
    </div>
  );
};

export default MaterialTitlePanel;