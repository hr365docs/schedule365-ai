import * as React from 'react';
// import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { FaYoutube,FaInstagram, FaTwitter, } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import OfferPopup from '../Utiilities/Offerpopup';


function Footer({ BlackFriday,ET365 }) {
    let curretYear = new Date().getFullYear();
    const AppName = React.useContext(MyContext);

    return (
        <>
            {/* {BlackFriday != "BlackFriday" ?
                <OfferPopup Page={"BlackFriday"} />
                : ""} */}
            <div className='footermain'>
                <div className='HRfooter'>
                  <a href="/product-addons">  <span> © {curretYear} – &nbsp;</span></a>
                    {AppName === "HR365" ?
                        <>
                            {/* <a href="https://www.hr365.us" target='_blank' rel="noreferrer">HR365.</a> */}
                            <a href="https://www.hr365.us/wp-content/uploads/2023/12/HR365-SLA.pdf" target='_blank' rel="noreferrer">SLA</a>
                        </> :
                        <>
                            <span style={{paddingRight:"0.3vw"}}>Apps365 </span>
                            <a href="https://www.apps365.com/wp-content/uploads/Apps365-SLA.pdf" target='_blank' rel="noreferrer">SLA</a>
                        </>
                    }
                    <Link to="/terms-and-conditions">T&C</Link>
                    <Link to="/end-user-license-agreement-eula">EULA</Link>
                    <Link to="/privacy-policy">Privacy</Link>
                    <span style={{paddingRight:"0.3vw"}}>Cubic Logics </span>
                     {/* <a href="https://www.cubiclogics.com/" target='_blank' rel="noreferrer">Cubic Logics</a> */}

                </div>

                  <div className='HRfooter mbHRfooter'>
                    {/* <a href="https://www.instagram.com/hr365.us/" target='_blank'  rel="noreferrer" className='svgstyle'><AiOutlineInstagram /></a> */}
                    {/* <a href="https://twitter.com/HR365Apps" target='_blank'  rel="noreferrer" className='svgstyle'><AiOutlineTwitter /></a> */}
                    <a href="https://www.linkedin.com/company/cubiclogics/" rel="noreferrer" target='_blank' className='svgstyle' aria-label="Cubic Logics on LinkedIn" alt='linkdin'><IoLogoLinkedin /></a>
                    <a href="https://www.youtube.com/@hr365" rel="noreferrer" target='_blank' className='svgstyle' aria-label="HR365 on YouTube" alt='youtube'><FaYoutube /></a>
                    <a href="https://www.facebook.com/cubiclogics/" target='_blank' rel="noreferrer" className='svgstyle' aria-label="Cubic Logics on Facebook" alt='facebook'><IoLogoFacebook /></a>
                    <a href="https://www.instagram.com/cubic.logics/" target='_blank' rel="noreferrer" className='svgstyle' aria-label="Cubic Logics on Instagram" alt='Instagram'><FaInstagram /></a>
                    <a href="https://x.com/cubiclogics" target='_blank' rel="noreferrer" className='svgstyle' aria-label="Cubic Logics on Twitter" alt='Twitter'><FaTwitter /></a>
 
                </div>
            </div>
        </>
    )

}
export default Footer;
