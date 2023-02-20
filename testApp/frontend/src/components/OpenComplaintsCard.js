import React from "react";

import './css/opencase.css'

  
//const API_URL = "http://127.0.0.1:8000/api/complaints/openCases";

const OpenComplaintsCard = (openCases) => {

//  console.log("open cases length");
  //console.log(openCases.length || 0);

  const numberOfCases = openCases.length || 0;





  return (
    <div className="opencases-container">
    <div className="opencases-container1">
      <span className="opencases-text">
        <span className="opencases-text1">Open Cases : {numberOfCases}</span>
        <br></br>
      </span>
    </div>
  </div>
  );
};
  
// Default export
export default OpenComplaintsCard;