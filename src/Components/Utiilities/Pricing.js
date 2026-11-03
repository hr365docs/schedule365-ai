import React from 'react'
import Plans from './Plans';

export default function Pricing() {
    const planData = [
        {
          name: "Standard",
          price: "$79",
          sup: "99",
          text: "Standard Plan Features",
          textY: "per month, billed yearly",
          features: [
            "10 users",
            "2 support tickets per annum",
            "Free updates via MS store",
            "Integrates with Office 365",
            "SharePoint app only",
            "Data stays in SharePoint",
            "Multiple roles",
          ],
        },
        {
          name: "Plus",
          price: "$149",
          sup: "99",
          textY: "per month, billed yearly",
          text: "Everything in Standard and...",
          features: [
            "25 users",
            "4 support tickets per annum",
            "Free updates with support",
            "KRA Categories",
            "Custom Logo",
            "5 Point rating scale",
            "Notifications",
            "Multiple departments & groups",
            "Multiple appraisal cycles",
          ],
        },
        {
          name: "Premium",
          price: "$249",
          sup: "99",
          textY: "per month, billed yearly",
          text: "Everything in Plus, and...",
          features: [
            "40 users",
            "Additional users at $1.5/user",
            "Unlimited support tickets",
            "Microsoft Teams App",
            "Self-Review",
            "KRA bank",
            "KRA templates",
            "Weighted rating option",
            "Dashboard - Performance Analytics",
            "Rating to verbatims",
            "360 degree feedback module",
            "1:1 meeting tracker Module",
            "Smart notifications",
          ],
        },
        {
          name: "Enterprise",
          price: "$329",
          sup: "99",
          textY: "per month, billed yearly",
          text: "Everything in Premium and...",
          features: [
            "50 Users",
            "Additional users at $2/user",
            "Multiple Reviewers",
            "9 point enterprise rating scale",
            "Multiple rating scales options",
            "Collaboration timelines",
            "Dashboard - Org analytics",
            "1:1 Meetings on Calendar",
            "Customizable email notifications",
            "Customize with Power Automate",
            "Power BI & Power Apps Integration",
            "Dedicated Account Manager",
            "Integration with KRAs",
            "One free customization*",
          ],
        },
      ];
  return (
    <div className="HR_MT">
            <div>
              <Plans plans={planData}/>
            </div>
          </div>
  )
}
