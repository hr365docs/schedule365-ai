import * as React from "react";
import DemoButtons from "../Utiilities/DemoButtons";

function SectionFirstCommon(props) {
  return (
    <>
      <div className="HR_panel">
        <div className="HR_FlexCenterSpcBetween HR_ParentSection1">
          <div className="HR_Section1LeftSide">
            <h1 className="HR_primaryclr">{props.MainHeading || "Smarter Support, Happier Teams – Faster Ticketing with Helpdesk 365"}</h1>
            <p className="HR_textclr">{props.MainDescription || "Manage tickets easily with our Microsoft 365 helpdesk that works perfectly with Microsoft 365. Help your team give faster and better support without any hassle."}</p>
            <DemoButtons/>
          </div>
          <div className="HR_Section1RightSide">
            <img 
              alt={props.MainImageAlt || "MainImage"}
              src={props.MainImageSrc || "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/Helpdesk_OjlohM6cD.png?updatedAt=1718610768162"}
               
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFirstCommon;
