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
    { id: "features", label: "Scheduling Features" },
];

const panelData = {
    adoption: [
        {
            category: "Learning Curve",
            bad: "New standalone UI and external logins — requires dedicated employee onboarding and change management",
            good: "Natively embedded inside Outlook — uses the email and calendar tools your employees already work in daily",
        },
        {
            category: "Adoption Speed",
            bad: "Weeks or months before cross-department teams actively adopt and link external calendar apps",
            good: "Instant adoption — team members are already signed into their Outlook accounts",
        },
        {
            category: "Team Coordination",
            bad: "Meeting coordination occurs across isolated tools — creating schedule silos and missing calendar holds",
            good: "Schedule and manage meetings directly inside Outlook emails, calendar views, and native drafts",
        },
        {
            category: "Mobile & Remote Access",
            bad: "Requires downloading separate apps and re-authenticating on mobile devices",
            good: "Accessible seamlessly across Outlook Mobile on iOS and Android without separate logins",
        },
    ],
    security: [
        {
            category: "Data Residency",
            bad: "Attendee emails, meeting notes, and calendar metadata leave your tenant to third-party cloud servers",
            good: "All scheduling and calendar data stays completely inside your Outlook tenant boundary",
        },
        {
            category: "Access & Identity Control",
            bad: "Separate user database and credentials — difficult to synchronize or revoke upon employee offboarding",
            good: "Role-based access powered by Microsoft Entra ID (Azure AD) with instant policy enforcement",
        },
        {
            category: "Audit Logging",
            bad: "Audit logs are siloed in the vendor's private portal — hard to reconcile during compliance audits",
            good: "Full booking and access audit trail natively retained in your Microsoft Purview compliance center",
        },
        {
            category: "Compliance Standards",
            bad: "Vendor compliance certifications vary and frequently conflict with internal data governance",
            good: "Inherits enterprise Microsoft compliance — SOC 2 Type II, ISO 27001, HIPAA, and GDPR ready",
        },
    ],
    integration: [
        {
            category: "Email & Calendar Sync",
            bad: "Relies on periodic API polling or webhooks that result in delay lags and accidental double-bookings",
            good: "Direct Graph API bi-directional synchronization with Outlook — updates availability instantaneously",
        },
        {
            category: "Workflow Automation",
            bad: "Proprietary automation engines with restricted triggers and expensive premium connectors",
            good: "Native Microsoft Power Automate integration — connect to 900+ apps without custom coding",
        },
        {
            category: "Meeting Links & Rooms",
            bad: "Requires manual generation or third-party plugins to insert video links and reserve rooms",
            good: "Generates secure meeting links and reserves Exchange conference rooms automatically",
        },
        {
            category: "CRM & ERP Connectivity",
            bad: "Integration requires middleware, custom zap scripts, and ongoing developer maintenance",
            good: "Connects smoothly with Dynamics 365, Power BI, and enterprise CRMs through native dataflows",
        },
    ],
    cost: [
        {
            category: "Licensing Model",
            bad: "Expensive per-seat monthly subscriptions stacked on top of existing licensing costs",
            good: "Built directly into your existing Outlook environment — eliminate redundant SaaS spend",
        },
        {
            category: "Implementation Cost",
            bad: "High setup overhead — third-party directory syncs, custom domain routing, and IT consultant fees",
            good: "One-click Outlook add-in deployment — zero data migration or third-party infrastructure setup needed",
        },
        {
            category: "IT & Admin Overhead",
            bad: "IT admins must manage another external vendor SLA, security risk assessment, and billing cycle",
            good: "Administered directly through your Microsoft admin center — minimal ongoing IT overhead",
        },
        {
            category: "Enterprise Tier Scaling",
            bad: "Tiered paywalls restrict team round-robin, multi-host, and custom branding behind costly enterprise tiers",
            good: "Complete enterprise scheduling feature set included without hidden tier restrictions",
        },
    ],
    features: [
        {
            category: "AI Scheduling Agents",
            bad: "Basic automated links with no AI context; premium AI agents require expensive higher-tier upgrades",
            good: "Built-in autonomous AI agents parse scheduling intent from Outlook emails and book mutual slots automatically",
        },
        {
            category: "Routing & Distribution",
            bad: "Rigid scheduling rules that cannot factor in real-time attendee workloads or internal calendars",
            good: "Intelligent round-robin, multi-host collective sync, and VIP priority routing configured with ease",
        },
        {
            category: "Reminders & Notifications",
            bad: "Booking notifications delivered from generic third-party domains — frequently caught by spam filters",
            good: "Branded calendar invitations and reminders sent directly from your verified Outlook domain",
        },
        {
            category: "Inbox Search",
            bad: "Siloed booking visibility that cannot coordinate internal resource availability or focus time",
            good: "Outlook search instantly surfaces meeting histories, participant availability, and agendas",
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
          font-family: Assistant;
        }
        .ctab-btn:hover {
          background: linear-gradient(135deg, #1285f5 24%, #2323ce 80%);
          border: 1px solid #3445e8;
          border-radius: 1.5vw;
          color: #fff;
        }
        .ctab-btn.active {
          background: linear-gradient(135deg, #1285f5 24%, #2323ce 80%);
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
          .ctab-btn {
            font-size: 3.2vw;
          }
          .ctab-btn.active {
            border-radius: 40px;
          }
          .badge-label-right {
            font-size: 3.5vw;
          }
          .badge-label-left {
            font-size: 3.5vw;
          }
          .badge-icon {
            width: 8.4vw;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            flex-shrink: 0;
          }
          .cr-category span {
            font-size: 3.5vw;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #000;
            font-family: 'Assistant';
          }
          .cr-text-bad {
            font-size: 3.5vw;
          }
          .cr-text-good {
            font-size: 3.5vw;
          }
        }
      `}</style>

            <div className="compare-section">
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    <h2 className="HR_heading">
                        Native Outlook Schedule 365 vs Standalone Scheduling Apps
                    </h2>

                    <p className="organizationsText">
                        See why enterprise teams choose an Outlook-native intelligent scheduling system over isolated external calendar tools.
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
                            <div className="badge-icon" style={{ background: "#E2E8F0" }}>🔗</div>
                            <span className="badge-label-left">Standalone Scheduling Apps (Calendly, etc.)</span>
                        </div>
                        <div className="col-head-right">
                            <div className="badge-icon" style={{ background: "rgba(0,180,216,0.2)" }}>
                                <span style={{ fontSize: "18px" }}>📅</span>
                            </div>
                            <span className="badge-label-right">Schedule 365 — Microsoft 365 Native</span>
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
                    <DemoButtons
                        demobtnText="See Schedule 365 in Action"
                        trailbtnText="Start 14-Day Free Trial"
                    />
                </div>
            </div>
        </section>
    );
}