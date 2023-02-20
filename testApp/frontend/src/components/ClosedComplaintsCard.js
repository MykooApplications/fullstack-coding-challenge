import React, { useState, useEffect} from "react";
import './css/closecase.css'
import axios from 'axios';


export const API_URL = 'http://127.0.0.1:8000/api/complaints/closedCases/';
export const getAPIResponse = async(url, token) => {
  const { data } = await axios.get(`${API_URL}`, {headers: {Authorization: `Token ${token}/`}});
  return data;
}

const CloasedComplaintsCard = () => {
  // const [closedCases, setClosedCases] = useState([]);
  // const userDist = useState(localStorage.getItem("userDistrict"));
  const userToken = useState(localStorage.getItem("userToken"));
  const tkn = userToken[0];
  console.log(`user token ${tkn}`);

  const numberOfCases = 22;
  // fetchData() {
  //   fetch(API_URL)
  //   .then(response => response.json(), 
  //     console.log(response.data)
  //   );
  // }

  useEffect(() => {

    // var headers = new Headers();
    // headers.append("Authorization", "Bearer 395d203d29876ab4485add86c446736273642955");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: headers,
    // };

    console.log("CLOSE CASE: START FETCH");
    // fetch("http://127.0.0.1:8000/api/complaints/closedCases/", requestOptions)
    // .then(response => {
    //   console.log("ClosedCase: Resoponse")
    //   console.log(response.text());
    // })
    // .then(result => {
    //   console.log('CloseCASE: GOT RESULT');
    //   console.log(result);
    // })
    // .catch(error => {
    //   console.log("CLOSEDCASE: GOT AN ERROR");
    //   console.error('error', error);
    // });
   // axios.defaults.headers.common = {'Authorization': `Bearer ${tkn}`}

    const configa = {
      method: 'get',
    maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/complaints/closeCases/',
      headers: { 
        'Authorization': 'Bearer 395d203d29876ab4485add86c446736273642955'
      }
    };
    axios(configa)
    .then(response => {
      console.log("CASECLOSE RESPONSE");
      console.log(response.text)
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