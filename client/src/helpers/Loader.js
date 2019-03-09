import React, { PropTypes } from 'react';
import loaderGIF from "./loader.gif";

const Loader = (props) => {
  return (
  	<img src={loaderGIF} alt="Loading..." style={{width: '100px', margin: "auto", display: 'block'}}/>
  );
};

export default Loader;