import React from 'react'
import SpecailButtons from "./SpecialButtons";
import DemoButtons from './../../Components/Utiilities/DemoButtons';

export default function Azuer({userCount}) {
  return (
    <div className="Azuersection">
          <div className='AzureLogoText'>
            <a href='https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1' target='_blank'>
              <img className='AzureImage' src='https://ik.imagekit.io/zn4au2jftpm5/Azure_dQeGdjXNs_cWe2-VVEx.jpeg?updatedAt=1736158710879' alt='Azure' />
            </a>
            <p className='AzureText'>
              Using Azure? now you can <a href='https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1' target='_blank'>
                buy
              </a>
              on Azure Marketplace with Azure benefits with your enterprise agreement
            </p>
          </div>
          {/* <FormComponent /> */}
          <SpecailButtons userCount={userCount} />
          <h3 className='AzuerHR_heading1 HR_MT'>Get started with 14 days risk free trial. <br />No credit card details required
          </h3>
          <div className='Hr_flexpm HR_MT'>
            <DemoButtons  demobtnText="Book a CLM 365 Demo" trailbtnText="Start your 14-Day Free Trial" />
            {/* <a href={PDF} download="Performance Management 365.pdf">
            <button className="downloadnow">Download Now</button>
            </a> */}
          </div>
          </div>
  )
}
