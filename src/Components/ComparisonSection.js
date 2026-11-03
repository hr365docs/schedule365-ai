import { useState } from "react";
import DemoButtons from "./Utiilities/DemoButtons";

const colors = {
    navy: "#0B1F3A",
    navy2: "#122742",
    blue: "#1565C0",
    blueL: "#1976D2",
    accent: "#00B4D8",
    accent2: "#0096C7",
    white: "#ffffff",
    gray50: "#F8FAFC",
    gray100: "#EEF2F7",
    gray300: "#CBD5E1",
    gray600: "#64748B",
    gray800: "#1E293B",
};

const tabs = [
    { id: "adoption", label: "User Adoption" },
    { id: "security", label: "Security & Compliance" },
    { id: "integration", label: "Integration" },
    { id: "cost", label: "Cost & IT Overhead" },
    { id: "features", label: "Contract Features" },
];

const panelData = {
    adoption: [
        {
            category: "Learning Curve",
            bad: "New UI and new workflows — requires dedicated training programs and change management",
            good: "Works inside SharePoint, Teams, and Outlook — tools your team already uses every day",
        },
        {
            category: "Adoption Speed",
            bad: "Weeks or months before teams are comfortable and actively using the platform",
            good: "Fast adoption — users are already familiar with the Microsoft 365 environment",
        },
        {
            category: "Collaboration",
            bad: "Contract discussions happen outside the tool — in email or Teams — creating silos",
            good: "Collaborate on contracts directly inside Teams channels and Outlook — no context switching",
        },
        {
            category: "Mobile & Remote Access",
            bad: "Separate login and app required — adds friction for remote or mobile users",
            good: "Accessible anywhere via Microsoft 365 mobile apps — no separate login needed",
        },
    ],
    security: [
        {
            category: "Data Residency",
            bad: "Contract data leaves your environment and is stored on the vendor's third-party servers",
            good: "All contract data stays inside your Microsoft 365 tenant — you own and control it",
        },
        {
            category: "Access Control",
            bad: "Separate user management system — difficult to sync with your existing directory",
            good: "Role-based access powered by Azure Active Directory — consistent with your IT policies",
        },
        {
            category: "Audit Trail",
            bad: "Audit logs stored in a separate system — harder to consolidate for compliance reviews",
            good: "Full audit trail natively logged in Microsoft 365 compliance centre — always audit-ready",
        },
        {
            category: "Compliance Standards",
            bad: "Vendor compliance certifications may not align with your existing governance framework",
            good: "Inherits Microsoft 365 compliance — ISO 27001, SOC 2, GDPR, and government cloud ready",
        },
    ],
    integration: [
        {
            category: "Email & Calendar",
            bad: "Requires custom connectors or paid add-ons to sync with Outlook and calendar reminders",
            good: "Native Outlook integration — renewal alerts, approval notifications, and tasks land in the inbox",
        },
        {
            category: "Workflow Automation",
            bad: "Proprietary automation tools with limited external connections and higher dev costs",
            good: "Built on Power Automate — connect to 900+ apps with pre-built connectors, no custom dev needed",
        },
        {
            category: "Document Management",
            bad: "Contracts must be exported and re-imported when collaborating in Word or other tools",
            good: "Contracts live natively in SharePoint — edit in Word Online with version history always intact",
        },
        {
            category: "CRM & ERP Connectivity",
            bad: "Integration requires middleware, IT time, and often additional licensing fees",
            good: "Connects to Dynamics 365, Salesforce, and SAP through Power Automate with minimal setup",
        },
    ],
    cost: [
        {
            category: "Licensing Model",
            bad: "Separate per-seat SaaS licensing on top of existing Microsoft 365 spend — budget impact doubles",
            good: "Built on your existing Microsoft 365 investment — no redundant platform costs",
        },
        {
            category: "Implementation Cost",
            bad: "High implementation costs — data migration, custom integrations, and consultant fees",
            good: "Deploys inside your existing SharePoint — no data migration or complex infrastructure changes",
        },
        {
            category: "IT & Maintenance",
            bad: "IT must manage another vendor relationship, another set of APIs, and another update cycle",
            good: "Maintained and updated alongside Microsoft 365 — minimal incremental IT overhead",
        },
        {
            category: "Storage Costs",
            bad: "Vendor-managed storage with per-GB pricing or storage tier upgrades as volume grows",
            good: "Contracts stored in SharePoint — you use storage you've already paid for with Microsoft 365",
        },
    ],
    features: [
        {
            category: "AI Capabilities",
            bad: "AI features locked to higher-tier plans — often expensive add-ons requiring upgrades",
            good: "AI contract creation, clause risk detection, obligation extraction, and summaries included",
        },
        {
            category: "Approval Workflows",
            bad: "Workflow builders are proprietary — complex rules require vendor support or developer help",
            good: "Automated multi-stage approvals via Power Automate — configured by your team, not a developer",
        },
        {
            category: "Renewal Tracking",
            bad: "Renewal alerts sent from the vendor's system — often missed or treated as spam",
            good: "Renewal alerts arrive in Outlook from your own domain — trusted, timely, and actionable",
        },
        {
            category: "Search & Retrieval",
            bad: "Siloed search that only covers contracts in the CLM tool — not your wider document library",
            good: "Microsoft 365 Search covers contracts alongside emails, Teams messages, and SharePoint files",
        },
    ],
};

