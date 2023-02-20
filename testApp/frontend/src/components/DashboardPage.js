import React, { useEffect, useState} from "react";
// import { Navigate } from "react-router-dom";
// import { Link, Redirect, Navigate} from 'react-router-dom';
import ClosedComplaintsCard from './ClosedComplaintsCard';
import OpenComplaintsCard from './OpenComplaintsCard';
import TopComplaintsCard from './TopComplaintCard';
// import ComplaintsListTable from './ComplaintsListTable';
import './css/dashboard.css'
// import axios from "axios";



const DashboardPage = () => {
  // const [useToken] = useState();
  // const [authenticated, setAuthenticated] = useState();
  const userDist = useState(localStorage.getItem("userDistrict"));
  // const userToken = useState(localStorage.getItem("userToken"));

  // const singleToken = userToken[0]
  // const [closedCases, setClosedCases] = useState([]);
  // const [openCases, setOpenCases] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("isAuthenticated");
    if (loggedInUser) {
      // setAuthenticated(loggedInUser);
    }
    // getAPIResponse('closedCases/', useToken ).then((data) => setClosedCases(data));
    // getAPIResponse('openCases/', useToken ).then((data) => setOpenCases(data));
  }, []);



  return (
      <div className="dashboardpage-container">
        <h1>New York City Council District {userDist} Complaints Dashboard</h1>
        <OpenComplaintsCard/>
        <ClosedComplaintsCard/>
        <TopComplaintsCard/>
        {/* <ComplaintsListTable/> */}
      </div>
  );
  
};

export default DashboardPage;
