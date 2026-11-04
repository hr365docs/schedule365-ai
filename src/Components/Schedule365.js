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
import OverviewSchedule365 from './GlobalMultiple/OverviewSchedule365';
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

function Schedule365() {
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
            title: "AI Availability Engine",
            desc: "Instantly analyze cross-calendar availability using AI to detect openings, optimize buffer gaps, and resolve conflicts for rapid scheduling decisions.",
            icon: (
                <div className="feature-icon fi-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </div>
            )
        },
        {
            title: "Conflict & Overlap Shield",
            desc: "Automatically detect double bookings, conflicting holds, and overlapping time slots across all connected calendars before any meeting is confirmed.",
            icon: (
                <div className="feature-icon fi-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </div>
            )
        },
        {
            title: "Autonomous Meeting Agent",
            desc: "Extract attendee intent, preferred durations, time zones, and scheduling requests straight from incoming emails and chats automatically.",
            icon: (
                <div className="feature-icon fi-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                </div>
            )
        },
        {
            title: "Smart Round-Robin Routing",
            desc: "Streamline team booking distributions with structured round-robin and collective logic that balances rep workloads and boosts pipeline speed.",
            icon: (
                <div className="feature-icon fi-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                </div>
            )
        },
        {
            title: "Frictionless Booking Pages",
            desc: "Accelerate conversions with branded booking pages, pre-configured event durations, and dynamic intake qualification forms.",
            icon: (
                <div className="feature-icon fi-gold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                </div>
            )
        },
        {
            title: "Native Microsoft 365 Sync",
            desc: "Store every event, conference room booking, and calendar entry directly inside your Microsoft tenant with enterprise-grade access and security.",
            icon: (
                <div className="feature-icon fi-navy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </div>
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
            title: '1. Can Microsoft 365 and Outlook be used for automated scheduling?',
            content: `Yes. Microsoft 365 and Outlook provide calendar infrastructure, but Schedule 365 enhances them with autonomous AI agents, personalized booking links, team round-robin routing, conflict shields, and automatic Teams meeting link generation into a complete enterprise scheduling platform.`
        },
        {
            title: '2. How does Schedule 365 help manage meetings on the go?',
            content: `Schedule 365 works directly inside Outlook Mobile and Microsoft Teams apps on iOS and Android. Team members and organizers can review incoming bookings, adjust availability, or reschedule meetings anytime without opening separate external tools.`
        },
        {
            title: '3. Is Schedule 365 built natively on Microsoft 365?',
            content: `Yes. Schedule 365 is designed specifically for organizations using Microsoft 365, Outlook, and Teams. It operates natively inside your existing Microsoft tenant without requiring third-party calendar servers.`
        },
        {
            title: '4. How does Schedule 365 integrate with other Microsoft products?',
            content: `Schedule 365 connects bi-directionally with Outlook calendars, Microsoft Teams meetings and rooms, Microsoft Copilot, Power Automate, and Dynamics 365 via Microsoft Graph API for unified enterprise scheduling workflows.`
        },
        {
            title: '5. Does Schedule 365 include an autonomous AI Agent?',
            content: `Yes. Schedule 365 features an intelligent AI agent that understands natural language email requests, identifies mutually open time slots across different time zones, drafts replies, and confirms bookings automatically.`
        },
        {
            title: '6. Can Schedule 365 send automated meeting reminders and reduce no-shows?',
            content: `Yes. Automated confirmation emails, calendar invites, and customizable pre-meeting reminder notifications are sent to attendees directly from your own corporate domain via Outlook and Teams.`
        },
        {
            title: '7. Who should use Schedule 365 intelligent scheduling software?',
            content: `Schedule 365 is built for sales, recruitment, customer success, executive management, and IT teams that need automated meeting orchestration without compromising enterprise Microsoft governance.`
        },
        {
            title: '8. How does Schedule 365 prevent double bookings and calendar conflicts?',
            content: `Schedule 365 checks real-time availability across internal calendars, resource mailboxes, and focus-time holds. It applies customizable buffer times between appointments to eliminate overlapping bookings.`
        },
        {
            title: '9. Can I build custom scheduling workflows without coding?',
            content: `Yes. Schedule 365 integrates with Microsoft Power Automate, allowing you to trigger post-meeting follow-ups, sync attendee details with your CRM, and update team channels without writing code.`
        },
        {
            title: '10. How is data security and compliance handled in Schedule 365?',
            content: `Schedule 365 uses tenant-bound security where all meeting data and calendar metadata remain inside your Microsoft 365 environment. It inherits your Entra ID (Azure AD) SSO, role-based access, and Purview audit logging.`
        },
        {
            title: '11. Does Schedule 365 store our calendar and attendee data externally?',
            content: `No. Schedule 365 operates within your existing Microsoft 365 boundary. Meeting records, attendee emails, and calendar entries remain in your Exchange and Outlook systems, eliminating third-party data silos.`
        },
        {
            title: '12. Does Schedule 365 work with Microsoft Copilot?',
            content: `Yes. Schedule 365 is Copilot-ready. You can prompt Microsoft Copilot in natural language to check team availability, schedule cross-departmental syncs, and summarize upcoming meetings directly inside your workflow.`
        },
        {
            title: '13. Is our calendar data sent to public AI services like ChatGPT?',
            content: `No. Schedule 365 does not transmit calendar or attendee data to public AI models. All AI tasks utilize secure enterprise models, such as Azure OpenAI, governed strictly by your corporate data protection policies.`
        },
        {
            title: '14. Can Schedule 365 route meetings via Round-Robin and Collective Panels?',
            content: `Yes. You can route inbound prospect calls evenly among sales representatives using smart round-robin rules, or schedule collective panel interviews where every required host must be mutually available.`
        },
        {
            title: '15. Which currency are the prices listed in?',
            content: isFromIndia
                ? 'All prices are listed in INR.'
                : 'All prices are listed in USD.'
        }
    ];

    const tabs = [
        {
            id: 6,
            title: 'AI Powered',
            Heading: 'Simplify Enterprise Scheduling With AI',
            content: (
                <ul>
                    <li>Use natural language AI agents to find mutual availability and book meetings instantly.</li>
                    <li>Let AI scan multi-attendee schedules across time zones to eliminate scheduling friction.</li>
                    <li>Coordinate, reschedule, and approve calendar bookings directly within Outlook and Teams.</li>
                    <li>Leverage Microsoft Copilot AI to draft invites, summarize agendas, and resolve conflicts.</li>
                    <li id='Comparison'>Group multi-host panels and collective round-robins under unified booking workflows.</li>
                    <li>Autonomous calendar rebalancing prioritizes high-impact meetings and protects focus hours.</li>
                    <li>Intelligent attendee intent detection suggests ideal meeting durations and appropriate formats.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM-ai-image.png'
        },
        {
            id: 1,
            title: 'Microsoft Ecosystem',
            Heading: 'Effortless Integration with Microsoft Ecosystem: Schedule 365 System',
            content: (
                <ul>
                    <li>Maximize your existing Microsoft ecosystem with native Schedule 365 calendar intelligence.</li>
                    <li>Intuitive, cloud-based scheduling built for Microsoft 365 to elevate workplace productivity.</li>
                    <li>Deploys as a native Microsoft Teams and Outlook add-in for centralized meeting management.</li>
                    <li>Bi-directional real-time synchronization with Outlook calendars prevents double bookings.</li>
                    <li>Automate post-meeting workflows with direct Microsoft Power Automate and Graph connectors.</li>
                    <li>Sync physical meeting room resources and equipment directly via Microsoft Exchange assets.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM%202.webp'
        },
        {
            id: 2,
            title: 'Scheduling Operations',
            Heading: 'Streamlined Meeting Operations: Outlook Schedule 365 App',
            content: (
                <ul>
                    <li>Automate the full meeting lifecycle with dynamic links, Teams video URLs, and room booking.</li>
                    <li>Smart round-robin distribution to route leads and client calls to the right team members.</li>
                    <li>Automated calendar holds, customizable buffer times, and instant reschedule handling.</li>
                    <li>Real-time notifications, attendee reminders, and status updates directly in Microsoft Teams.</li>
                    <li>Manage availability windows, maximum daily meeting caps, and focus-time locks effortlessly.</li>
                    <li>Custom routing logic routes VIP prospects to senior account reps based on form responses.</li>
                    <li>Centralized administrative overrides allow managers to reassign bookings during team leaves.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM%203.webp'
        },
        {
            id: 3,
            title: 'User-centered',
            Heading: 'User-centered Approach to Schedule 365 Tool Design',
            content: (
                <ul>
                    <li>Built with Microsoft Fluent UI for a consistent, seamless experience with zero learning curve.</li>
                    <li>Frictionless booking pages branded with custom themes, logos, and custom domain links.</li>
                    <li>Smart timezone detection automatically displays local times for all external attendees.</li>
                    <li>Customizable booking forms collect attendee details and qualifications prior to confirmation.</li>
                    <li>One-click quick reschedule buttons let guests adjust meetings without login requirements.</li>
                    <li>Responsive multi-language localization detects attendee browser locale for seamless scheduling.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581'
        },
        {
            id: 4,
            title: 'Meeting Lifecycle',
            Heading: 'End-to-End Meeting Lifecycle Management in Microsoft 365',
            content: (
                <ul>
                    <li>Orchestrate every phase from booking request and attendee qualification to post-call follow-ups.</li>
                    <li>Centralize scheduling links, collective hosts, custom questions, and analytics in Microsoft 365.</li>
                    <li>Automate pre-meeting agendas, attendee reminders, and post-meeting follow-up workflows.</li>
                    <li>Capture pre-meeting intake notes directly into associated CRM and SharePoint meeting cards.</li>
                    <li>Generate comprehensive no-show tracking, attendance logs, and cancellation reason reports.</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/CLM%203.webp'
        },
        {
            id: 5,
            title: 'Security',
            Heading: 'Enterprise-Grade Security and Compliance: Schedule 365 Software',
            content: (
                <ul>
                    <li>Tenant-Bound Architecture (Zero Third-Party Data Storage)</li>
                    <li>Role-Based Access Control and Granular Admin Permissions</li>
                    <li>Comprehensive Audit Trails for All Scheduled Events</li>
                    <li>OAuth 2.0 and Single Sign-On (SSO) via Microsoft Entra ID</li>
                    <li>Automated No-Show Tracking and AI-Driven Notifications</li>
                    <li>Strict Enterprise Privacy and Global Compliance Standards</li>
                    <li>Automated Secure Microsoft Teams Meeting Links</li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581'
        },
    ];

    const Boxs = [
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/No%20duplicate%20document%20repositories.svg",
            text: "No external calendar silos"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Role%20based%20permissions.svg",
            text: "Role-based access permissions"
        },
        {
            image: "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Teams%20&%20Outlook%20integration.svg",
            text: "Native Teams & Outlook sync"
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
            text: "Centralized meeting governance"
        },
    ];

    const workBoxs = [
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Approval-through-Emails.svg?updatedAt=1768997946170",
            heading: "Availability & Booking",
            text: "Sync real-time calendar availability directly within Microsoft 365. Share personalized booking links or route meetings through automated round-robin rules with zero calendar overlap."
        },
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Role-Based%20Security.svg?updatedAt=1768996193300",
            heading: "Smart Conflict Detection",
            text: "Detect potential double-bookings, holiday clashes, and timezone discrepancies across multi-host calendars instantly to confirm meetings without manual back-and-forth."
        },
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/technology.webp?updatedAt=1765798708952",
            heading: "AI Scheduling Assistant",
            text: "AI parses scheduling intent from emails and chats, proposes open time slots, drafts calendar invitations, and coordinates multi-attendee schedules automatically with Microsoft Copilot integration."
        },
        {
            image: "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Operational%20Efficiency.webp?updatedAt=1765803725122",
            heading: "Reminders & Follow-Ups",
            text: "Automate pre-meeting notifications, Microsoft Teams video links, and agenda reminders. Minimize no-shows and seamlessly handle reschedules or cancellations."
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
        "Endless back-and-forth emails finding mutual meeting openings",
        "Double bookings and timezone mismatches confusing clients",
        "Manual follow-ups, rescheduling overhead, and no-shows",
        "Fragmented booking tools that bypass enterprise security",
        "No visibility into cross-team meeting distribution",
    ];

    const solutions = [
        "Native Outlook and Teams bi-directional calendar synchronization",
        "AI-powered meeting agent to negotiate directly via email",
        "Automated round-robin, multi-host, and collective scheduling",
        "Automated booking confirmations, invites, and pre-meeting reminders",
        "Centralized dashboards for team meeting load analytics",
    ];


    const agentCapabilities = [
        "Coordinate meetings using simple natural language prompts",
        "Scan multi-calendar availability across external time zones instantly",
        "Resolve scheduling conflicts and protect focus time automatically",
        "Draft personalized email booking invites and replies",
        "Trigger automated reminders, agenda distribution, and meeting links",
        "Orchestrate complex round-robin and multi-host team routing"
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
                                    <br /> Schedule 365 transforms Microsoft 365 and Outlook into an autonomous, AI-driven scheduling engine. Coordinate internal cross-team syncs, client meetings, and multi-timezone availability without ever leaving your Microsoft ecosystem.
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
                                    Outlook Holds Your Calendar. Schedule 365 Automates It with AI
                                </h2>

                                <p>
                                    Most teams already use Outlook calendars. But having a calendar doesn’t solve enterprise scheduling chaos.
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
                                        Schedule 365 Adds the Intelligence, AI Agents, and Automation Your Calendars Need
                                    </h3>

                                    <p>
                                        Instead of Outlook being a passive viewer, Schedule 365 adds real-time AI negotiation, team round-robin routing, automated conflict handling, and enterprise privacy inside Microsoft 365.
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
                                    Meet Schedule AI Agent
                                </h2>

                                <p>
                                    <strong>Your Intelligent Scheduling Assistant Inside Microsoft 365</strong><br />
                                    Built directly into Microsoft 365, Schedule AI Agent helps sales, hiring, customer success, and executive teams coordinate calendars, resolve double bookings, check real-time availability, and schedule meetings using natural language without leaving Outlook or Teams. Whether coordinating cross-timezone client syncs or scheduling multi-attendee reviews, simply ask in plain English and let autonomous Agentic AI handle the entire workflow.
                                </p>
                            </div>
                            <div className="sharepoint-content">
                                <div className="content-left">
                                    <h3 className="Agent-heading">AI Agent Capabilities</h3>
                                    {agentCapabilities.map((item, index) => (
                                        <p key={index}>
                                            <span><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                <div className="content-right">
                                    <div className="tab-image">
                                        <img
                                            src="https://ik.imagekit.io/apps365/Lp-pages/Schedule365%20AI%20Agent.webp"
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
                                            src="https://ik.imagekit.io/apps365/Lp-pages/Schedule365%20AI%20Agent.webp"
                                            alt="CLM Agent"
                                            className="modal-image"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                )}
                            </div>

                        </div>
                    </section>

                    <div>
                        <TabsWithImage tabs={tabs} />
                    </div>

                    <div className="why-choose-container">
                        <div className="sharepoint-header">
                            <h2 className='HR_heading'>
                                Why Choose Microsoft 365 for Smart Scheduling?
                            </h2>

                            <p>
                                Stop Managing Appointments Across Disconnected Third-Party Systems. Schedule 365 keeps every meeting, invite, and calendar entry secure inside your Microsoft 365 tenant, combining native Outlook integration, Teams automation, and enterprise governance into one unified platform.
                            </p>
                        </div>
                        <div className="why-choose-boxs">
                            {Boxs.map((data, index) => (
                                <div className='boxs' key={index}>
                                    <img decoding="async" src={data.image} title="" alt="schedule365" loading="lazy" />
                                    <p>{data.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="features" className="IdChanges"></div>
                    <section className="contract-end-to-end">
                        <div className="contract-container">
                            <div className="contract-heading">
                                <h2 className='HR_heading'>
                                    Everything You Need to Orchestrate Meetings with Clarity and Control
                                </h2>

                                <p>
                                    Built inside Microsoft 365 to centralize availability, automate meeting workflows, and manage the complete scheduling lifecycle without leaving Outlook or Teams.
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

                    <OverviewSchedule365 MainHeading="Microsoft 365 Meeting Scheduling — MS Teams, Outlook, Copilot & Agentic AI Built into Schedule 365" />
                </div>

                <div className='work-section'>
                    <div className="sharepoint-header">
                        <h2 className='HR_heading'>
                            How Schedule 365 Intelligent Scheduling Works?
                        </h2>

                        <p>
                            Schedule 365 unifies every stage of meeting orchestration into one seamless workflow—from real-time calendar availability and team routing to AI-driven negotiation, reminder automation, and post-meeting follow-ups, all natively within your Microsoft 365 environment.
                        </p>
                    </div>
                    <div className='work-info'>
                        {workBoxs.map((item, index) => (
                            <div className='work-box' key={index}>
                                <img decoding="async" src={item.image} title={item.heading} alt={item.heading} loading="lazy" />
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="comparison" className="IdChanges"></div>
                <ComparisonSection />

                {/* <div id="client" className="IdChanges"></div> */}
                {/* <div className='HR_whitesection'>
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
                </div> */}

                <div id="integration" className="IdChangesIntegration"></div>
                <div className='cybersection'>
                    <CyberSecurity />
                </div>
                <div className="IdChangesIntegration"></div>

                <CustomerSupport />

                {/* <div className='HR_MT HR_whitesection'>
                    <div className="HR_MT">
                        <div>
                            <h2 className='HR_heading HR_MT' id="pricing">CLM 365 - Contract Management Plans</h2>
                            <Plans plans={planData} isStandardPlan={false} appName="CLM 365 - Contract Management" />
                        </div>
                    </div>
                </div> */}

                <Azuer userCount={"50+"} />
                <span className='privacytext'></span>

                <section className="manage-footer-content">
                    <div className="manage-footer-container">
                        <h2 className="manage-footer-title">
                            Ready to Automate Scheduling Inside Microsoft 365?
                        </h2>

                        <p className="manage-footer-description">
                            Move from back-and-forth emails and fragmented calendar links to an autonomous, AI-powered meeting orchestration platform — built natively inside Microsoft 365.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", padding: "2vw 0vw" }}>
                            <DemoButtons
                                isreverse={true}
                                demobtnText="Book a Schedule 365 Demo"
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

export default Schedule365;