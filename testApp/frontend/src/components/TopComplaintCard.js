import React from "react";
  
import './css/topcase.css'



const TopComplaintCard = () => {



  const type1 = '' || 'Aging';
  const type2 = '' || 'Consumer  Affairs';
  const type3 = '' || 'Transportation';

  return (
    <div className="topcase-container">
<div className="topcase-layout">

<span className="topcase-text09">
    <span>Top Cases</span>
    <br></br>
  </span>
  <span className="topcase-text">
    <span className="topcase-text01">1. {type1}</span>
    <br></br>
  </span>
  <span className="topcase-text03">
    <span className="topcase-text04">2. {type2}</span>
    <br></br>
  </span>
  <span className="topcase-text06">
    <span className="topcase-text07">3. {type3}</span>
    <br></br>
  </span>

</div>
</div>
  );
};
  
// Default export
export default TopComplaintCard;







