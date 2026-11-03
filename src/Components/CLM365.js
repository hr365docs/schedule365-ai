import * as React from "react";
import DemoButtons from "./Utiilities/DemoButtons";
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import Plans from "./Utiilities/Plans";
import Accordion from "./Utiilities/AccordionItem";
import SpecailButtons from "./Utiilities/SpecialButtons";
import Header from "./Header and Footer/Header";
import Footer from "./Header and Footer/Footer";
import ScrollToTop from "./Utiilities/ScrolltoTop";
import G2Badge from "./Utiilities/G2Badge";
import TabsWithImage from "./Utiilities/TabsWithImage";
import Availability from "./Utiilities/Availability";
import OurClients from "./Utiilities/OurClients";
import Integration from "./Utiilities/Integration";
import { MyContext } from "../App";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import GetOfferPage from "./Utiilities/GetOfferPage";
import CustomPlans from "./Utiilities/CustomPlans";
import Azuer from "./Utiilities/Azuer";
import OverviewCommon from "./GlobalMultiple/OverviewCommon";
import CyberSecurity from "./Utiilities/CyberSecurity";
import LogoSlider from "./Utiilities/Slider";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Dropdown, PrimaryButton, TextField } from "@fluentui/react";
import OverviewCLM365 from "./GlobalMultiple/OverviewCLM365";
import Trustedbylogo from "./GlobalMultiple/Trustedbylogo";
// import { mouseflow} from "react-mouseflow";
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
function CLM365() {
    const [activeTab, setActiveTab] = useState(0);
    const featureData = [
        {
            tab: "Smart Approvals",
            title: "Faster Approvals Without Endless Follow-Ups",
            description:
                "Automatically route contracts to the right stakeholders, streamline approvals, and keep every agreement moving without manual follow-ups.",

            icon: "https://ik.imagekit.io/apps365/Lp-pages/Smart-Approvals.webp",
        },

        {
            tab: "AI Contract Intelligence",
            title: "AI & Copilot Contract Review",
            description:
                "Use AI-powered prompts to extract clauses, analyze agreements, summarize contracts, and retrieve key information instantly.",

            icon: "https://ik.imagekit.io/apps365/Lp-pages/AI%20&%20Copilot.webp",
        },

        {
            tab: "Microsoft 365 Workspace",
            title: "Connected Across Microsoft 365",
            description:
                "Work seamlessly within Microsoft Teams, SharePoint, and Outlook without switching between disconnected systems.",

            icon: "https://ik.imagekit.io/apps365/Lp-pages/outlook-image.webp",
        },

        {
            tab: "Secure Contract Hub",
            title: "Secure Contract Storage & Instant Search",
            description:
                "Store contracts securely and find agreements instantly using keywords, clauses, or document names from one searchable repository.",

            icon: "https://ik.imagekit.io/apps365/Lp-pages/Secure%20Contract%20Storage.webp",
        },
    ];
    const featureCards = [
        {
            img: "https://ik.imagekit.io/apps365/Lp-pages/Contract-Compliance-and-Audit-Trails.svg",
            title: "Contract Compliance and Audit Trails",
            desc: "Maintain complete visibility with secure audit logs, version history, approval tracking, and role-based access controls.",
        },
        {
            img: "https://ik.imagekit.io/apps365/Lp-pages/Smarter-Contract-Negotiations.svg",
            title: "Smarter Contract Negotiations",
            desc: "Collaborate securely, review clauses, propose changes, and manage negotiations faster from one centralized workspace.",
        },
        {
            img: "https://ik.imagekit.io/apps365/Lp-pages/Contract%20Redlining-in%20Microsoft-Word.svg",
            title: "Contract Redlining in Microsoft Word",
            desc: "Your legal team can review, edit, and negotiate contracts directly in Microsoft Word without disrupting existing workflows.",
        },
        {
            img: "https://ik.imagekit.io/apps365/Lp-pages/Sign-Contracts-Faster.svg",
            title: "Sign Contracts Faster",
            desc: "Send agreements for secure electronic signatures and keep approvals and deals moving forward without delays.",
        },
        {
            img: "https://ik.imagekit.io/apps365/Lp-pages/Smart-Contract-Analytics.svg",
            title: "Smart Contract Analytics",
            desc: "Monitor approvals, renewals, contract status, and workflow bottlenecks with real-time dashboards and reporting insights.",
        },
        {
            img: "https://ik.imagekit.io/apps365/Lp-pages/Built-for-Growing%20Businesses.svg",
            title: "Built for Growing Businesses",
            desc: "Whether managing dozens or thousands of contracts, CLM 365 helps teams scale contract operations without added complexity.",
        },
    ];
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
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState("");
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const getEmbedUrl = (url) => {
        if (url.includes("youtube.com/watch?v=")) {
            return url.replace("watch?v=", "embed/");
        } else if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes("vimeo.com/")) {
            const videoId = url.split("vimeo.com/")[1];
            return `https://player.vimeo.com/video/${videoId}`;
        } else {
            return url; // fallback for direct video links
        }
    };
    const handlePlayClick = () => {
        setIsVideoPlaying(true); // When play icon is clicked, play the video
    };
    const handleCloseVideo = () => {
        setIsVideoPlaying(false); // Close the video
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // React.useEffect(() => {
    //   document.title = "new title"
    // }, []);
    // React.useEffect(() => {
    //   mouseflow.initialize("d74e23c0-0490-4d54-925d-b4ea1ae7151a");
    //   }, []);
    React.useEffect(() => {
        document.title = "AI-Powered SharePoint Helpdesk 365 – Ticketing System";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "SharePoint Helpdesk 365 leverages AI to simplify ticketing, accelerate response times, and elevate customer support quality."
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "SharePoint Helpdesk 365 leverages AI to simplify ticketing, accelerate response times, and elevate customer support quality.";
            document.head.appendChild(newMeta);
        }
    }, []);
    // const AppName = React.useContext(MyContext);

    // const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    // const [selectedImageUrl, setSelectedImageUrl] = React.useState("");

    // const openLightbox = (imageUrl) => {
    //   setSelectedImageUrl(imageUrl);
    //   setLightboxOpen(true);
    // };

    // const closeLightbox = () => {
    //   setLightboxOpen(false);
    // };


    const accordionItems = [
        {
            title: "What is a CLM system, and how does it benefit my organization?",
            content: (
                <>
                    A CLM 365 system is a software solution that helps organizations manage contracts more efficiently. It centralizes contract storage, automates workflows, and provides tools for tracking milestones, compliance, and renewals. By using a CLM 365 system, organizations can reduce risks, improve compliance, and streamline contract management processes.
                </>
            )
        },
        {
            title: "How does the CLM 365 app help manage contracts on the go?",
            content: `The CLM 365 app allows users to access, review, and manage contracts directly from their mobile devices. This flexibility enables key stakeholders to approve, amend, and monitor contracts anytime and anywhere, helping accelerate the contract lifecycle and improve collaboration.`
        },
        {
            title: "What are the advantages of using SharePoint for CLM 365 software?",
            content: `SharePoint CLM 365 software integrates seamlessly with Microsoft SharePoint and leverages its document management capabilities. This integration allows organizations to use SharePoint features such as version control, document sharing, and collaboration tools, making contract management more efficient and secure.`
        },
        {
            title: "How does Microsoft CLM 365 software integrate with other Microsoft products?",
            content: `Microsoft CLM 365 software is designed to integrate smoothly with Microsoft products such as Office 365, Power BI, Dynamics 365, and Azure. This integration creates a connected platform where contracts can be managed alongside other business processes, improving productivity and maintaining data consistency across systems.`
        },
        {
            title: "What features should I look for in CLM 365 software?",
            content: `When choosing CLM 365 software, look for features such as automated workflows, customizable templates, compliance tracking, audit trails, and robust reporting capabilities. These features help streamline contract creation, review, and management while improving compliance and reducing operational risks.`
        },

        {
            title: "Which currency are the prices listed in?",
            content: `All prices are listed in USD.`,
        },
    ];
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>AI-Powered SharePoint Helpdesk 365 – Ticketing System</title>
                    <meta
                        name="description"
                        content="SharePoint Helpdesk 365 leverages AI to simplify ticketing, accelerate response times, and elevate customer support quality."
                    />
                </Helmet>
                <ScrollToTop />
                <div className={`HR_MainHeaderSection HR_panelHeader`} style={{ background: "#000" }}>
                    <div className="HR_FlexCenterSpcBetween ETHR_FlexCenterSpcBetween">
                        <div className="HR_LogoSection">
                            <img
                                src={"https://ik.imagekit.io/zn4au2jftpm5/Apps365/Logos/apps365white_yKjtDjv_y.png"}
                                alt="Apps 365"
                            />
                            {""}


                            <div className="DB_button">
                                <DemoButtons StickyButton={true} getStarted={true} openDialog={true} Dialogheading={"See how CLM 365 helps teams centralize contracts, reduce manual follow-ups, and keep every stage of the contract lifecycle organized"} DialogDescription={"Enter your details to schedule a quick walkthrough"} />
                            </div>
                            <div>
                                <span className="MBHAMBURGER" onClick={() => setHam(!ham)}>
                                    <RxHamburgerMenu />
                                </span>
                                {/* <span className="MBHAMBURGER" onClick={() => setHam(!ham)}> ≡</span> */}
                            </div>
                        </div>

                        <div className="HR_FlexCenterSpcBetween">
                            <div
                                className="HR_navMenu ETHR_navMenu LMSNavmenu "
                                style={{ paddingLeft: "0" }}
                            >
                                <span>
                                    <ul>

                                        <img
                                            className="navheaderLogoED"
                                            src={"https://ik.imagekit.io/cubiclogics/App%20Logos/White-logos/CLM365-White.png"}
                                            alt="Apps 365"
                                        />
                                        {""}
                                        <li className="logoheadingED" style={{ cursor: "default" }}>
                                            CLM 365
                                        </li>
                                        <li>
                                            <a href="#Features">Features</a>
                                        </li>

                                        <li>
                                            <a href="#ClientsSpeakTestimonial">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="#Integration-CLM">Integration</a>
                                        </li>
                                        <li>
                                            <a href="#pricing-section">Pricing</a>
                                        </li>
                                    </ul>
                                </span>
                            </div>

                            <div className="MB_button">
                                <DemoButtons StickyButton={false} getStarted={false} />
                            </div>

                            <div className="MB_button">
                                <DemoButtons StickyButton={true} getStarted={false} />
                            </div>
                        </div>
                    </div>
                </div>

                {ham ? (
                    <div
                        className="MBHB"
                        style={{
                            position: "fixed",
                            zIndex: "9",
                            top: "0vw",
                            paddingTop: "0.4vw 3vw",
                            background: "var(--panelBgColor)",
                            height: "100vh",
                        }}
                    >
                        <div className="mbflex">
                            <div className="HR_LogoSection">
                                <img
                                    src={
                                        "https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai-coloured.png"
                                    }
                                    alt={AppName}
                                />
                                {/* <a href="https://www.apps365.com" target="_blank" rel="noreferrer">
                <img src={"https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai-coloured.png"} alt="Apps365" />
                {""}
              </a> */}
                            </div>

                            {ham ? (
                                <div
                                    onClick={() => setHam(!ham)}
                                    style={{ margin: "12px 0px" }}
                                >
                                    <span className="cross">
                                        <RxCross1 />
                                    </span>
                                </div>
                            ) : (
                                <div onClick={() => setHam(!ham)}>
                                    <span className="cross">+</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <span>
                                <ul className={`${ham ? "mbmenu" : ""}`}>
                                    <li>
                                        <div className="ET-logoIcons ET-logoIconsOnMobileView ">
                                            <img
                                                alt="MainImage"
                                                src="https://ik.imagekit.io/cubiclogics/App%20Logos/CLM-365.webp"
                                            ></img>
                                            <h3 className="HR_primaryclr">CLM 365</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#Features" onClick={() => setHam(false)}>
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#ClientsSpeakTestimonial"
                                            onClick={() => setHam(false)}
                                        >
                                            Clients
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#Integration-ET" onClick={() => setHam(false)}>
                                            Integration
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pricing" onClick={() => setHam(false)}>
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {/* <Header HR365header="ET365" /> */}

                <div
                    style={{
                        backgroundColor: "unset",
                        background:
                            "linear-gradient(110deg, #daeaf6, #e8def8, #fdf0f0, #e8def8, #daeaf6)",
                    }}
                >
                    <div
                        className="HR_panel"
                        style={{
                            padding: "3vw 5vw 1vw 3vw",
                            background: "linear-gradient(45deg, #daeaf6, #e8def8, #fdf0f0, #e8def8, #daeaf6)",
                        }}
                    >
                        <div className="HR_FlexCenterSpcBetween HR_ParentSection1 ET365HomepageParentsection">
                            <div className="HR_Section1LeftSide LMS365-HR_Section1LeftSide">
                                <h1
                                    className="HR_primaryclr"
                                    style={{
                                        fontSize: "3vw !important",
                                        fontWeight: "800 !important",
                                        color: "#333 !important",
                                    }}
                                >
                                    Stop Managing Contracts Across Emails, Folders, and Disconnected Systems<br />
                                    <span className="subheadingHD365"> Review, Approve, and Manage Contracts Faster With AI-Assisted Workflows</span>

                                </h1>
                                <span className="ET365-HerosectionSubheading"></span>
                                <p
                                    className="HR_textclr LMSHR_textclr" style={{ marginTop: "0.4vw" }}

                                >
                                    <p style={{ marginBottom: "0.3vw" }}>
                                        CLM 365 helps legal and business teams automate approvals, summarize contracts with AI, extract key clauses, and manage the entire contract lifecycle within Microsoft 365.
                                    </p>
                                    <p style={{ marginBottom: "0.3vw" }}>
                                        Reduce manual work, speed up decision-making, and centralize every agreement, approval, and renewal in one platform.
                                    </p>



                                </p>

                                <DemoButtons
                                    LMS365="LMS365"
                                    demobtnText="See CLM 365 Live in Action"
                                />
                            </div>
                            <div className="HR_Section1RightSide" style={{ width: "60%" }}>
                                <img
                                    className="HeroSectionImageStyles HDherobanner"
                                    style={{ width: "90%" }}
                                    alt="Helpdesk"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/CLM-hero-banner-new%20image.webp"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Trustedbylogo />
                        <div style={{ paddingTop: "1vw" }}></div>
                        <OverviewCLM365
                            MainHeading=""
                            MainDescription=".."
                            MainImageAlt=".."
                        />

                        <div className="featureUIWrapper">
                            <h2
                                style={{ margin: "0px", paddingBottom: "0vw", lineHeight:"1.3", color: "#333" }}
                                className="HR_heading  ETHR_heading LMS_FeatureHeading"
                            >
                                AI-Powered Features Built for Modern Contract Management — Everything Your Teams Need to Manage Contracts in One Place
                            </h2>
                            <p>Explore AI-powered features designed to reduce delays, simplify workflows, and help teams manage contracts with better visibility and control throughout the contract lifecycle within Microsoft 365. </p>
                            <p>CLM 365 simplifies contract operations to help teams work more efficiently.</p>
                            {/* Tabs */}
                            <div className="featureUITabsCLM">
                                {featureData.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`featureUITabBtn ${activeTab === index
                                            ? "featureUIActiveTab"
                                            : ""
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {item.tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            {featureData.map((item, index) => (
                                activeTab === index && (
                                    <div className="featureUIContentSectionCLM" key={index}>

                                        {/* Left Image */}
                                        <div className="featureUIImageWrapperCLM">
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="featureUIImageCLM"
                                            />
                                        </div>

                                        {/* Right Content */}
                                        <div className="featureUITextContentCLM">
                                            <h2 className="featureUITitleCLM">
                                                {item.title}
                                            </h2>

                                            <p className="featureUIDescriptionCLM">
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>
                                )
                            ))}
                            <div style={{ display: "flex", justifyContent: "center", padding: "2vw 0vw 0vw 0vw" }}>
                                <DemoButtons
                                    LMS365="LMS365"
                                    demobtnText="Explore CLM 365"
                                />
                            </div>
                        </div>


                        <div className="et-feature-container LMS365FeatureCards" style={{ paddingTop: "2vw" }}>
                            {featureCards.map((item, index) => (
                                <div className="et-feature-card" key={index}>
                                    <img
                                        decoding="async"
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                    />

                                    <h3 className="et-feature-title">
                                        {item.title}
                                    </h3>

                                    <p className="et-feature-desc">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                            <span id="Integration-CLM" />
                        </div>
                        <div class="et-integration-section LMS_integration-section" >
                            <div style={{ width: "100%" }}>
                                <h2 class="et-integration-title lMS_integration-title" >
                                    Powerful Microsoft 365 Integrations, <br /> Zero Workflow Disruptions
                                </h2>
                                <p class="et-integration-subtitle lMS_integration-subtitle" >
                                    CLM 365 works seamlessly with Microsoft Teams, SharePoint, Outlook and Power BI to centralize contract workflows, automate approvals, and improve collaboration across the entire contract lifecycle.
                                </p>
                                <div style={{ paddingTop: "1vw" }}>
                                    <DemoButtons
                                        LMS365="LMS365"
                                        demobtnText="Explore CLM 365"
                                    />
                                </div>
                                <span id="pricing" />
                            </div>
                            <div style={{ width: "61%", margin: "0", padding: "0vw", }}>
                                <img
                                    src="https://ik.imagekit.io/cubiclogics/giff%20file/CLM/CLM.gif"
                                    alt="Employee Directory"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />


                            </div>
                        </div>
                        <div
                            style={{
                                padding: "3vw",
                                background: "none",
                                paddingBottom: "2vw",
                            }}
                            className="overviewsection ETOverViewSection"
                        >
                            <h2 className="HR_heading" style={{ marginBottom: "0.5vw", color: "#333", margin: "0", paddingTop: "1.5vw" }}>
                                Why Choose CLM 365?
                            </h2>

                            <p className="AI-DescriptionStyles" style={{ margin: "0" }}>
                                AI-Powered Contract Management Software Built for Growing Businesses.
                            </p>
                            <p>Contracts should not slow down business operations. CLM 365 helps teams reduce approval delays, eliminate scattered contract management, and keep every agreement easier to track, review, and manage within one centralized Microsoft 365 platform. As contract volume grows, teams stay organized, responsive, and in control.</p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1vw 0vw" }}>
                                <DemoButtons
                                    LMS365="LMS365"
                                    demobtnText="See CLM 365 in Action"
                                />
                            </div>

                            <div
                                className="cybersection cybersectionET"
                                style={{ background: "none", paddingBottom: "1vw", paddingTop: "2vw" }}
                            >
                                <CyberSecurity PageName="ET365" />
                            </div>
                        </div>

                        <div></div>

                        <section className="sec">
                            <div>
                                <div
                                    className="easy"
                                    style={{ background: "none", padding: "0vw 5vw 3vw 5vw" }}
                                >
                                    <div className="Avilcard1 LMS_Avilcard1" >
                                        <div className="AvilcardStyle">
                                            <div className="stickerStyles">
                                                <div className="sticker">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/customer-support_wPk-OuZ23.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="custom" style={{ color: "#2323CE" }}>
                                                Customer Support
                                            </h3>
                                            <p className="easypera">
                                                Our support team merges technical prowess with sincere
                                                care, fostering trust through expertise and empathy.
                                                They build lasting relationships, transcending mere
                                                service to create meaningful connections.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="availcard2">
                                        <div className="cd1">
                                            <div
                                                className="c1"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon1">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/setting_z7IzKFspuo.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt1">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        {" "}
                                                        AI Enabled Apps
                                                    </h3>
                                                    <p className="easypera">
                                                        Our innovative apps are built with the options of
                                                        Azure AI, Copilot, and custom AI solutions.
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="c2"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon2">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/interface%20(1)_Bn8jFsKJE.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt2">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        Modern UI/UX
                                                    </h3>
                                                    <p className="easypera">
                                                        Every app is crafted using the latest Fluent UI,
                                                        ensuring seamless functionality across all devices.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cd2">
                                            <div
                                                className="c3"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon3">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/cloud-storage_wjvbbJkVt.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt3">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        Swift Deployment
                                                    </h3>
                                                    <p className="easypera">
                                                        Choose any deployment
                                                        method—Teams,
                                                        Outlook, or SharePoint—that suits your preferences.
                                                    </p>
                                                    <span id="ClientsSpeakTestimonial" />
                                                </div>
                                            </div>
                                            <div
                                                className="c4"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon4">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/refresh__OBoe0tcU.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt4">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        Free Updates{" "}
                                                    </h3>
                                                    <p className="easypera">
                                                        Our valued subscribers enjoy unlimited support,
                                                        enhancements, features, and updates.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                    <div id="client" className="IdChanges"></div>
                    <div
                        className="HR_whitesection"
                        style={{ background: "none", padding: "0vw 5vw 1vw 5vw" }}
                    >
                        <h2 className="HR_heading HR_MT" style={{ color: "#333", margin: "0" }}>Trusted by Industry Leaders for Smarter Contract Management</h2>
                        <p class="et-integration-subtitle CustomerReviewStyles AI-DescriptionStyles">
                            See how businesses simplify contract operations, accelerate approvals, and manage agreements with greater visibility and control using CLM 365.
                        </p>
                        <div className="HR_MT">
                            <OurClients />
                        </div>
                    </div>


                    <div id="integration" className="IdChangesIntegration"></div>

                    <div className="IdChanges"></div>
                    <div className="HR_whitesection" style={{ background: "none" }}>
                        <h2 className="HR_heading HR_MT" style={{ color: "#333", marginBottom: "0vw" }}>
                            CLM 365 Pricing & Plans
                        </h2>
                        <p className="AI-DescriptionStyles" style={{ margin: "0", marginBottom: "1vw" }}>

                            Flexible pricing plans for smarter contract management within Microsoft 365.

                        </p>
                        <div className="HR_MT">
                            <div>
                                <Plans appName={"CLM 365 - Contract Management"} />
                            </div>
                        </div>
                    </div>
                    <div className="AzureBoxStyles_LMS">
                        <div className="AzureBoxStyles_LMS_1">
                            <img style={{ width: "66%" }} src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png" alt="" />
                            <h3 className="Azureheading" style={{ marginBottom: "0.8vw !important", paddingTop: "0.41vw" }}>Live on Azure</h3>
                            <p className="AzureText" style={{ textAlign: "center" }}>Buy directly from Azure Marketplace or via your enterprise agreement.</p>
                            <a className="Hr_Link" href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1">  Get started on Azure</a>
                        </div>
                        <div className="AzureBoxStyles_LMS_2" >

                            <img style={{ width: "65%" }} src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Random-Images/Untitled%20design%20(21)_nD6tRPn1n9.png" alt="" />
                            <h3 className="Azureheading">Special Pricing for NPOs</h3>

                            <SpecailButtons userCount={"50+"} LMS365="LMS365" hideSpecialrequest="hideSpecialrequest" SpecailButtonsText="Non-profits and government-funded educational institutes can avail exclusive rates." />
                        </div>
                        <div className="AzureBoxStyles_LMS_3">

                            <img style={{ width: "40%" }} src="https://ik.imagekit.io/apps365/Apps365/HD/Untitled%20design%20(27).webp" alt="" />
                            <h3 className="Azureheading" style={{ marginBottom: "0.8vw !important", paddingTop: "0.3vw" }}>Enterprise Pricing for 50+ Users
                            </h3>

                            <SpecailButtons userCount={"50+"} LMS365="LMS365" hideNPOrequest="hideNPOrequest" SpecailButtonsTextUser="Organizations with more than 50 users can avail special pricing." />
                        </div>


                    </div>
                    {/* <div
            className="Azuersection"
            style={{
              background: "none",
              paddingBottom: "0vw",
              paddingTop: "0vw",
            }}
          >
            <div className="AzureLogoText">
              <a
                href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1"
                target="_blank"
              >
                <img
                  className="AzureImage"
                  src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png"
                  alt="Azure"
                />
              </a>
              <p className="AzureText">
                Using Azure? now you can{" "}
                <a
                  href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1"
                  target="_blank"
                >
                  buy
                </a>
                on Azure Marketplace or using your enterprise agreement
              </p>
            </div>
          </div> */}


                    <span className="privacytext"></span>
                    <div id="faq" className="IdChangesIntegration"></div>
                    <div class="et et-demo-section">
                        <h1 class="et et-demo-heading helpdeskheadingstyle" style={{ margin: "0", padding: "0", color: "#333", paddingTop: "2vw" }}>
                            Centralize and Simplify Your Entire Contract Lifecycle
                        </h1>
                        <p class="et et-demo-subtext AI-DescriptionStyles" style={{ marginBottom: "1vw" }}>
                            Explore how your teams can manage contracts with greater clarity, speed, and control inside Microsoft 365.
                        </p>
                        {/* <div class="et et-button-group">
              <DemoButtons
                hideDemoBtn="fasle"
                trailbtnText="Start Your 14-Day Free Trial button"
              />
            </div> */}
                        <form
                            id="lpgetstartedform"
                            className="lpgetstartedformclass "
                            style={{ padding: "2vw", background: "#f9faffbb", borderRadius: "0.5vw", paddingBottom: "0vw" }}
                        >
                            <div className="FooterContainer">
                                <div className="BottomFormleftimg">
                                    <img className="BottomFormImage" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/LMS365-bottom-form_V3Jq3dsZk.png" alt="" />
                                </div>
                                <div className="FieldsButtonStyles">
                                    <div className="FormFieldStyles">
                                        <h3>Book a Personalized Helpdesk 365 Demo!</h3>
                                        <DemoButtons LMS365demoForm={true} demobtnText="See CLM 365 in Action" />
                                    </div>
                                    {/* <div className="ButtonandPrivacyText">
                    <PrimaryButton
                      style={{ background: "var(--btn-bg-color)", border: "none", fontSize: "1.1vw" }}
                      id="lpgetstartedsubmitbutton"
                      className="subButton"
                    // onClick={() => submitRequest("getstarted")}
                    >
                      {"Select a Time Slot"}

                    </PrimaryButton>

                  </div> */}
                                </div>
                            </div>
                        </form>
                        <div>
                            <h3 className="HR_faq">Frequently Asked Questions</h3>
                            <Accordion items={accordionItems} />
                        </div>
                    </div>
                </div>
                <Footer ET365={"ET365"} />
            </HelmetProvider >
        </>
    );
}
export default CLM365;
