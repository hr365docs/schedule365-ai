import React from 'react'
import ScrollToTop from './Utiilities/ScrolltoTop'
import Header from './Header and Footer/Header'
import Footer from './Header and Footer/Footer'
import './Utiilities/LogoSlider.css'
import G2Badge from './Utiilities/G2Badge'
import { Label, PrimaryButton, TextField } from '@fluentui/react'
import LogoSlider from './Utiilities/Slider'
import CyberSecurity from './Utiilities/CyberSecurity'
import DemoButtons from './Utiilities/DemoButtons'
import Availability from './Utiilities/Availability'
import OurClients from './Utiilities/OurClients'
import GetOfferPage from './Utiilities/GetOfferPage'
import { GetStartedOfferForm } from './Utiilities/GetStartedOfferForm'
import { MyContext } from '../App'

export const CelebrateOffer = (props) => {
    const SiteName = React.useContext(MyContext);
  const logos = [
    'https://ik.imagekit.io/zn4au2jftpm5/Heading%20(2560%20x%20800%20px)%20(2)_f7aGfGgPG.jpg?updatedAt=1730964001347',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Blog/Microsoft%20Certified%20Apps%20(1)_iLM9QMtfS.png?updatedAt=1729834055980',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Blog/Microsoft%20Certified%20Apps%20(4)_YtUuLjhQF.png?updatedAt=1729842192539',
    'https://ik.imagekit.io/zn4au2jftpm5/CubicLogics/GPTW02_jpg_cizx-yphX.jpg?updatedAt=1727095524791',
  ];

  const handleClose = () => {
    // setOpenGetStarted(false);
    // ResetData();
  };

  return (
    <>
      <ScrollToTop />
      <Header HR365header={"CubicAnniversary"} BlackFriday={props.page}/>

      {props.page == "BlackFriday" ?

        <>
          {/* Black friday */}
          <div>

          <GetOfferPage Type="Image" page="BlackFriday"/>
            {/* <div className={`${props.page == "BlackFriday" ? "OfferPageSliderblackfriday " : "OfferPageSlider"}`}>
              <img src="https://ik.imagekit.io/zn4au2jftpm5/Black_Friday_Offer_Banner_Image_FJE3LOpvKN.jpg?updatedAt=1731773107463" alt="" />
            </div> */}
            <h2 className='CelebrationHeading'>Black Friday Special: Up to 30% Off on Business Solutions That Boost Productivity!</h2>
            <h3 className='SubhaedingCelebration'>🎉 Save Big with Our Exclusive Black Friday Deal!🎉</h3>
            <p className='ExclusiveDescriptions'>This Black Friday, transform your business operations with up to 30% off on our entire range of HR and Business Applications. From enhancing HR processes to managing daily business tasks, Apps365 solutions are designed to simplify workflows and empower your team. </p>
            {/* <div className="HR_panel"> */}

            {/* <div className='BadgesectionOfferPage'>
                <h2 className='Badgeheading'>Trusted by 7100+ businesses from 152 countries</h2>

                <div className='Hr_flex badgedistance '>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_HighPerformer_HighPerformer_-Z4ie72DuI.png?updatedAt=1720006845409" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ITServiceManagement(ITSM)Tools_FastestImplementation_GoLiveTime_cFgAK5HFv7.png?updatedAt=1720006845303" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestRelationship_Total_2-h_fHeyGO.png?updatedAt=1720006845349" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestResults_Total_tS0NMFyBl.png?updatedAt=1720006845157" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/new1_XZKuIjyak.png?updatedAt=1725108344921" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestUsability_Total_1xCJYKQmzp.png?updatedAt=1720006845283" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ITServiceManagement(ITSM)Tools_BestEstimatedROI_Roi_5xNW-V53-s.png?updatedAt=1720006845188" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_MostImplementable_Total_neul3c0nTw.png?updatedAt=1720007370227" alt="" />
                    </div>
                </div>
                <div> 
                    <LogoSlider logos={logos} />
                </div>
            </div> */}

            {/* </div> */}
          </div>

        </>

        :

        <>
          {/* Cubic Anniversary   */}
          <div>
            <div className="OfferPageSlider">
            <GetOfferPage Type="Image" />
            </div>
            {/* <div className="HR_panel"> */}

            
            <h2 className='CelebrationHeading' id='HR365'>Celebrate Our Annual Day with a Special up to 40% Off! on Apps365 & HR365 Apps!
            </h2>
            <h3 className='SubhaedingCelebration'>🎉 Exclusive up to 40% Annual Day Offer! 🎉</h3>
            <p className='ExclusiveDescriptions'>For a limited time, enjoy up to 40% off on our full range of HR and Business Applications. From enhancing HR processes to managing everyday business tasks, our tools are crafted to make your life easier.</p>
            {/* <div className='BadgesectionOfferPage'>
                <h2 className='Badgeheading'>Trusted by 7100+ businesses from 152 countries</h2>

                <div className='Hr_flex badgedistance '>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_HighPerformer_HighPerformer_-Z4ie72DuI.png?updatedAt=1720006845409" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ITServiceManagement(ITSM)Tools_FastestImplementation_GoLiveTime_cFgAK5HFv7.png?updatedAt=1720006845303" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestRelationship_Total_2-h_fHeyGO.png?updatedAt=1720006845349" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestResults_Total_tS0NMFyBl.png?updatedAt=1720006845157" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/new1_XZKuIjyak.png?updatedAt=1725108344921" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestUsability_Total_1xCJYKQmzp.png?updatedAt=1720006845283" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ITServiceManagement(ITSM)Tools_BestEstimatedROI_Roi_5xNW-V53-s.png?updatedAt=1720006845188" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_MostImplementable_Total_neul3c0nTw.png?updatedAt=1720007370227" alt="" />
                    </div>
                </div>
                <div> 
                    <LogoSlider logos={logos} />
                </div>
            </div> */}

            {/* </div> */}
          </div>
        </>
      }






      <div className='HR365Apps'>
        <div className='BizApp365Container'>
          <h1 className='BizApps365Heading'>{SiteName}</h1>
          <div className="BizAppsSection">
            <div className='SectionStyles '>
              <div className='Section1'>
                <div className='Section1Part1'>
                  <div><img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/recruitment-management_wOYQFmkJo.png?updatedAt=1729668649072" alt="" />
                  </div>

                  <div className='ProductNameDes' >
                    <h3 class="ProductsName">Recruitment Management 365</h3>
                    <p className='ParagraphforBizApp'>Recruitment Management 365 provides tools supporting HR professionals throughout the hiring process.</p>
                  </div>
                </div>
                <div className='Section1Part2'>

                </div>
              </div>
            </div>
            <div className='SectionStyles '>
              <div className='Section1'>
                <div className='Section1Part1'>
                  <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/OBM365_TApB_-P4O.png?updatedAt=1699945890073" alt="" />
                  <div className='ProductNameDes'>
                    <h3 class="ProductsName">Employee Onboarding 365</h3>
                    <p className='ParagraphforBizApp'>{SiteName} streamlines onboarding, creating a smooth, stress-free experience for new joiners and HR.</p>
                  </div>
                </div>
                <div className='Section1Part2'>

                </div>
              </div>
            </div>
            <div className='SectionStyles '>
              <div className='Section1'>
                <div className='Section1Part1'>
                  <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/EDM365_kEepyT7UmX.png?updatedAt=1699945886231" alt="" />
                  <div className='ProductNameDes'>
                    <h3 class="ProductsName">Employee Directory 365</h3>
                    <p className='ParagraphforBizApp'>Employee Directory 365, a key part of SharePoint's HR management system for businesses.</p>
                  </div>
                </div>
                <div className='Section1Part2'>

                </div>
              </div>
            </div>
            <div className='SectionStyles '>
              <div className='Section1'>
                <div className='Section1Part1'>
                  <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/EPM365_i1g5rforZ2.png?updatedAt=1699945886227" alt="" />
                  <div className='ProductNameDes'>
                    <h3 class="ProductsName" >Performance Management 365</h3>
                    <p className='ParagraphforBizApp' >Empower your teams and boost productivity with Microsoft Performance Solutions.</p>
                  </div>
                  <div id='BizApps365'></div>
                </div>
                <div className='Section1Part2'>

                </div>
              </div>
            </div>
            <div className='SectionStyles '>
              <div className='Section1'>
                <div className='Section1Part1'>
                  <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/ET365_OwDdjXkb-o.png?updatedAt=1699945886235" alt="" />
                  <div className='ProductNameDes'>
                    <h3 class="ProductsName">Expense 365</h3>
                    <p className='ParagraphforBizApp'>Easily manage expenses with {SiteName}, saving time and enabling detailed analysis.</p>
                  </div>
                </div>
                <div className='Section1Part2'>

                </div>
              </div>
            </div>
            <div className='SectionStyles '>
              <div className='Section1'>
                <div className='Section1Part1'>
                  <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/TM365_ijn6OvBilB.png?updatedAt=1699945886417" alt="" />
                  <div className='ProductNameDes'>
                    <h3 class="ProductsName">Task 365</h3>
                    <p className='ParagraphforBizApp'>Office 365 time-off manager seamlessly integrates with SharePoint HR management for efficient operations.

                    </p>
                  </div>
                </div>
                <div className='Section1Part2'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Hr_flex HR_MT' >
        {/* <DemoButtons />
         */}
        <GetOfferPage page={props.page}/>
      </div>
      <div className='BizApp365Container' >
        <h1 className='BizApps365Heading'>BizApps 365</h1>
        <div className="BizAppsSection">
          <div className='SectionStyles '>
            <div className='Section1'>
              <div className='Section1Part1'>
                <div><img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/CLM365_v77dALssz8.png?updatedAt=1699945885682" alt="" />
                </div>

                <div className='ProductNameDes'>
                  <h3 class="ProductsName">CLM 365 - Contract Management </h3>
                  <p className='ParagraphforBizApp'>CLM 365 - Contract Management efficiently streamlines legal requests, approvals, and reviews.</p>
                </div>
              </div>
              <div className='Section1Part2'>

              </div>
            </div>
          </div>
          <div className='SectionStyles '>
            <div className='Section1'>
              <div className='Section1Part1'>
                <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/HD365_tM0o9NdD1e.png?updatedAt=1699945885688" alt="" />
                <div className='ProductNameDes'>
                  <h3 class="ProductsName">Helpdesk 365</h3>
                  <p className='ParagraphforBizApp'>The Office 365 Help Desk is a customizable, user-friendly hub in our SharePoint HR management.</p>
                </div>
              </div>
              <div className='Section1Part2'>

              </div>
            </div>
          </div>
          <div className='SectionStyles '>
            <div className='Section1'>
              <div className='Section1Part1'>
                <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/T365_jjxdES_cC.png?updatedAt=1699945890927" alt="" />
                <div className='ProductNameDes'>
                  <h3 class="ProductsName">Timesheet 365</h3>
                  <p className='ParagraphforBizApp'>A powerful, easy-to-use timesheet app with detailed project-specific daily logs and tracking.</p>
                </div>
              </div>
              <div className='Section1Part2'>

              </div>
            </div>
          </div>
          <div className='SectionStyles '>
            <div className='Section1'>
              <div className='Section1Part1'>
                <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/AM365LogoIcon_82UPoJhTI.svg?updatedAt=1686137453179" alt="" />
                <div className='ProductNameDes'>
                  <h3 class="ProductsName">Asset 365</h3>
                  <p className='ParagraphforBizApp'>The {SiteName} SharePoint Office 365 Asset Management app provides high configurability and easy customization.</p>
                </div>
              </div>
              <div className='Section1Part2'>

              </div>
            </div>
          </div>
          <div className='SectionStyles '>
            <div className='Section1'>
              <div className='Section1Part1'>
                <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/civic_shortColored%20(1)_eyKLS1cDu.png?updatedAt=1706079031529" alt="" />
                <div className='ProductNameDes'>
                  <h3 class="ProductsName">Civic 365</h3>
                  <p className='ParagraphforBizApp'>CIVIC 365 is a 311 CRM enabling residents to easily report non-emergency issues and feedback.</p>
                </div>
              </div>
              <div className='Section1Part2'>

              </div>
            </div>
          </div>
          <div className='SectionStyles '>
            <div className='Section1'>
              <div className='Section1Part1'>
                <img className='BizAppsImages' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Icons/Icons-1200px/TaskManagement365%20-%201200%20Trans_KRiUx4d7z.png?updatedAt=1699945857643" alt="" />
                <div className='ProductNameDes'>
                  <h3 class="ProductsName">Task 365</h3>
                  <p className='ParagraphforBizApp'>Task 365 is a simple, efficient task solution fully integrated with Microsoft 365, offering functionality.

                  </p>
                </div>
                <div id='ClientsSpeak'></div>
              </div>
              <div className='Section1Part2'>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Hr_flex HR_MT'>
        {/* <DemoButtons />
         */}
        <GetOfferPage  page={props.page} />
      </div>
      <div className='HR_whitesection' id='ClientsSpeak' >
        <h2 className='ClientsSpeakHeading ' >Clients Speak
        </h2>
        <div className='HR_MT.'>
          <OurClients />
        </div>
    
       
 

      </div>
     
      <div>

      <div id='WhyApps365' ></div>
        <h4 className='WhyChooseHeading'>Why Choose Apps365? </h4>
        <div className='Hr_flex'>
          {/* <DemoButtons />
         */}

        </div>


        <div className="availcard3" >
          <div className="cd1" style={{ padding: "2vw 2vw 0vw 2vw" }}>
            <div className="APPScolm">
              <div className="icon2certified">
                <div>
                  <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/integrationLP_XfmCiPRZk.png?updatedAt=1731654448867" alt="Microsoft" />
                </div>
              </div>
              <div className="txt2">
                <h3 className="Swift">Tailor-made solutions with seamless integration for Microsoft 365 and Outlook </h3>

              </div>
            </div>


            <div className="APPScolm">
              <div className="icon2certified">
                <div>
                  <img src="https://ik.imagekit.io/zn4au2jftpm5/MC_48NBPsAlgT.png?updatedAt=1731671362825" alt="Microsoft" />
                </div>
              </div>
              <div className="txt2">
                <h3 className="Swift">Highest level of security with Microsoft 365 certification </h3>

              </div>
            </div>




          </div>
          <div className="cd2" style={{ padding: "0vw 2vw 2vw 2vw" }}>
            <div className="APPScolm">
              <div className="icon2certified">
                <div>
                  <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/ABCD_xd29IpYGnq.png?updatedAt=1731654449655" alt="Microsoft" />
                </div>
              </div>
              <div className="txt2">
                <h3 className="Swift">AI-integrated and scalable tools that adapt as your business grows </h3>

              </div>
            </div>


            <div className="APPScolm">
              <div className="icon2certified">
                <div>
                  <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Collaboration_wdR-RA1Fv.png?updatedAt=1731654449684" alt="Microsoft" />
                </div>
              </div>
              <div className="txt2">
                <h3 className="Swift">Streamlined workflows to minimize manual tasks and improve efficiency </h3>

              </div>
            </div>



          </div>
        </div>
      </div>
      <div style={{
          marginTop: "2vw"  
        }}>
          <GetOfferPage  page={props.page}/>
        </div>

      <div className='cybersection' >
        <CyberSecurity />
      </div>
      <h4 className='GetStartedWidth14'>Get started with 14 days risk free trial. <br />No credit card details required
      </h4>
      <div className='Hr_flex HR_MT'>
        {/* <DemoButtons />
         */}

        <GetOfferPage  page={props.page}/>
      </div>
    
      <Availability />
      <div id="pricing" className="IdChanges"></div>
      <div className='FormStyles'>
        <div className='FormLeftSideContent'>
          <h2 className='RequestaFreeTrial'>To Know {SiteName} & BizApps 365 Pricing:</h2>
          <h3 className='EnquireNowText'>Enquire Now!</h3>
          <div>
            <p className='RequestTrailPara'>Discover the full potential of our products!

            </p>
            <p className='ExperienceunmatchedHeading'>Experience unmatched performance and efficiency</p>
          </div>
        </div>
        <div className='FormMainClass'>
          <div className='FormBox'>
            <div className="getStartedDialogbox boxBgcolor">
              <Label className="CrossIcon positionSetStyleOnDissmisIcon" style={{ color: "#fff" }}>
                {/* <span onClick={handleClose}>✕</span> */}
              </Label>
              <div className="imageFieldsstyles">
                <div className="StartExperienceFieldsStyles">
                  <div
                  >
                    <Label className="FormBoxHeading">Contact Us</Label>

                  </div>
                  <GetStartedOfferForm OfferPage={"CubicAnniversary"} footer={true} />

                  {/* {isErroMessage
                    ? SuccessMessage("error")
                    : BusinessEmailMessage
                      ? SuccessMessage("businessemail")
                      : FormatEmailMessage
                        ? SuccessMessage("formatemail")
                        : null} */}
                  {/* <div className="SubmitbtngetStarted">
                    <PrimaryButton id="lpgetstartedsubmitbutton"
                      className="subButton" */}
                  {/* //   onClick={() => submitRequest("getstarted")}
                    >
                      Submit */}
                  {/* {ButtonSaveText1}
                      {loading1 && (
                        <div className="elementToFadeInAndOut">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )} */}


                  {/* </PrimaryButton> */}
                </div>
                {/* <p className="PrivacyPolicyColorstyles ">
                    By proceeding, you accept Cubic Logics’s <a className="LinkTextUI" href="https://www.cubiclogics.com/end-user-license-agreement-eula/" >terms and conditions</a> {" and "}
                    <a className="LinkTextUI" href="https://www.cubiclogics.com/privacy-policy/">privacy policy</a>
                  </p> */}
              </div>
              {/* <div className="TextColorImage">
                  <p className="OutstandingText">
                    "Exceptional tool that delivers seamless integration, powerful features, and unmatched reliability."
                  </p>
                </div> */}
            </div>
            {/* {isSuccessMessage ? */}
            <div style={{ padding: "0vw 1vw" }} >
              {/* {SuccessMessage("success")} */}
            </div>
            {/* : null} */}
          </div>
        </div>
      </div>

      <Footer BlackFriday={props.page}/>
    </>
  );
}
