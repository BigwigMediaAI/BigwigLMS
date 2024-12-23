
import document from "../assets/features/document (1).webp";
import communication from '../assets/features/counselor.webp';
import { motion } from "framer-motion";

function Features() {
  const featureData = [
    {
      title: "Lead Capture",
      description:
        "Tired of chasing leads like a cat chasing a laser pointer? Relax, we’ve got this! Capture leads from your website, social media, and ad campaigns without lifting a finger. Finally, your inbox will stop looking like a bad dating app.",
      listItems: [
        "Website Integration",
        "Social Media Tracking",
        "Ad Campaign Integration",
        "Centralized Lead Database",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2024/03/Precise-Source-Tracking.png",
      id: "Lead-Capture",
    },
    {
      title: "Lead Management",
      description:
        "Managing leads shouldn’t feel like herding cats. With our tools, it’s more like herding… stuffed animals. Search, sort, and prioritize without losing your cool—or your leads.",
      listItems: [
        "Centralized Dashboard",
        "Quick Lead Search",
        "Custom Filters",
        "Real-Time Updates",
      ],
      imageUrl: "https://www.agentlegend.com/hubfs/Imported_Blog_Media/7-Real-Estate-Lead-Lifecycle-Stages-You-Should-Be-Tracking.png",
      id: "Lead-Management",
    },
    {
      title: "Lead Assignment",
      description:
        "Assign leads so smoothly, your team might think you’re some kind of wizard. Whether it’s manual or automatic, we make sure the right person gets the lead without any 'Not it!' moments.",
      listItems: [
        "Smart Lead Distribution",
        "Custom Assignment Rules",
        "Real-Time Notifications",
        "Improved Response Times",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/Intelligent-Lead-assignment-1-768x476.png",
      id: "Lead-Assignment",
    },
    {
      title: "Follow-Up and Nurturing",
      description:
        "Forgot to follow up? Not anymore. With our tools, staying in touch with leads is easier than ghosting your ex. Emails, calls, texts—your leads will never feel neglected again.",
      listItems: [
        "Automated Follow-Ups",
        "Multi-Channel Communication",
        "Customizable Templates",
        "Scheduled Reminders",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/feature-omnichannel-768x502.png",
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
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/Actionable-Insights-1-768x526.png",
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
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/Hyper-Personalized-engagement-768x486.png",
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
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/real-estate-Hyper-Presonalized-300x300.png",
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
      ],
      imageUrl: communication, // Keep the same image for now
      id: "Task",
    },
  ];
  
  
  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          id={feature.id}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8 mt-${
            index === 0 ? 0 : 16
          } mt-10`}
        >
          {/* Feature */}
          <motion.div
            className={index % 2 === 0 ? "" : "order-1 md:order-2"}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {feature.listItems.map((item, i) => (
                <ul key={i} className="transition-colors duration-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✔</span> {item}
                  </li>
                </ul>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center mb-10 md:mb-4 order-2 md:order-1"
            custom={index % 2 === 0 ? "right" : "left"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-96 max-w-md md:max-w-lg transition-transform duration-300"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Features;
