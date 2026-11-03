import * as React from 'react';
import DemoButtons from './Utiilities/DemoButtons';
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import ImageSlider from './Utiilities/ImageSlider';
import Plans from './Utiilities/Plans';
import Accordion from './Utiilities/AccordionItem';
import Lightbox from './Utiilities/Lightbox';
import SpecailButtons from './Utiilities/SpecialButtons';
import Header from './Header and Footer/Header';
import Footer from './Header and Footer/Footer';
import ScrollToTop from './Utiilities/ScrolltoTop';
import G2Badge from './Utiilities/G2Badge';
import TabsWithImage from './Utiilities/TabsWithImage';
import Availability from './Utiilities/Availability';
import OurClients from './Utiilities/OurClients';
import Integration from './Utiilities/Integration';
import { HelmetProvider, Helmet } from "react-helmet-async";

import { useEffect, useState } from 'react';
import GetOfferPage from './Utiilities/GetOfferPage';
import Azuer from './Utiilities/Azuer';
import OverviewCommon from './GlobalMultiple/OverviewCommonCLM';
import CyberSecurity from './Utiilities/demo';
function CLM() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    
        React.useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 767);
            };
    
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
    }, []);
    const dynamicImages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112',
        // Add more image URLs as needed
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$49',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
            features: ['Minimum 5 users', 'Max 30 contracts / year', 'Unlimited support through email only', 'Integrates with Microsoft 365', 'Data stays within Microsoft 365', 'Contract Authoring', 'One level approval flow', 'Negotiation', 'Execution'],

        },
        {
            name: 'Plus',
            price: '$69',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['Minimum 5 users', 'Max 60 contracts / year', 'Unlimited support through email only', 'Free updates via MS store', 'Mobile responsive', 'Limited Approval Workflows', 'Draft, Negotiate & Execute', 'Contract Repository', 'Clause Library', 'Reports'],
        },
        {
            name: 'Premium',
            price: '$89',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['Minimum 5 users', 'Max 120 contracts / year', 'Additional 10 contracts/month at $89.99', 'Unlimited support includes live chat', 'Free updates with support', '3 Contract templates', 'Two Level Approvals', 'Alerts & Notifications', 'Version control', 'Amendment', 'Renewals', 'Advance Search Capabilities', 'Advance Reporting', 'Role based Security', 'Add Documents'],
        },
        {
            name: 'Enterprise',
            price: '$129',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['Minimum 5 users', 'Max 240 contracts / year', 'Additional 10 contracts/month at $129.99', 'Unlimited support with screen sharing', '7 Contract templates', 'Multilevel Approvals', 'Obligation Management', 'Import Existing Contracts', 'AI based Obligations', 'Audit Trail', 'Activity Log', 'Add Documents', 'Risk Assessment', 'Approval through Emails', 'Digital Signature', 'Dashboard', 'MS Teams & Outlook App'],
        },
    ];
    const data = [

        {
            heading: 'Assets depreciation – calculation &amp; reporting'
            ,
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/Depreciation_details_QEJu2iBIX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664186732101',
        },
        {
            heading: 'Bar code &amp; QR code',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/bar_code_O1_82R9Ki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664169542304',
        },
        {

            heading: 'Assets Report',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/bar_code_O1_82R9Ki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664169542304',
        },
        {

            heading: 'Connect Asset 365 with your other apps',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384',
        },


        // Add more objects as needed
    ];
    const accordionItems = [
        {
            title: '1. What is a CLM 365 System, and how does it benefit my organization?', content: `A CLM 365 System is a software solution that helps organizations manage their contracts efficiently. It centralizes contract storage, automates workflows, and provides tools for tracking contract milestones, compliance, and renewals. By using a CLM 365 system, your organization can reduce risks, improve compliance, and streamline contract processes. ` },
        {
            title: `2. How does a CLM 365 App help in managing contracts on the go?`, content: `A CLM 365 App allows users to access, review, and manage contracts directly from their mobile devices. This flexibility ensures that key stakeholders can approve, amend, or monitor contracts anytime, anywhere, which accelerates the contract lifecycle and enhances collaboration. ` },
        {
            title: `3. What are the advantages of using SharePoint for CLM 365 Software?`,
            content: `SharePoint CLM 365 Software integrates seamlessly with Microsoft SharePoint, leveraging its document management capabilities. This integration enables organizations to utilize SharePoint's robust features like version control, document sharing, and collaboration tools, making CLM 365 more efficient and secure.`
        }, {
            title: '4. How does Microsoft CLM 365 Software integrate with other Microsoft products?',
            content: `Microsoft CLM 365 Software is designed to integrate smoothly with other Microsoft products, such as Office 365, Dynamics 365, and Azure. This integration allows for a unified platform where contracts can be managed alongside other business processes, enhancing productivity and ensuring data consistency across systems.`
        },
        {
            title: '5. What features should I look for in CLM 365 Software?',
            content: `When choosing CLM 365 Software, look for features such as automated workflows, customizable templates, compliance tracking, audit trails, and robust reporting. These features help streamline contract creation, approval, and management processes while ensuring compliance and reducing operational risks.`
        },
        {
      title: `Which currency are the prices listed in?`, content: (
        "All prices are listed in USD."

      )
    },
    ];
    const tabs = [
        { id: 1, title: 'Microsoft Ecosystem', Heading: 'Effortless Integration with Microsoft Ecosystem: CLM 365 System', content: (
            <ul>
                <li>
                Maximize your existing Microsoft ecosystem by incorporating our advanced CLM 365 system.
                </li>
                <li>
                This intuitive, cloud-based software integrates smoothly with Microsoft 365, boosting your productivity and efficiency.
                </li>
                <li>
                Utilizing the power of SharePoint and functioning as a Microsoft Teams app, it offers a centralized hub for all your CLM 365 needs.
                </li>
                <li>
                Seamless synchronization with Microsoft Outlook for streamlined contract tracking and notifications.
                </li>
            </ul>
        ),
image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Searching_bszxfaq2js.gif?updatedAt=1720500232508'},
        { id: 2, title: 'Contract Operations', Heading: 'Streamlined Contract Operations: SharePoint CLM 365 app', content: (
            <ul>
                <li>
                Microsoft CLM 365 software simplifies the entire contract lifecycle, integrating seamlessly with DocuSign, e-sign, and your Microsoft environment.
                </li>
                <li>
                SharePoint CLM 365 provides exceptional security, control, and visibility.
                </li>
                <li>
                It features smart draft-to-signature workflows, customizable scenarios, and automated alerts for timely obligations.
                </li>
                <li>
                Enhanced collaboration through real-time updates and shared access within Microsoft Teams.
                </li>
            </ul>
        ), image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Searching_bszxfaq2js.gif?updatedAt=1720500232508' },
        { id: 3, title: 'User-centered', Heading: 'User-centered Approach to CLM 365 tool Design', content: (
            <ul>
                <li>
                Using Microsoft Fluent UI, our CLM 365 application provides an intuitive interface for easy navigation and minimal learning curve.
                </li>
                <li>
                Enhanced by AI, it offers dynamic contract interactions and an adaptable workflow.
                </li>
                <li>
                AI-driven document comparison ensures precise tracking of changes, improving accuracy and efficiency in reviewing modifications.
                </li>
                <li>
                Personalized user settings allow customization of dashboards and notifications to suit individual preferences.
                </li>
            </ul>
        ), image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/visualization_viJFIn6Wt.gif?updatedAt=1720500231624' },
        {
            id: 4, title: 'Agreements', Heading: 'Microsoft CLM 365 with simplified Agreements', content: (
                <ul>
                    <li>
                    CLM 365 software is your comprehensive toolkit for handling critical documents such as supplier agreements, customer contracts, and employment terms.
                    </li>
                    <li>It ensures seamless creation, sharing, and organization of these contracts to streamline business operations.</li>
                    <li>Think of it like organizing a large-scale party, where you handle invitations, meals, and music coordination, but for your business agreements.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/dataSync__gvNUPNCn.gif?updatedAt=1720500232251'
        },
        {
            id: 5, title: 'Security', Heading: 'Enterprise-Grade Security and Compliance: CLM 365 Software', content:(
                <ul>
                    <li>
                    Detailed Audit Trails
                    </li>
                    <li>
                    Precision Access Control
                    </li>
                    <li>
                    Tenant-Specific Central Repository
                    </li>
                    <li>
                    Flexible Custom Reporting
                    </li>
                    <li>
                    Proactive Alerts and AI-Driven Notifications
                    </li>
                    <li>
                    Top-Tier Security and Privacy Standards
                    </li>
                    <li>
                    Built-in Digital Signatures
                    </li>
                </ul>
            ),
             image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/dataSync__gvNUPNCn.gif?updatedAt=1720500232251'
        },
        {
            id: 6, title: 'AI Powered ', Heading: 'Simplify Contract Management With AI', content:(
                <ul>
                    <li>
                  Instantly use AI to extract key terms, obligations, and risks from any contract for actionable insights in seconds. 
                    </li>
                    <li>
                  Leverage AI agent to retrieve comprehensive counterparty information, including contact details, contract history, and compliance records. 
                    </li>
                    <li>
                   Manage, update, and collaborate on contracts directly within Outlook, Teams, or Word. 
                    </li>
                    <li>
                   Use Microsoft Copilot AI to summarize contracts, suggest edits, and highlight essential terms within your workflow. 
                    </li>
                    <li>
                  Link related agreements under a primary contract for better visibility and streamlined management. 
                    </li>
                   
                </ul>
            ),
             image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/dataSync__gvNUPNCn.gif?updatedAt=1720500232251'
        }
       
    ];
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <>
        <HelmetProvider>
                <Helmet>
                    <title>AI Contract Lifecycle Management Software | CLM 365</title>
                    <meta name="description" content="Streamline contract creation, review, approvals, and renewals with CLM 365 AI. Simplify contract lifecycle management and improve visibility across your organization." />
                </Helmet>
            <ScrollToTop />
            <Header />
            <div className='HR_panel'>
                <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >
                    <div className='HR_Section1LeftSide'>
                        <h1 className='HR_primaryclr  ' >Gain control with easy, scalable contract software in minutes with CLM 365</h1>
                        <p className='HR_textclr'>Drive smarter business decisions with AI-powered CLM 365 with built-in Microsoft Copilot. Designed for growing organizations, our solution simplifies approvals, tracks key milestones, and ensures secure, centralized access to every contract. Integrates with Microsoft Teams, SharePoint, and MS 365 add-ins, empower your team to collaborate efficiently, reduce risks, and stay ahead with real-time insights and automated workflows. </p>
                        <DemoButtons/>
                    </div>
                    <div className='HR_Section1RightSide'>
                        <img alt='MainImage' src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/random-images/20944145__1_-removebg-preview%20(1)_8HExemHEKq.png?updatedAt=1708084034004"}   />
                    </div>
                </div>
            </div>
  {/* <GetOfferPage Type="Image"/> */}


            <div>
                <G2Badge
                    // heading="Now CLM 365 - Contract Management App is Available on Microsoft Teams"
                    // videoUrl="https://www.youtube.com/watch?v=jIfazWcHpwI"
                    // imageUrl="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581"
                     />
                     <OverviewCommon/>
                     <div className='cybersection' >
                <CyberSecurity/>
            </div> 
            </div>
            <div id="features" className="IdChanges"></div>
            <div>
                <TabsWithImage tabs={tabs} />
            </div>
            <div>
                <Availability />
            </div>
            <div id="client" className="IdChanges"></div>
            <div className='HR_whitesection'>
                <h2 className='HR_heading HR_MT' >Our Clients
                </h2>

                <div className='HR_MT'>
                    <OurClients />
                </div>
            </div>  <div id="integration" className="IdChangesIntegration"></div>
            <div  className='integartionPT'>
                <Integration appName={"CLM 365 - Contract Management"} />

            </div>
            <div  className="IdChangesIntegration"></div>
           

            <div className='HR_MT HR_whitesection'>
            <div className="HR_MT">
                <div>
                <h2 className='HR_heading HR_MT' id="pricing">CLM 365 - Contract Management Plans
                </h2>
                    <Plans plans={planData} appName="CLM 365 - Contract Management" />
                </div>
            </div>
</div>

           



            
            {/* <div className='AzureLogoText'>
                        <a href='https://appsource.microsoft.com/en-us/product/office/WA200006203?tab=Overview' target='_blank'>
                            <img className='AzureImage' src='https://ik.imagekit.io/zn4au2jftpm5/Azure_dQeGdjXNs_cWe2-VVEx.jpeg?updatedAt=1736158710879' alt='Azure' />
                        </a>
                        <p className='AzureText'>
                            Using Azure? now you can <a href='https://appsource.microsoft.com/en-us/product/office/WA200006203?tab=Overview' target='_blank'>
                                buy
                            </a>
                            on Azure Marketplace or using your enterprise agreement
                        </p>
                    </div>
            <SpecailButtons  userCount={"50+"} />
            <h4 className='HR_heading HR_MT'>Get started with 14 days risk free trial. <br />No credit card details required
            </h4>
            <div className='Hr_flex HR_MT'>
                <DemoButtons />
            </div> */}
            <Azuer userCount={"50+"}/>
            <span className='privacytext'></span>
            <div id="faq" className="IdChangesIntegration"></div>
            <div className='HR_FAQ' >

                <div>
                    <h3 className='HR_faq'>Frequently Asked Questions</h3>
                    <Accordion items={accordionItems} />
                </div>


            </div>

            <Footer />
            </HelmetProvider>
        </>
    )
}
export default CLM;