const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2.2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const CheckIcon = ({ color = "#1565C0" }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ChevronIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

export default function ComparisonSection() {
    const [activeTab, setActiveTab] = useState("adoption");
    const rows = panelData[activeTab];

    return (
        <section style={{
            padding: "2.5vw 3%",
            background: "#eff2fb",
            fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        }}>
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .compare-section * { box-sizing: border-box; }

        .ctab-btn {
          padding: 9px 22px;
          border-radius: 40px;
          border: 1.5px solid ${colors.gray300};
          background: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 1.1vw;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-family:Assistant;
        }
        .ctab-btn:hover {
             background: linear-gradient(135deg,#1285f5 24%,#2323ce 80%);
    border: 1px solid #3445e8;
    border-radius: 1.5vw;
    color: #fff;
        }
        .ctab-btn.active {
             background: linear-gradient(135deg,#1285f5 24%,#2323ce 80%);
    border: 1px solid #3445e8;
    border-radius: 1.5vw;
    color: #fff;
        }

        .compare-table {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(11,31,58,0.10);
          width: 100%;
        }

        .col-headers {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .col-head-left {
          background: #F1F5F9;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .col-head-right {
          background: linear-gradient(135deg, #1285f5 24%, #2323ce 80%);
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .badge-icon {
          width: 2.4vw;
    height: 2.4vw;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
        }

        .badge-label-left {
       font-family: 'Assistant';
    font-size: 1.4vw;
    font-weight: 700;
    color: #1E293B;
        }
        .badge-label-right {
    font-size: 1.4vw;
    font-weight: 700;
    color: #fff;
    font-family: 'Assistant';
        }

        .recommended-pill {
          margin-left: auto;
          background: #c10161;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          border-radius: 4px;
          padding: 3px 9px;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: 'Assistant';
        }

        .compare-row-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .compare-row-group:nth-child(even) .cr-right { background: #F0F7FF; }
        .compare-row-group:nth-child(odd) .cr-left { background: #fff; }
        .compare-row-group:nth-child(odd) .cr-right { background: #E8F4FE; }

        .cr-category {
            grid-column: 1 / -1;
    background: #F8FAFC;
    padding: 9px 28px;
    border-top: 1px solid #EEF2F7;
    text-align: left;
        }
        .cr-category span {
    font-size: 1vw;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000;
    font-family: 'Assistant';
        }

        .cr-left, .cr-right {
          padding: 15px 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid rgba(0,0,0,0.05);
          
        }

        .cr-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cr-text-bad {
      font-size: 1.2vw;
    font-family: 'ASSISTANT';
    line-height: 1.5;
    color: #64748B;
    text-align: left;
    
        }
        .cr-text-good {
            font-size: 1.2vw;
    line-height: 1.5;
    color: #0B1F3A;
    font-weight: 500;
    text-align: left;
    font-family: 'ASSISTANT';
        }

        .cta-btn {
          background: ${colors.accent};
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(0,180,216,0.35);
        }
        .cta-btn:hover {
          background: ${colors.accent2};
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(0,180,216,0.5);
        }

        @media (max-width: 768px) {
          .col-headers,
          .compare-row-group {
            grid-template-columns: 1fr;
          }
          .cr-category {
            grid-column: 1;
          }
          .tabs-scroll {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 4px;
          }
          .tabs-inner {
            flex-wrap: wrap !important;
          }
            .ctab-btn{
            font-size:3.2vw;
            }
            .ctab-btn.active{
                border-radius: 40px;
            }
                  .badge-label-right{
    font-size: 3.5vw;
  }
    .badge-label-left{
        font-size: 3.5vw;

    }
        .badge-icon{
            width: 8.4vw;
    /* height: 6.5vw; */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
    }
    .cr-category span{
        font-size: 3.5vw;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000;
    font-family: 'Assistant';
    }
    .cr-text-bad{
        font-size: 3.5vw;
    }
        .cr-text-good{
        font-size: 3.5vw;
        }
        
    }

      `}</style>

            <div className="compare-section">
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "16px" }}>

                    <h2 className="HR_heading">
                        Microsoft Based CLM 365 vs Standalone CLM Application
                    </h2>

                    <p className="organizationsText">
                        See why organizations choose a Microsoft 365-native approach over isolated contract management software.
                    </p>

                </div>

                {/* Tabs */}
                <div className="tabs-scroll" style={{ marginBottom: "40px" }}>
                    <div className="tabs-inner" style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginTop: "32px",
                    }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`ctab-btn${activeTab === tab.id ? " active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="compare-table">
                    {/* Column Headers */}
                    <div className="col-headers">
                        <div className="col-head-left">
                            <div className="badge-icon" style={{ background: "#E2E8F0" }}>🏢</div>
                            <span className="badge-label-left">Standalone CLM Application</span>
                        </div>
                        <div className="col-head-right">
                            <div className="badge-icon" style={{ background: "rgba(0,180,216,0.2)" }}>
                                <img src="https://ik.imagekit.io/cubiclogics/App%20Logos/White-logos/CLM365-White.png" alt="CLM 365" />
                            </div>
                            <span className="badge-label-right">CLM 365 — Microsoft 365 Native</span>
                            <span className="recommended-pill">Recommended</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {rows.map((row, i) => (
                        <div key={i} className="compare-row-group">
                            <div className="cr-category" style={{ gridColumn: "1 / -1" }}>
                                <span>{row.category}</span>
                            </div>
                            <div className="cr-left">
                                <div className="cr-icon"><XIcon /></div>
                                <div className="cr-text-bad">{row.bad}</div>
                            </div>
                            <div className="cr-right">
                                <div className="cr-icon"><CheckIcon /></div>
                                <div className="cr-text-good">{row.good}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "40px" }}>
                    <DemoButtons LMS365="LMS365"
                        demobtnText="See CLM 365 in Action" />
                </div>
            </div>
        </section>
    );
}
