import React from 'react';
// import  logProps  from './logProps';
import stylesWrapper from './HOC/stylesWrapper';

// color: '#c7c6c6',#eb3434
const FancyButton = (  props ) => {

  return <button style={props.styles}>Hello</button>;
}
export default stylesWrapper(FancyButton);
// export default logProps(FancyButton);