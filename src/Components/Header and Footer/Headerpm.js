import * as React from "react";
import Logo from "../../Assests/Images/HR365.webp";
import DemoButtons from "../Utiilities/Buttonts";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { MyContext } from "../../App";
// import { mouseflow} from "react-mouseflow";
function Header(props) {
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
            {AppName === "HR365" ?
              <img src={Logo} alt={AppName} />
              : 
              <img src={"https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai-coloured.png"} alt={AppName} />
            }
            <div className="DB_button">
            <DemoButtons OfferPage={props.HR365header} StickyButton={true} getStarted={true} />
            </div>
            <div>
              <span className="MBHAMBURGER" onClick={() => setHam(!ham)}><RxHamburgerMenu /></span>
              {/* <span className="MBHAMBURGER" onClick={() => setHam(!ham)}> ≡</span> */}

            </div>
          </div>

          <div className="HR_FlexCenterSpcBetween" style={{ width: props?.HR365header == "CubicAnniversary" ? "72%": "65%" }}>
            <div className="HR_navMenu">
              <span>
                {props?.HR365header == "CubicAnniversary" ? <>
                  <ul>
                   <li>
                  <a href="#HR365" >HR365</a>
                </li>
                <li>
                  <a href="#BizApps365" >BizApps 365</a>
                </li>
                <li>
                  <a href="#ClientsSpeak">Clients Speak</a>
                </li>
                <li>
                  <a href="#WhyApps365">Why Apps365</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>

                </> :
                <>
                <ul className="headerpiontspm">
                   <li>
                  <a href="#features" >Features</a>
                </li>
                <li>
                  <a href="#client" >Clients</a>
                </li>
                {/* <li>
                  <a href="#integration">Integration</a>
                </li> */}
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
                <img src={"https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai-coloured.png"} alt={AppName} />
                :
                <img src={Logo} alt={AppName} />
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
              <li>
                <a href="#integration" onClick={() => setHam(false)}>Integration</a>
              </li>
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
