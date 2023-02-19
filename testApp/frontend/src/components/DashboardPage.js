import React, { useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
// import { Link, Redirect, Navigate} from 'react-router-dom';
import ClosedComplaintsCard from './ClosedComplaintsCard';
import OpenComplaintsCard from './OpenComplaintsCard';
import TopComplaintsCard from './TopComplaintCard';
import ComplaintsListTable from './ComplaintsListTable';

const DashboardPage = () => {

  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("isAuthenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to ="/login" />;
  } else {
    return (
      <div>
        <OpenComplaintsCard/>
        <ClosedComplaintsCard/>
        <TopComplaintsCard/>
        <ComplaintsListTable/>
      </div>
    );
  }

};

export default DashboardPage;


/* <div className={classes['container']}>
<header data-role="Header" className={classes['Header']}>
  <img
    alt="logo"
    src="https://play.teleporthq.io/static/svg/default-img.svg"
    className={classes['image']}
  />
  <button className={projectStyles['button']}>
    <span>
      <span>Logout</span>
      <br></br>
    </span>
  </button>
</header>
<div className={classes['DashboardContainer']}>
  <div className={classes['CardsContainer']}>
    <div className={classes['Stats']}>
      <div className={classes['Stat']}>
        <h1 className={classes['openCases']}>
          <span>50</span>
          <span>+</span>
        </h1>
        <span className={classes['text05']}>
          <span>Open Cases</span>
          <br></br>
        </span>
      </div>
      <div className={classes['Stat1']}>
        <h1 className={classes['closedCases']}>369</h1>
        <span className={classes['text08']}>Closed Cases</span>
      </div>
      <div className={classes['Stat2']}>
        <h1 className={classes['complaint1']}>Noise</h1>
        <h1 className={classes['complaint2']}>500</h1>
        <h1 className={classes['complaint3']}>
          <span>500</span>
          <span>+</span>
        </h1>
        <span className={classes['text11']}>Top Complaints</span>
      </div>
    </div>
  </div>
  <div className={classes['ListContainer']}></div>
</div>
</div> */