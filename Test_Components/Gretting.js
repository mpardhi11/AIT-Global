import React from "react";
import "./MyCustomCss.css";
function Gretting(props) {
  let gretting = "";
  let cssStyle = {};
  let curDate = new Date(2021, 11, 15, 5);
  if (curDate.getHours() >= 0 && curDate.getHours() < 12) {
    gretting = "Good Morning";
    cssStyle.color = "Green";
  } else if (curDate.getHours() >= 12 && curDate.getHours() <= 19) {
    gretting = "Good Afternoon";
    cssStyle.color = "Orange";
  } else {
    gretting = "Good Night";
    cssStyle.color = "gray";
  }

  console.log(curDate.getHours());
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{gretting}</span>
        </h1>
      </div>
    </>
  );
}

export default Gretting;
