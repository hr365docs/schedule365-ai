import * as React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import DemoButtons from './Utiilities/DemoButtons';
import { FaExpand } from 'react-icons/fa6';
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

import GetOfferPage from './Utiilities/GetOfferPage';
import Azuer from './Utiilities/Azuer';
import OverviewCommon from './GlobalMultiple/OverviewCommonCLM';
import CyberSecurity from './Utiilities/demo';
import CustomerSupport from './Utiilities/CustomerSupport';
import ComparisonSection from './ComparisonSection';
import CLMClient from './Utiilities/CLMClient';
import OverviewLPCLM365 from './GlobalMultiple/OverviewLPCLM365';
import GlobalFooter from './GlobalMultiple/GlobalFooter';

const getInitialIsFromIndia = () => {
    try {
        const cachedIp = localStorage.getItem("ipInfo");
        if (cachedIp) {
            const parsed = JSON.parse(cachedIp);
            return parsed?.country === "IN";
        }
    } catch (e) { }
    return false;
};

function LPCLM365() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [isFromIndia, setIsFromIndia] = useState(getInitialIsFromIndia);
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Refs for adaptive slide height calculation
    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const [sliderHeight, setSliderHeight] = useState('auto');

    const updateSliderHeight = useCallback(() => {
        if (currentHeroSlide === 0 && slide1Ref.current) {
            setSliderHeight(`${slide1Ref.current.offsetHeight}px`);
        } else if (currentHeroSlide === 1 && slide2Ref.current) {
            setSliderHeight(`${slide2Ref.current.offsetHeight}px`);
        }
    }, [currentHeroSlide]);

    useEffect(() => {
        updateSliderHeight();
        window.addEventListener('resize', updateSliderHeight);
        return () => window.removeEventListener('resize', updateSliderHeight);
    }, [updateSliderHeight]);

    const IpTokenCount = [
        "25241198af9c52",
        "843b85132fe7ea",
        "6a981cfd695563",
        "1840068c4be068"
    ];

    useEffect(() => {
        async function checkLocation() {
            for (let i = 0; i < IpTokenCount.length; i++) {
                const token = IpTokenCount[i];
                try {
                    const response = await fetch(`https://ipinfo.io/json?token=${token}`);
                    if (!response.ok || response.status === 429) continue;
                    const data = await response.json();
                    if (data && data.country && !data.error && data.status !== 429) {
                        const fromIndia = data.country === "IN";
                        setIsFromIndia(fromIndia);
                        localStorage.setItem("ipInfo", JSON.stringify(data));
                        return;
                    }
                } catch (error) { }
            }

            try {
                const response = await fetch("https://ipapi.co/json/");
                if (response.ok) {
                    const data = await response.json();
                    const code = data?.country_code || data?.country;
                    if (code) {
                        const fromIndia = code === "IN";
                        setIsFromIndia(fromIndia);
                        localStorage.setItem("ipInfo", JSON.stringify({ country: code }));
                        return;
                    }
                }
            } catch (e) { }

            try {
                const response = await fetch("https://get.geojs.io/v1/ip/country.json");
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.country) {
                        const fromIndia = data.country === "IN";
                        setIsFromIndia(fromIndia);
                        localStorage.setItem("ipInfo", JSON.stringify({ country: data.country }));
                        return;
                    }
                }
            } catch (e) { }
        }

        checkLocation();
    }, []);

    // Automatic slide switch between Event Banner (0) and Old Content (1)
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev === 0 ? 1 : 0));
        }, 8000);

        return () => clearInterval(slideInterval);
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const featuresEndtoEnd = [
        {
            title: "AI Contract Review",
            desc: "Instantly analyze contracts using AI to detect risks, identify clause issues, and compliance gaps while summarizing key insights for faster decisions. ",
            icon: (<>
                <div className="feature-icon fi-teal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg></div></>)
        },
        {
            title: "Clause Risk Detection",
            desc: "Automatically detect risky terms, missing clauses, and non-standard language before contracts are approved or signed to reduce legal and compliance risk. ",
            icon: (
                <>
                    <div className="feature-icon fi-orange"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div></>
            )
        },
        {
            title: "Obligation Identification",
            desc: "Extract obligations, owners, deliverables, timelines, and follow-up actions from signed contracts automatically.",
            icon: (
                <>
                    <div className="feature-icon fi-purple"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div></>
            )
        },
        {
            title: "Contract Approval Automation",
            desc: "Streamline contract approvals with structured workflows that reduce delays, improve accountability, and provide full visibility across legal and business teams.",
            icon: (<><div className="feature-icon fi-green"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
            </>)
        },
        {
            title: "Faster Contract Creation",
            desc: "Accelerate contract drafting with guided templates, reusable clauses, and intelligent search across your contract repository to reduce manual effort. ",
            icon: (
                <><div className="feature-icon fi-gold"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                </>
            )
        },
        {
            title: "SharePoint Contract Repository",
            desc: "Store every agreement in a secure contract repository in SharePoint with centralized access, version control & enterprise-grade security. ",
            icon: (
                <>
                    <div className="feature-icon fi-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                </>
            )
        },
    ];

    const dataIntegration = [
        {
            title: "SharePoint",
            desc: "Store contracts, amendments, and related documents in one secure place to improve visibility, version control, and contract accessibility.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/sharepoint-logo-_cmiWFaZqe.webp"
        },
        {
            title: "Microsoft Teams",
            desc: "Collaborate on contract requests, approvals, and reviews directly within Teams to keep legal and business teams aligned and responsive.",
            img: "https://ik.imagekit.io/apps365/Apps365/HD/MS%20teams.webp?updatedAt=1762945136977"
        },
        {
            title: "Outlook",
            desc: "Receive contract reminders, approval notifications, and renewal updates directly in Outlook to stay informed and take timely action.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/microsoft-outlook-icon-logo_gDHQpwu35.png"
        },
        {
            title: "Power Automate",
            desc: "Build custom apps to enhance contract workflows and integrate seamlessly with CLM 365.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/CLM365/Power%20Automate%20(1)_eXEyQVXbrh.png?updatedAt=1735914125187"
        },
        {
            title: "M365 Security",
            desc: "Build custom apps to enhance legal workflows and integrate seamlessly with CLM 365.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/Microsoft_logo.svg_pVkFqFdkP.png?updatedAt=1726464369360"
        },
        {
            title: "DocuSign",
            desc: "Integrate DocuSign with CLM 365 to send and securely sign contracts electronically while tracking signature status throughout the contract lifecycle.",
            img: "https://ik.imagekit.io/apps365/Lp-pages/DOCU-60cafc67.png"
        },
        {
            title: "Adobe Acrobat Sign",
            desc: "Send contracts for secure e-signatures using Adobe Acrobat Sign. Automate contract signing and keep signed agreements stored in your repository.",
            img: "https://ik.imagekit.io/apps365/Lp-pages/Adobe_Acrobat_DC_logo_2020.svg"
        },
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

    const accordionItems = [
        {
            title: '1. Can SharePoint be used for contract management?', content: `Yes. SharePoint can be used as the foundation for contract management. CLM 365 enhances SharePoint with workflows, metadata, AI automation, contract dashboards, renewal alerts, and obligation tracking to turn it into a complete CLM platform.`
        },
        {
            title: `2. How does a CLM 365 App help in managing contracts on the go?`, content: `A CLM 365 App allows users to access, review, and manage contracts directly from their mobile devices. This flexibility ensures that key stakeholders can approve, amend, or monitor contracts anytime, anywhere, which accelerates the contract lifecycle and enhances collaboration. `
        },
        {
            title: `3. Is CLM 365 built on SharePoint?`,
            content: `Yes. CLM 365 is designed for organizations that use Microsoft 365 and SharePoint for document management, collaboration, and security. It works natively inside your existing environment.`
        }, {
            title: '4. How does Microsoft CLM 365 Software integrate with other Microsoft products?',
            content: `Microsoft CLM 365 Software is designed to integrate smoothly with other Microsoft products, such as Office 365, Dynamics 365, and Azure. This integration allows for a unified platform where contracts can be managed alongside other business processes, enhancing productivity and ensuring data consistency across systems.`
        },
        {
            title: '5. Does CLM 365 include AI?',
            content: `Yes. CLM 365 includes AI capabilities for contract creation, clause risk detection, summaries, obligation identification, and commercial term tracking — all within Microsoft 365.`
        },
        {
            title: '6. Can CLM 365 send renewal reminders?',
            content: `Yes. CLM 365 tracks renewal dates, expiry dates, notice periods, and commercial review dates with automated reminders delivered through Outlook and Teams.`
        },
        {
            title: '7. Who should use SharePoint contract management software?',
            content: `CLM 365 is ideal for legal, procurement, sales, finance, and operations teams that need to manage contracts securely inside Microsoft 365 without learning a new platform.`
        },
        {
            title: '8. Why do organizations choose SharePoint for contract management?',
            content: `Organizations choose SharePoint because it provides a centralized repository to securely store and organize contracts in one place. Built-in version control tracks every document change, helps restore previous versions, and keeps teams working from a single source of truth throughout the contract lifecycle. `
        },
        {
            title: '9.How is contract search more effective in SharePoint?',
            content: `SharePoint improves contract search by using metadata to classify contracts by vendor, contract type, department, status, or renewal date. Combined with SharePoint Search, users can quickly find contracts, clauses, and key information from a centralized Contract Repository, reducing search time and improving productivity. `
        },
        {
            title: '10. Can I build contract management workflows without coding in SharePoint?',
            content: `Yes. SharePoint and Microsoft Power Automate let you build approval workflows without coding. Automate contract requests, reviews, approvals, and renewals while improving collaboration across legal, procurement, and business teams within Microsoft 365. `
        },
        {
            title: '11. How is security managed for contract management in SharePoint?',
            content: `SharePoint protects contracts with enterprise-grade security, role-based permissions, and Microsoft 365 compliance features. Organizations can control document access, secure sensitive contracts, and use audit logs to track document edits and user activity. This helps maintain transparency, accountability, and compliance throughout the contract lifecycle.`
        },
        {
            title: '12. Does CLM 365 create a separate repository?',
            content: `No. CLM 365 uses your existing SharePoint environment as a secure Contract Repository instead of creating a separate database. This approach simplifies Contract lifecycle Management, improves document governance, and allows legal, procurement, and business teams to work from a single source of truth.`
        },
        {
            title: '13. How does SharePoint versioning work?',
            content: `SharePoint automatically maintains version history whenever a contract is updated. Teams can review previous versions, compare changes, and restore earlier copies when needed.  `
        },
        {
            title: '14. Does it support SharePoint Online?',
            content: `Yes. CLM 365 is fully compatible with SharePoint Online and integrates seamlessly with Microsoft 365 apps, including MS Teams, Outlook, and Power Automate. Organizations can manage contracts, automate contract approval workflows, and securely collaborate without leaving the Microsoft ecosystem. `
        },
        {
            title: '15. Can Copilot helps in searching contracts?',
            content: `Yes. When integrated with Microsoft Copilot, users can search contracts using natural language to quickly find clauses, obligations, renewal dates, and other key information stored in your repository. `
        },
        {
            title: '16. Can we store data in our Microsoft 365 tenant? ',
            content: `Yes. CLM 365 stores contracts within your own Microsoft 365 tenant, allowing organizations to retain full ownership of their data. This supports secure contract management workflow and simplifies governance.`
        },
        {
            title: '17. How securely are my contracts managed inside CLM 365?',
            content: `CLM 365 protects contracts with enterprise-grade security, role-based permissions, and Microsoft 365 compliance features. All contract data is stored securely within your own Microsoft 365 tenant, ensuring you retain complete ownership and control `
        },
        {
            title: '18. Is contract data sent to ChatGPT?',
            content: `No, CLM 365 does not send your contract data to public AI services such as ChatGPT unless you explicitly configure an approved AI provider. You control which AI service is used, and all AI requests follow your organization’s security and governance policies.`
        },
        {
            title: '19. Does AI train on our contracts?',
            content: `No. Your contracts are never used to train public AI models. CLM 365 does not processes contract content to generate the requested response (such as summaries, clause explanations, or risk analysis). Your data remains under your organization’s control and ownership and within your tenant.`
        },
        {
            title: '20. Does it work with Microsoft Copilot?',
            content: `Yes. CLM 365 is built natively for Microsoft 365 and integrates with Microsoft Teams, SharePoint, Outlook, and Microsoft Copilot. By storing contracts within SharePoint, CLM 365 enables Copilot to work with your governed contract data while respecting Microsoft 365 permissions.`
        },
        {
            title: '21. Can we use Azure OpenAI?',
            content: `Yes. CLM 365 supports Azure OpenAI, allowing organizations to leverage enterprise-grade AI services within Microsoft’s secure cloud. You can also configure other supported AI providers based on your organization’s security, compliance, and deployment requirements.`
        },
        {
            title: '22. Where is our contract data stored?',
            content: `Your contracts remain in your Microsoft 365 environment. CLM 365 stores contract documents in your SharePoint tenant and respects your existing Microsoft 365 security, permissions, retention, and compliance policies. Customer content is not copied into a separate CLM repository unless you choose a specific deployment option.`
        },
        {
            title: '23. Which currency are the prices listed in?',
            content: isFromIndia
                ? 'All prices are listed in INR.'
                : 'All prices are listed in USD.'
        }
    ];

    const tabs = [
        {
            id: 6, title: 'AI Powered ', Heading: 'Simplify Contract Management With AI', content: (
                <ul>
                    <li>Instantly use AI to extract key terms, obligations, and risks from any contract for actionable insights in seconds.</li>
                    <li>Leverage AI agent to retrieve comprehensive counterparty information, including contact details, contract history, and compliance records.</li>
                    <li>Manage, update, and collaborate on contracts directly within Outlook, Teams, or Word.</li>
                    <li>Use Microsoft Copilot AI to summarize contracts, suggest edits, and highlight essential terms within your workflow.</li>
                    <li id='Comparison'>Link related agreements under a primary contract for better visibility and streamlined management.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM-ai-image.png'
        },
        {
            id: 1, title: 'Microsoft Ecosystem', Heading: 'Effortless Integration with Microsoft Ecosystem: CLM 365 System', content: (
                <ul>
                    <li>Maximize your existing Microsoft ecosystem by incorporating our advanced CLM 365 system.</li>
                    <li>This intuitive, cloud-based software integrates smoothly with Microsoft 365, boosting your productivity and efficiency.</li>
                    <li>Utilizing the power of SharePoint and functioning as a Microsoft Teams app, it offers a centralized hub for all your CLM 365 needs.</li>
                    <li>Seamless synchronization with Microsoft Outlook for streamlined contract tracking and notifications.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM%202.webp'
        },
        {
            id: 2, title: 'Contract Operations', Heading: 'Streamlined Contract Operations: SharePoint CLM 365 app', content: (
                <ul>
                    <li>Microsoft CLM 365 software simplifies the entire contract lifecycle, integrating seamlessly with DocuSign, e-sign, and your Microsoft environment.</li>
                    <li>SharePoint CLM 365 provides exceptional security, control, and visibility.</li>
                    <li>It features smart draft-to-signature workflows, customizable scenarios, and automated alerts for timely obligations.</li>
                    <li>Enhanced collaboration through real-time updates and shared access within Microsoft Teams.</li>
                    <li>CLM 365 lets users redline contracts, track changes, add comments, and manage versions directly in Microsoft Word.</li>
                </ul>
            ), image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM%203.webp'
        },
        {
            id: 3, title: 'User-centered', Heading: 'User-centered Approach to CLM 365 tool Design', content: (
                <ul>
                    <li>Using Microsoft Fluent UI, our CLM 365 application provides an intuitive interface for easy navigation and minimal learning curve.</li>
                    <li>Enhanced by AI, it offers dynamic contract interactions and an adaptable workflow.</li>
                    <li>AI-driven document comparison ensures precise tracking of changes, improving accuracy and efficiency in reviewing modifications.</li>
                    <li>Personalized user settings allow customization of dashboards and notifications to suit individual preferences.</li>
                </ul>
            ), image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581'
        },
        {
            id: 4, title: 'Contract Lifecycle', Heading: 'Contract Lifecycle Management in SharePoint', content: (
                <ul>
                    <li>Manage every stage of the contract lifecycle, from drafting and review to approval, execution, and renewal tracking in SharePoint.</li>
                    <li>CLM 365 is AI-powered contract lifecycle management software that centralizes contracts, workflows, obligations, and reporting within Microsoft 365.</li>
                    <li>Simplify SharePoint contract lifecycle management with AI-assisted reviews, automated approvals, obligation tracking, and renewal reminders.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM%203.webp'
        },
        {
            id: 5, title: 'Security', Heading: 'Enterprise-Grade Security and Compliance: CLM 365 Software', content: (
                <ul>
                    <li>Detailed Audit Trails</li>
                    <li>Precision Access Control</li>
                    <li>Tenant-Specific Central Repository</li>
                    <li>Flexible Custom Reporting</li>
                    <li>Proactive Alerts and AI-Driven Notifications</li>
                    <li>Top-Tier Security and Privacy Standards</li>
                    <li>Built-in Digital Signatures</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581'
        },
    ];

    const Boxs = [
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/No%20duplicate%20document%20repositories.svg",
            text: "No duplicate document repositories"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Role%20based%20permissions.svg",
            text: "Role based permissions"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Teams%20&%20Outlook%20integration.svg",
            text: "Microsoft Teams & Outlook integration"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20365%20compliance.svg",
            text: "Microsoft 365 compliance"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Entra%20ID%20security.svg",
            text: "Microsoft Entra ID security"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Centralized%20contract%20repository.svg",
            text: "Centralized contract repository"
        },
    ];

    const workBoxs = [
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Approval-through-Emails.svg?updatedAt=1768997946170",
            heading: "Review & Approvals",
            text: "Store contracts in a secure SharePoint Contract Repository. Route contracts through approval workflows while AI agents review every clause and highlight key terms for faster decisions."
        },
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Role-Based%20Security.svg?updatedAt=1768996193300",
            heading: "Search & Retrieve",
            text: "Search contracts by name, vendor, customer, or keywords and retrieve the exact contracts you need within minutes."
        },
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/technology.webp?updatedAt=1765798708952",
            heading: "AI Clause Summary",
            text: "AI reviews contract clauses, summarizes agreements, identifies risks, and extracts key terms before approval. Instantly search contracts with Microsoft Copilot to find important clauses, obligations, and contract details."
        },
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Operational%20Efficiency.webp?updatedAt=1765803725122",
            heading: "Renewal Tracking",
            text: "Stay ahead of every contract renewal with automated reminders. Avoid unexpected expirations and make renewal decisions with confidence."
        },
    ];

    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };


    const CheckIcon = () => (
        <img decoding="async" width="10" height="10" src="https://www.apps365.com/wp-content/uploads/2026/07/check.9f62cc5d79ec06d4b3b2b79b2905c84df608eb81fc36bff1871c6336264dd874.svg" className="attachment-large size-large wp-image-130522" alt="" />
    );

    const challenges = [
        "Contracts scattered across folders and departments",
        "Multiple versions of the same agreement causing confusion",
        "Manual follow-ups for approvals slowing deals down",
        "Missed renewal dates and costly notice periods",
        "No lifecycle visibility from request to renewal",
    ];

    const solutions = [
        "Structured contract repository with metadata",
        "AI-powered clause risk and obligation detection",
        "Automated approval workflows and routing",
        "Automated renewal and expiry reminders",
        "Dashboards for full lifecycle visibility",
    ];

    const AI_steps = [
        "Ask questions in natural language",
        "Summarize 300-page agreements in seconds",
        "Find renewal dates, obligations, and key terms instantly",
        "Explain legal clauses in plain language",
        "Recommend next actions",
        "Surface contractual obligations automatically",
    ];

             // Define features array for Schedule 365
                const features = [
                "Built inside Microsoft 365",
                "AI contract & meeting agents",
                "Automated scheduling workflows"
                ];
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>AI Contract Lifecycle Management Software | CLM 365</title>
                    <meta name="description" content="Streamline contract creation, review, approvals, and renewals with CLM 365 AI. Simplify contract lifecycle management and improve visibility across your organization." />
                </Helmet>
                <ScrollToTop />
                <Header isComparison={true} />

                {/* Full-Width Adaptive Height Hero Slider */}

                <div className='HR_panel'>
                    <div className="HR_overlay">
                        <div className="HR_FlexCenterSpcBetween HR_ParentSection1">
                            <div className="hero-wrapper">
                                <h1 className="hero-badge">
                                    Outlook &amp; Microsoft 365 Intelligent Scheduling Software
                                </h1>

                                <h2 className="hero-heading">
                                    Microsoft 365 Scheduling -
                                    <br />
                                    Software <span className="accent">with AI Agents</span>
                                </h2>

                                <p className="hero-desc">
                                    <strong>Stop losing time to back-and-forth emails, double-bookings, and disconnected calendar tools. </strong>
                                   <br/> Schedule 365 transforms Microsoft 365 and Outlook into an autonomous, AI-driven scheduling engine. Coordinate internal cross-team syncs, client meetings, and multi-timezone availability without ever leaving your Microsoft ecosystem.
                                </p>

                                <div className="hero-cta">
                                    <DemoButtons
                                        isreverse={true}
                                        demobtnText="Get Schedule 365 Demo"
                                        trailbtnText="Start your 14-Day Free Trial"
                                        className="head_btn"
                                    />
                                </div>

                                <div className="hero-features">
                                    {features.map((feature) => (
                                        <span key={feature} className="feature-pill">
                                            <CheckIcon />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <G2Badge />

                    <section className="sharepoint-store">
                        <div className="sharepoint-container">
                            <div className="sharepoint-header">
                                <h2 className='HR_heading'>
                                    SharePoint Stores Contracts. CLM 365 Simplifies with AI
                                </h2>

                                <p>
                                    Many teams already store contracts in SharePoint. But storage
                                    alone doesn't solve contract management.
                                </p>
                            </div>

                            <div className="sharepoint-content">
                                <div className="sharepoint-left">
                                    {challenges.map((item, index) => (
                                        <div className="challenge-card" key={index}>
                                            <div className="challenge-icon">
                                                <div className="pain-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
                                            </div>

                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="sharepoint-right">
                                    <h3>
                                        CLM 365 Adds the Structure, AI, and Automation Your
                                        Contracts Need
                                    </h3>

                                    <p>
                                        Instead of SharePoint as a storage location, CLM 365 adds
                                        metadata, AI extraction, approval workflows, renewal alerts,
                                        obligation tracking, and secure collaboration.
                                    </p>

                                    <ul>
                                        {solutions.map((item, index) => (
                                            <li key={index}>
                                                <div className="solution-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='HowtoworkBtn' >
                                        <DemoButtons LMS365="LMS365"
                                            demobtnText="See How It Works" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="Meet_AI">
                        <div className="Meet_AI_Container">
                            <div className="sharepoint-header">
                                <h2 className='HR_heading'>
                                    Meet CLM AI Agent
                                </h2>

                                <p>
                                    <strong>Your Intelligent Contract Assistant Inside Microsoft 365</strong><br />
                                    Built into SharePoint Contract Management, CLM AI Agent helps legal, procurement, and business teams review contracts, search agreements, explain clauses, summarize documents, and retrieve contract information using natural language all without leaving Microsoft 365. Whether you’re reviewing a new agreement or searching your contract repository, simply ask a question and get instant, context-aware answers powered by Agentic AI.
                                </p>
                            </div>
                            <div className="sharepoint-content">
                                <div className="content-left">
                                    <h3 className="Agent-heading">AI Agent Capabilities</h3>
                                    {AI_steps.map((item, index) => (
                                        <p key={index}>
                                            <span><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                <div className="content-right">
                                    <div className="tab-image">
                                        <img
                                            src="https://ik.imagekit.io/apps365/Lp-pages/CLM-agent-image.avif"
                                            alt="CLM Agent"
                                            onClick={() => setShowModal(true)}
                                        />

                                        <div
                                            className="expand-icon"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <FaExpand />
                                        </div>
                                    </div>
                                </div>

                                {showModal && (
                                    <div
                                        className="image-modal"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span
                                            className="close-modal"
                                            onClick={() => setShowModal(false)}
                                        >
                                            ✕
                                        </span>

                                        <img
                                            src="https://ik.imagekit.io/apps365/Lp-pages/CLM-agent-image.avif"
                                            alt="CLM Agent"
                                            className="modal-image"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="HR_PrimaryButton">
                                <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "40px" }}>
                                    <DemoButtons LMS365="LMS365"
                                        demobtnText="See CLM 365 in Action" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div>
                        <TabsWithImage tabs={tabs} />
                    </div>

                    <div className="why-choose-container">
                        <div className="sharepoint-header">
                            <h2 className='HR_heading'>
                                Why Choose SharePoint for Contract Management?
                            </h2>

                            <p>
                                Stop Managing Contracts Across Multiple Systems. CLM 365 keeps every contract in your Microsoft 365 tenant, bringing together a secure contract repository, approval workflows and Microsoft 365 capabilities in one connected platform.
                            </p>
                        </div>
                        <div className="why-choose-boxs">
                            {Boxs.map((data, index) => (
                                <div className='boxs' key={index}>
                                    <img decoding="async" src={data.image} title="" alt="clm" loading="lazy" />
                                    <p>{data.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="features" className="IdChanges"></div>
                    <section className="contract-end-to-end">
                        <div className="contract-container">
                            <div className="contract-heading">
                                <h2 className='HR_heading'>Everything You Need to Manage Contracts with Clarity and Control</h2>

                                <p>
                                    Built inside Microsoft 365 to centralize contracts, automate workflows, redlining and manage the complete contract lifecycle without leaving SharePoint, Teams or Outlook
                                </p>
                            </div>

                            <div className="contract-grid">
                                {featuresEndtoEnd.map((item, index) => (
                                    <div className="contract-card" key={index}>
                                        <div className="contract-icon">
                                            {typeof item.icon === "string" ? (
                                                <img src={item.icon} alt={item.title} />
                                            ) : (
                                                item.icon
                                            )}
                                        </div>

                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <OverviewLPCLM365 MainHeading="Microsoft 365 Contract Management — MS Teams, SharePoint, Outlook, Copilot & Agentic AI Built into CLM 365" />
                </div>

                <div className='work-section'>
                    <div className="sharepoint-header">
                        <h2 className='HR_heading'>
                            How SharePoint Contract Management Works?
                        </h2>

                        <p>
                            CLM 365 brings every stage of contract management together in one connected workflow from contract organization and approvals to AI-assisted review, obligation tracking and renewal management all within Microsoft 365 environment.
                        </p>
                    </div>
                    <div className='work-info'>
                        {workBoxs.map((item, index) => (
                            <div className='work-box' key={index}>
                                <img decoding="async" src={item.image} title="" alt="" loading="lazy"></img>
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="comparison" className="IdChanges"></div>
                <ComparisonSection />

                <div id="client" className="IdChanges"></div>
                <div className='HR_whitesection'>
                    <h2 className='HR_heading HR_MT'>Our Clients</h2>
                    <div className='HR_MT'>
                        <CLMClient />
                    </div>

                    <section className="m365-section">
                        <div className="m365-container">
                            <h2 className="HR_heading">
                                Built for Your Microsoft 365 Ecosystem
                            </h2>

                            <p className="m365-subtitle">
                                Works inside SharePoint, Teams and Outlook without switching tools.
                            </p>

                            <div className="m365-grid">
                                {dataIntegration.map((item, index) => (
                                    <div className="m365-card" key={index}>
                                        <div className="m365-icon-wrap">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="m365-icon"
                                            />
                                        </div>

                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div id="integration" className="IdChangesIntegration"></div>
                <div className='cybersection'>
                    <CyberSecurity />
                </div>
                <div className="IdChangesIntegration"></div>

                <CustomerSupport />

                <div className='HR_MT HR_whitesection'>
                    <div className="HR_MT">
                        <div>
                            <h2 className='HR_heading HR_MT' id="pricing">CLM 365 - Contract Management Plans</h2>
                            <Plans plans={planData} isStandardPlan={false} appName="CLM 365 - Contract Management" />
                        </div>
                    </div>
                </div>

                <Azuer userCount={"50+"} />
                <span className='privacytext'></span>

                <section className="manage-footer-content">
                    <div className="manage-footer-container">
                        <h2 className="manage-footer-title">
                            Ready to Manage Contracts Inside SharePoint?
                        </h2>

                        <p className="manage-footer-description">
                            Move from scattered contract files to a structured, AI-powered
                            contract management platform — built inside Microsoft 365.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", padding: "2vw 0vw" }}>
                            <DemoButtons
                                isreverse={true}
                                demobtnText="Book a CLM 365 Demo"
                                trailbtnText="Talk to Sales"
                            />
                        </div>
                    </div>
                </section>

                <div id="faq" className="IdChangesIntegration"></div>
                <div className='HR_FAQ'>
                    <div>
                        <h3 className='HR_faq'>Frequently Asked Questions</h3>
                        <Accordion items={accordionItems} />
                    </div>
                </div>

                <GlobalFooter />
            </HelmetProvider>
        </>
    );
}

export default LPCLM365;