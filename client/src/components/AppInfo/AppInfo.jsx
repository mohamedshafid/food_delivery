import React from 'react';
import "./AppInfo.css";
import appstore from "../../assets/app_store.png";
import playstore from "../../assets/play_store.png";

const AppInfo = () => {
  return (
    <div className="appinfo">
      
      <h1>For better experience,<br />download the Swiggy app now</h1>
      <div className="apps">
      <img src={playstore} alt="" />
        <img src={appstore} alt="" />
      </div>
    </div>
  )
}

export default AppInfo;
