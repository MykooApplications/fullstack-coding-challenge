import React, { useState, useEffect} from "react";
import './css/closecase.css'
import axios from 'axios';

const CloasedComplaintsCard = () => {
  const userToken = useState(localStorage.getItem("userToken"));
  const tkn = userToken[0];
  const numberOfCases = 22;
  console.log(`user token ${tkn}`);
  useEffect(() => {
  console.log("CLOSE CASE: START FETCH");

  const configa = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://127.0.0.1:8000/api/complaints/',
    headers: { 
      'Authorization': `Token ${tkn}`
    }
    };
    axios(configa)
    .then(response => {
      console.log("CASECLOSE RESPONSE");
      console.log(response);
    }).catch(error => {
      console.log("CASECLOSE ERROR");
      console.error(error);
    })
  });

  return (
    <div className="closecase-container">
    <div className="closecase-container1">
      <span className="closecase-text">
        <span className="closecase-text1">Closed Cases : {numberOfCases}</span>
        <br></br>
      </span>
    </div>
  </div>
  );
};
  
// Default export
export default CloasedComplaintsCard;