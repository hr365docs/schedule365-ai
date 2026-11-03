import * as React from "react";
import LogoSlider from "./../Utiilities/Slider"
import { MyContext } from "../../App";
const logos = [
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png",
];
function Trustedbylogo() {
 const AppName = React.useContext(MyContext);
    return (
        <>
            <div className="Badgesection LMS365_TrustedbyStyles">
                <h2 className="Badgeheading" style={{ paddingTop: "0px" }}>
                    Trusted by 12,100+ deployments from 172 countries
                </h2>
                <div className="BadgeShoworHideDesktop">
                    <div className="Hr_flex badgedistance ">
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png"
                                alt=" logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth" id="imgrightborder">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg"
                                alt="logo"
                                className="trustimg"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg"
                                alt="logo"
                                className="trustimg"
                            />
                        </div>
                        <div className="imgwidth" id="imgrightborder">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg"
                                alt="logo"
                                className="trustimg"
                            />
                        </div>
                        {/* <div className='imgwidth' id='imgrightborder'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/High%20Performer%201_L23PqEV-m.svg" alt="logo" className='trustimg' />
                        </div> */}
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png"
                                alt="logo"
                                className="trustimgazure"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src={
                                    AppName === "Apps365"
                                        ? "https://ik.imagekit.io/apps365/Badges/Great-Place-To-Work.png?updatedAt=1759827837133"
                                        : "https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/Great-Place-To-Work_F8YXClgZl.png?updatedAt=1759830185421"
                                }
                                alt="Great Place To Work Badge"
                                className="trustimgLast"
                            />
                        </div>
                    </div>
                    <div>
                        <LogoSlider LMS365="LMS365" logos={logos} />
                    </div>
                </div>
                <div className="BadgeShoworHideMobile">
                    <div className="Hr_flex badgedistance ">
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png"
                                alt=" logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="Hr_flex badgedistance ">
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg"
                                alt="logo"
                                className="trustimg"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg"
                                alt="logo"
                                className="trustimg"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg"
                                alt="logo"
                                className="trustimg"
                            />
                        </div>
                        {/* <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/High%20Performer%201_L23PqEV-m.svg" alt="logo" className='trustimg' />
                        </div> */}
                    </div>
                    <div className="Hr_flex badgedistance ">
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png"
                                alt="logo"
                                className="trustimgazure"
                            />
                        </div>
                        <div className="imgwidth">
                            <img
                                src="https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png"
                                alt="logo"
                                className="trustimgLast"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Trustedbylogo;
