import React, {useState, useEffect} from "react";
import axios from 'axios';
import './css/opencase.css'

const OpenComplaintsCard = () => {
  const numberOfCases = 24;
  const userToken = useState(localStorage.getItem("userToken"));
  const token = userToken[0]
  useEffect(() => {
    const config = {
      method: 'get',
      url: '',
      headers: {
        "Authorization" : `Token ${token}`
      }
    };
    axios(config).then(response => {
      console.log("caseOpen: RESPONSE");
      console.log(response);
    }).catch(error => {
      console.log('caseOpen: ERROR');
      console.error(error);
    })
  });

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