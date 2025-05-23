import document from "../assets/features/document (1).webp";
import communication from "../assets/features/counselor.webp";

function Features() {
  const featureData = [
    {
      title: "Lead Capture",
      description:
        "Tired of chasing leads like a cat chasing a laser pointer? Relax, we’ve got this! Capture leads from your website, social media, and ad campaigns without lifting a finger. Finally, your inbox will stop looking like a bad dating app.",
      listItems: [
        "Multi-Channel Lead Capturing",
        "Dynamic Lead Forms",
        "Real-Time Notifications",
        "Integration with CRM",
        "Lead Scoring",
        "Data Enrichment",
        "Automated Workflows",
        "Analytics and Reporting",
        "Lead Qualification",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2024/03/Precise-Source-Tracking.png",
      id: "Lead-Capture",
    },
    {
      title: "Lead Management",
      description:
        "Managing leads shouldn’t feel like herding cats. With our tools, it’s more like herding… stuffed animals. Search, sort, and prioritize without losing your cool—or your leads.",
      listItems: [
        "Centralized Lead Database",
        "Lead Segmentation",
        "Lead Scoring",
        "Automated Lead Distribution",
        "Multi-Channel Communication",
        "Workflow Automation",
        "Real-Time Notifications",
        "Activity Tracking",
        "Lead Nurturing",
      ],
      imageUrl:
        "https://www.agentlegend.com/hubfs/Imported_Blog_Media/7-Real-Estate-Lead-Lifecycle-Stages-You-Should-Be-Tracking.png",
      id: "Lead-Management",
    },
    {
      title: "Lead Assignment",
      description:
        "Assign leads so smoothly, your team might think you’re some kind of wizard. Whether it’s manual or automatic, we make sure the right person gets the lead without any 'Not it!' moments.",
      listItems: [
        "Automated Lead Distribution",
        "Manual Lead Assignment",
        "Lead Prioritization",
        "Performance-Based Assignment",
        "Real-Time Notifications",
        "Lead Escalation",
        "Lead Ownership",
        "Lead Distribution Limits",
        "Mobile Accessibility",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2023/08/Intelligent-Lead-assignment-1-768x476.png",
      id: "Lead-Assignment",
    },
    {
      title: "Follow-Up and Nurturing",
      description:
        "Forgot to follow up? Not anymore. With our tools, staying in touch with leads is easier than ghosting your ex. Emails, calls, texts—your leads will never feel neglected again.",
      listItems: [
        "Automated Follow-Up Scheduling",
        "Personalized Communication",
        "Multi-Channel Communication",
        "Workflow Automation",
        "Segmentation for Nurturing",
        "Lead Nurturing Campaigns",
        "Drip Email Campaigns",
        "Call Scheduling and Logging",
        "Progress Monitoring",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2023/08/feature-omnichannel-768x502.png",
      id: "Follow-Up",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Who doesn’t love charts and graphs? Get insights so good, you’ll start using them as icebreakers at parties. Track performance, conversions, and every other stat you didn’t know you needed.",
      listItems: [
        "Detailed Reports",
        "Conversion Rate Analysis",
        "Performance Tracking",
        "Customizable Dashboards",
        "Feedback Analysis",
        "Compliance and Data Security",
        "Real-Time Alerts",
        "Event and Webinar Analytics",
        "Predictive Analytics",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2023/08/Actionable-Insights-1-768x526.png",
      id: "Analytics",
    },
    {
      title: "Integration with CRM and Marketing Tools",
      description:
        "Sync your favorite tools like peanut butter and jelly. No more switching between tabs like you’re playing whack-a-mole. It’s all in one place, and your sanity thanks you.",
      listItems: [
        "CRM Synchronization",
        "Marketing Tool Integration",
        "Streamlined Workflow",
        "Enhanced Collaboration",
        "Centralized Data Management",
        "Marketing Campaign Integration",
        "Lead Scoring and Prioritization",
        "Security and Compliance",
        "Integration with Popular Tools",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2023/08/Hyper-Personalized-engagement-768x486.png",
      id: "Integration",
    },
    {
      title: "Automated Notifications",
      description:
        "Notifications so instant, they’ll make you feel psychic. From follow-ups to lead updates, you’ll always be one step ahead, like a lead-managing superhero.",
      listItems: [
        "Instant Alerts",
        "Follow-Up Reminders",
        "Custom Notification Settings",
        "Real-Time Updates",
        "Email Notifications",
        "SMS Notifications",
        "WhatsApp or Social Media Notifications",
        "Payment and Fee Reminders",
        "Push Notifications",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2023/08/real-estate-Hyper-Presonalized-300x300.png",
      id: "Automated",
    },
    {
      title: "Document Management & E-signatures",
      description:
        "Paperwork? Gross. E-signatures? Fantastic. Store, manage, and sign documents without breaking a sweat—or a pen.",
      listItems: [
        "Secure Document Storage",
        "E-Signatures Integration",
        "Contract & Agreement Management",
        "Document Tracking",
        "Multi-File Support",
        "Mobile Compatibility",
        "Automated Categorization",
        "Real-Time Status Updates",
        "Manual Review Options",
      ],
      imageUrl: document, // Keep the same image for now
      id: "Document",
    },
    {
      title: "Task & Workflow Automation",
      description:
        "Automate tasks like a boss. Schedule viewings, assign leads, and set reminders while you sit back and sip coffee (or something stronger).",
      listItems: [
        "Automated Task Assignments",
        "Viewing Scheduling",
        "Follow-Up Reminders",
        "Workflow Automation",
        "Predefined Templates",
        "Role-Based Task Assignment",
        "Real-Time Notifications",
        "Automation Rules & Triggers",
        "Workflow Monitoring & Analytics",
      ],
      imageUrl: communication, // Keep the same image for now
      id: "Task",
    },
  ];

  return (
    <div id="features" className="md:w-11/12 mx-auto px-4 py-16">
      <div className="overflow-x-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 tracking-tight">
          Our Services
        </h2>
        {featureData.map((feature, index) => (
          <div
            key={index}
            id={feature.id}
            className={` mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8 mt-${
              index === 0 ? 0 : 16
            } mt-20`}
          >
            {/* Feature Content */}
            <div
              className={`${index % 2 === 0 ? "" : "order-1 md:order-2"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight transition-colors duration-300">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-300 mt-4">
                {feature.description}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300">
                {feature.listItems.map((item, i) => (
                  <ul key={i} className="transition-colors duration-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>{" "}
                      {item}
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className="flex justify-center mb-10 md:mb-4 order-2 md:order-1"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
