import React from "react";
  
const ComplaintsListTable = () => {
  return (
    <div className="list-container">
    <ul className="cases-list">
      <li className="list-titles">
        <span>Open Date</span>
        <span>Open Date</span>
        <span>Close Date</span>
        <span>Type</span>
        <span>Description</span>
        <span>Zip</span>
        <span>Borough</span>
        <span>City</span>
        <span>Board</span>
        <span>Board</span>
      </li>
      <li className="list-item">
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
        <span>Text</span>
      </li>
    </ul>
  </div>
  );
};
  
// Default export
export default ComplaintsListTable;

//Account = DISTRICT / Complaint location
//opendate 
//closedate
//complaint type
//description
//zip
// borough
//city
//council-dise = MADE BY from district
//communityBoard 