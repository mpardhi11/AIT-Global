import React from "react";
import PropTypes from "prop-types";

RandomImg_Fun.propTypes = {};

function RandomImg_Fun(props) {
  let dd = new Date().toLocaleDateString();
  let ddd = new Date().toLocaleTimeString();
  return (
    <div>
      <h1>{dd}</h1>
      <h2>{ddd}</h2>
    </div>
  );
}

export default RandomImg_Fun;
