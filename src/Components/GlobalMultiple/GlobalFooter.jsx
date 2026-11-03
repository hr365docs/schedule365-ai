import React from 'react';
import './GlobalFooter.css';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const GlobalFooter = () => {
  return (
    <footer className="site-footer">
      {/* Top Main Section */}
      <div className="footer-top-container">
        {/* Column 1: HR */}
        <div className="footer-column">
          <h3 className="footer-heading">HR</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-hr-management/" className="footer-link">HRMS</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-recruitment-management-365/" className="footer-link">Recruitment Management 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-employee-onboarding-365/" className="footer-link">Employee Onboarding 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-lms-365/" className="footer-link">Learning Management System 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-employee-directory-365/" className="footer-link">Employee Directory 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-time-tracking-timesheet-365/" className="footer-link">Timesheet 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-time-off-manager-365/" className="footer-link">Time off Manager 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-expense-tracker-365/" className="footer-link">Expense 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-performance-management-365/" className="footer-link">Performance Management 365</a>
            </li>
          </ul>
        </div>

        {/* Column 2: IT, Business, Govt */}
        <div className="footer-column">
          <h3 className="footer-heading">IT</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-helpdesk-365/" className="footer-link">Helpdesk 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-asset-management-365/" className="footer-link">Asset 365</a>
            </li>
          </ul>

          <h3 className="footer-heading footer-heading-spaced">Business</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-contract-management-clm-365/" className="footer-link">CLM 365 Contract Management</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-task-management-365" className="footer-link">Task 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/sharepoint-expense-tracker-365/" className="footer-link">Expense 365</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/revenue-management-system/" className="footer-link">Revenue 365</a>
            </li>
          </ul>

          <h3 className="footer-heading footer-heading-spaced">Govt</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://www.apps365.com/government-crm-citizen-software-civic-365/" className="footer-link">Civic 365</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer & Company */}
        <div className="footer-column">
          <h3 className="footer-heading">Customer</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://www.apps365.com/blog/" className="footer-link">Blogs</a>
            </li>
            <li className="footer-list-item">
              <a href="https://kb.hr365.us/" className="footer-link" target="_blank" rel="noopener noreferrer">Knowledgebase</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/support/" className="footer-link">Support</a>
            </li>
          </ul>

          <h3 className="footer-heading footer-heading-spaced">Company</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="https://www.apps365.com/about-us/" className="footer-link">About Us</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/career/" className="footer-link">Career</a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.apps365.com/find-a-partner/" className="footer-link">Partner</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Locations */}
        <div className="footer-column">
          <h3 className="footer-heading">USA</h3>
          <p className="footer-address-text">8, The Green, #11736</p>
          <p className="footer-address-text">Dover, DE – 19901</p>

          <h3 className="footer-heading footer-heading-spaced">Canada</h3>
          <p className="footer-address-text">325, Front St W, #300, Toronto,</p>
          <p className="footer-address-text">ON – M5V 2Y1</p>

          <h3 className="footer-heading footer-heading-spaced">UAE</h3>
          <p className="footer-address-text">PO Box 342001</p>
          <p className="footer-address-text">IFZA Business Park, Dubai</p>
        </div>

        {/* Column 5: Branding & Tagline */}
        <div className="footer-column footer-column-wide">
          <div className="footer-brand-container">
            <a href="https://www.apps365.com">
              <img src="https://ik.imagekit.io/apps365/Lp-pages/CLM365.ai.%20white.png" alt="Apps365" loading="lazy" className="footer-logo-img" />
            </a>
          </div>
          <p className="footer-tagline">
            In a world of endless possibilities, we enable people &amp; organizations to succeed with our
            innovative solutions by blending automation, people, process &amp; security 365 days.
          </p>
        </div>
      </div>

      {/* Middle Badges Section */}
      <div className="footer-badge-section">
        {/* Compliance Badges Group */}
        <div className="footer-badge-group">
          <img src="https://ik.imagekit.io/cubiclogics/Badge/Aicpa-SOC.webp?updatedAt=1765785480467" alt="AICPA SOC" className="footer-badge-img" />
          <img src="https://ik.imagekit.io/cubiclogics/Badge/SOC-2.png" alt="SOC 2 Compliant" className="footer-badge-img" />
          <img src="https://ik.imagekit.io/cubiclogics/Badge/ISO.webp" alt="ISO 27001" className="footer-badge-img" />
          <img src="https://ik.imagekit.io/cubiclogics/Badge/Certified.png" alt="Microsoft Certified" className="footer-badge-img" />
        </div>

        <div className="footer-divider" />

        {/* G2 Awards Group */}
        <div className="footer-badge-group">
          <img src="https://ik.imagekit.io/cubiclogics/New%20badges/roi.png" alt="G2 Best ROI" className="footer-badge-img" />
          <img src="https://ik.imagekit.io/cubiclogics/New%20badges/Momentum.png" alt="G2 Momentum" className="footer-badge-img" />
          <img src="https://ik.imagekit.io/cubiclogics/New%20badges/Support.png" alt="G2 Best Support" className="footer-badge-img" />
        </div>

        <div className="footer-divider" />

        {/* Marketplace & Certification Group */}
        <div className="footer-badge-group">
          <img src="https://ik.imagekit.io/cubiclogics/Badge/Available.png" alt="Microsoft Azure Marketplace" className="footer-badge-img-wide" />
          <img src="https://ik.imagekit.io/cubiclogics/Badge/Great-Place-To-Work-image_Size.png" alt="Great Place to Work" className="footer-badge-img" />
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="footer-bottom-bar">
        {/* <p className="footer-copyright">
          © 2026 – Apps365. SLA. T&amp;C. EULA. Privacy Policy. DPA. Terms of Use. Cubic Logics.
        </p> */}
        <p className="footer-copyright">
          © 2026 –{" "}
          <a href="https://www.apps365.com/">Apps365</a>.{" "}
          <a href="https://www.apps365.com/trust-center/service-level-agreement/">SLA</a>.{" "}
          <a href="https://www.apps365.com/terms-and-conditions/">T&amp;C</a>.{" "}
          <a href="https://www.apps365.com/trust-center/terms-of-service-and-end-user-license-agreement-eula/">EULA</a>.{" "}
          <a href="https://www.apps365.com/trust-center/privacy-policy/">Privacy Policy</a>.{" "}
          <a href="https://www.apps365.com/trust-center/data-processing-addendum/">DPA</a>.{" "}
          <a href="https://www.apps365.com/trust-center/website-terms-of-use/">Terms of Use</a>.{" "}
          <a href="https://www.cubiclogics.com/">Cubic Logics</a>.
        </p>

        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/cubiclogics/"
            className="footer-icon-circle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/company/cubiclogics/"
            className="footer-icon-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/cubiclogics"
            className="footer-icon-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/cubic.logics/"
            className="footer-icon-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@hr365"
            className="footer-icon-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;