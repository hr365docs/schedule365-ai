import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../Utiilities/ScrolltoTop'
import { MyContext } from '../../App'

const Termandcondition = () => {
  const AppName = useContext(MyContext);

  return (
    <>
      <ScrollToTop />
      <Header />

      <div className='privacy HR_panel'>
        <div className='Terms-Conditions'>
          <div className='termsandConditions'>
            <h1>Terms & Conditions</h1>
            <p>
              Our Terms & Conditions are carefully crafted with transparency and fairness at their heart.
              They define how we work together, ensuring expectations are set with honesty and clarity.
              By outlining rights, responsibilities, and commitments, they are designed to protect you
              while creating a safe and trusted environment.
            </p>
            <p>
              More than just legal text, our Terms & Conditions represent a mutual understanding,
              building a foundation of trust, respect, and accountability in every interaction.
            </p>
          </div>

          <div>
            <img
              src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Terms-and-Conditions_3TAMB_LJQ.png"
              alt="Terms & Conditions"
            />
          </div>
        </div>

        <h2>Preventive Maintenance</h2>
<p>
  As some of our applications and services are mission-critical for the business,
  we monitor the health of servers using advanced tools to ensure maximum uptime.
</p>

<h2>Ticket Management System</h2>
<p>
  Customers can create tickets either by calling the support phone number
  or through the support email ID. Once a ticket is created, the Support Supervisor
  assigns the ticket to a Support Engineer for immediate resolution.
</p>

<h2>Incident Management System</h2>
<p>
  The Incident Management System is managed by ITIL-certified professionals
  with defined severities according to the nature of the incident.
</p>

<p>
  <strong>Severity Critical (A):</strong> Response time within 1 hour of the ticket raised.
  (Available with Premium Support add-on. To purchase Premium Support, please mail to ist@cubiclogic.com)
</p>

<p>
  <strong>Severity Urgent (B):</strong> Response time within 4 business hours of the ticket raised.
  (Available with Premium Support add-on. To purchase Premium Support, please mail to ist@cubiclogic.com)
</p>

<p>
  <strong>Severity Important (C):</strong> Response time within 8 business hours of the ticket raised.
  (Available as Standard Support bundled with applications wherever applicable.)
</p>

<p>
  <strong>Severity Monitoring (D):</strong> The incident can be moved into monitoring severity
  after resolving the issue. Complete documentation of the incident, from problem description
  and cause to resolution, is sent to the customer upon successful resolution.
</p>

<p>
  Severity A is defined where the entire organization is impacted and users are not productive.
  Severity B is defined where part of the users are impacted or senior management/decision-makers
  are unable to perform actions. Severity C is used in cases of performance issues, features not
  working as expected, or some users being impacted.
</p>

<p>
  Severity D is primarily used for monitoring purposes once the issue is resolved.
</p>

<h2>Root Cause Analysis</h2>
<p>
  Upon successful resolution of the incident, root cause analysis is optionally offered on demand.
</p>

<h2>Warranty and Refund Policy</h2>

<p><strong>DISCLAIMER OF WARRANTY</strong></p>

<p>
  The application is licensed “as is,” “with all faults,” and “as available.”
  You bear the entire risk as to its quality, safety, comfort, and performance.
  Should it prove defective, you assume the entire cost of all necessary servicing or repair.
  Apps 365, on behalf of itself, Microsoft, wireless carriers over whose network the application
  is provided, and each of its respective affiliates, vendors, agents, and suppliers
  (“Covered Parties”), gives no express warranties, guarantees, or conditions in relation
  to the application.
</p>

<p>
  You may have additional consumer rights under your local laws that this agreement cannot change.
  To the extent permitted under your local laws, Covered Parties exclude any implied warranties
  or conditions, including merchantability, fitness for a particular purpose, safety,
  comfort, and non-infringement.
</p>

<p>
  If your local laws impose a warranty, guarantee, or condition even though these terms do not,
  its duration is limited to 14 days from when you download the application.
  Apps 365 warrants that the software will materially conform to the accompanying documentation
  for a period of 14 days from the date of initial download.
</p>

<p>
  At Apps 365, the customer will only be able to claim a refund if it has been raised
  within 14 days from the date of initial download, only under the following circumstances:
</p>

<ol>
  <li>
    If the software or features you have purchased are not working as advertised on the
    website/marketplace and you have attempted to resolve the issues with our support team.
  </li>
  <li>
    You have purchased the wrong license or Apps 365 product and informed us within
    10 days from your purchase.
  </li>
</ol>

<p>The customer is not eligible for a refund under the following circumstances:</p>

<ol>
  <li>The software is not used in accordance with Apps 365’s instructions.</li>
  <li>
    The software defect has been caused by malfunctioning customer equipment,
    unavailability of Microsoft 365 services required to run the application,
    or customer-provided software.
  </li>
  <li>
    The customer has made modifications to the software not expressly authorized in writing by Apps 365.
  </li>
  <li>The software is not working due to customer environmental changes.</li>
  <li>The software has been combined with other products.</li>
  <li>
    The customer no longer requires the software after purchase or changes their requirements.
  </li>
  <li>
    The customer willingly purchased the software after taking a demo/trial from the Apps 365 team.
  </li>
</ol>

      </div>

      <Footer />
    </>
  )
}

export default Termandcondition