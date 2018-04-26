import React from 'react';
import {Link} from 'react-router';

export default function SideBar(props) {
  return (
      <div className="aside">
        <div className="help-text">
            <p>{props.sideBarText}</p>
        </div>
            <div className="wiz">
              <img src="assets/image/dr-sense-bye-isolated.svg" alt="" className="wizard-img"/>
            </div>
      </div> 
  );
}

