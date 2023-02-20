import React, { useState, useEffect} from "react";
import './css/closecase.css'
import axios from 'axios';

const CloasedComplaintsCard = (closedCases) => {

  // const userDist = useState(localStorage.getItem("userDistrict"));
  const userToken = useState(localStorage.getItem("userToken"));
  console.log(userToken[0])

  const API_URL = "http://127.0.0.1:8000/api/complaints/closedCases";

  const numberOfCases = closedCases.length || 0;
  // fetchData() {
  //   fetch(API_URL)
  //   .then(response => response.json(), 
  //     console.log(response.data)
  //   );
  // }

  useEffect(() => {
    axios.get(API_URL, {
      "Content-Type": "application/json",
      // headers: { Authorization: `Token ${userToken[0]}` }
    }).then(response => {
      // setData(response.data);
      console.log('GoT CLOSED CASES');
      console.log(response.data);
    })
    .catch(error => {
      console.log("GET CLOSED CASES ERROR")
      console.log("is this token?? = " + userToken[0])
      console.log(error);
    });
  });

  return (
    <div className="closecase-container">
    <div className="closecase-container1">
      <span className="closecase-text">
        <span className="closecase-text1">{numberOfCases}</span>
        <br></br>
      </span>
      <span className="closecase-text3">
        <span className="closecase-text4">Closed Cases</span>
        <br></br>
      </span>
    </div>
  </div>
  );
};
  
// Default export
export default CloasedComplaintsCard;