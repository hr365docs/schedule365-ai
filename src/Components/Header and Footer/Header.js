import * as React from "react";
import Logo from "../../Assests/Images/HR365.webp";
import DemoButtons from "../Utiilities/DemoButtons";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { MyContext } from "../../App";
// import { mouseflow} from "react-mouseflow";
function Header(props) {


//GTM 
  const script = document.createElement("script");
  script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'denied',
      'security_storage': 'granted',
      'wait_for_update': 500
    });
  `;
  document.head.appendChild(script);
 
  
  // React.useEffect(() => {
  //   mouseflow.initialize("d74e23c0-0490-4d54-925d-b4ea1ae7151a");
  //   }, []);
  const [ham, setHam] = React.useState(false);
  const AppName = React.useContext(MyContext);
  return (
    <div style={{
      position: "relative"
       
    }}>
      <div  className={`${props?.BlackFriday == "BlackFriday" ? "HR_MainHeaderSectionBlackfriday HR_panelHeader" : "HR_MainHeaderSection HR_panelHeader"}`}>
        <div className="HR_FlexCenterSpcBetween">
          <div className="HR_LogoSection">
            {/* <a href="https://www.apps365.com" target="_blank" rel="noreferrer">
              <img src={"https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai-coloured.png"} alt="Apps 365" />
              {""}
            </a> */}
              <img src={"https://ik.imagekit.io/apps365/Lp-pages/Schedule365-ai.webp"} alt={AppName} />

            <div className="DB_button">
            <DemoButtons OfferPage={props.HR365header} StickyButton={true} getStarted={true}/>
            </div>
            <div>
              <span className="MBHAMBURGER" onClick={() => setHam(!ham)}><RxHamburgerMenu /></span>
              {/* <span className="MBHAMBURGER" onClick={() => setHam(!ham)}> ≡</span> */}

            </div>
          </div>

          <div className="HR_FlexCenterSpcBetween" style={{ width: props?.isComparison ? "74%": "65%" }}>
            <div className="HR_navMenu" style={{paddingLeft:props?.HR365header == "ET365"?"6vw":"0"}}>
              <span>
                {props?.HR365header == "ET365" ? <>
                  <ul>
                   <li>
                  <a href="#Features" >Features</a>
                </li>
               
                <li>
                  <a href="#ClientsSpeakTestimonial">Testimonial</a>
                </li>
                 <li>
                  <a href="#Integration-ET" >Integration</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>

                </> :
                <>
                <ul className="headerpionts">
                   <li>
                  <a href="#features" >Features</a>
                </li>
                <li>
                  <a href="#client" >Clients</a>
                </li>
              {props.isComparison &&(
                <li>
                  <a href="#comparison">Comparison</a>
                </li>
              )}
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
              </ul>
                </>
                 }
               
              </span>
            </div>
      
            <div className="MB_button">
              <DemoButtons OfferPage={props.HR365header} StickyButton={false} getStarted={false}/>
            </div>
            

            <div className="MB_button">
              <DemoButtons OfferPage={props.HR365header} StickyButton={true} getStarted={false}/>
            </div>
          </div>
        </div>
      </div>



      {
        ham ? <div className="MBHB" style={{ position: "fixed", zIndex: "9", top: "0vw", paddingTop: '0.4vw 3vw', background: "var(--panelBgColor)", height: "100vh" }}>
          <div className="mbflex">
            <div className="HR_LogoSection">
              {AppName === "Apps365" ?
                <img src={"https://ik.imagekit.io/apps365/Lp-pages/Schedule365-ai.webp"} alt={AppName} />
                :
                <img src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/91d92cd8-0bec-4bcc-8a8a-b069094eb852_BmoafHbFDy.png"} alt={AppName} />
              }
              {/* <a href="https://www.apps365.com" target="_blank" rel="noreferrer">
                <img src={"https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai-coloured.png"} alt="Apps365" />
                {""}
              </a> */}
            </div>



            {
              ham ? <div onClick={() => setHam(!ham)} style={{ margin: '12px 0px' }}>
                <span className="cross"><RxCross1 /></span>
              </div> : <div onClick={() => setHam(!ham)}>
                <span className="cross">+</span>
              </div>
            }


          </div>
          <div>
            <span>
            <ul className={`${ham ? "mbmenu" : ""}`}><li>
              <a href="#features" onClick={() => setHam(false)}>Features</a>
            </li>
              <li>
                <a href="#client" onClick={() => setHam(false)}>Clients</a>
              </li>
                   {props.isComparison ?(
                <li>
                  <a href="#comparison" onClick={() => setHam(false)}>Comparison</a>
                </li>
              ):
              (
  <li>
                <a href="#integration" onClick={() => setHam(false)}>Integration</a>
              </li>
              )
              }
            
              <li>
                <a href="#pricing" onClick={() => setHam(false)}>Pricing</a>
              </li>

              <li>
                <a href="#faq" onClick={() => setHam(false)}>FAQs</a>
              </li>
            </ul>
            </span>
          </div>
        </div> : ""
      }



    </div>
  );
}
export default Header;
