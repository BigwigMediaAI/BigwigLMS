import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is BigwigLms?",
      answer:
        "BigwigLms is a comprehensive platform designed to streamline and centralize real estate management, from property listings to client interactions. It helps agents, brokers, and agencies manage their portfolios effectively.",
    },
    {
      question: "How does BigwigLms improve real estate business operations?",
      answer:
        "BigwigLms automates key real estate tasks such as property management, client communication, and listing updates. It simplifies lead tracking, enhances collaboration between agents, and provides valuable insights through analytics.",
    },
    {
      question: "Is BigwigLms suitable for all types of real estate businesses?",
      answer:
        "Yes, BigwigLms is tailored to meet the needs of real estate agencies, property developers, brokers, and independent agents. It’s flexible and scalable to suit small, medium, or large-scale real estate operations.",
    },
    {
      question: "Can BigwigLms integrate with other real estate tools?",
      answer:
        "Absolutely! BigwigLms supports integration with various real estate CRM systems, listing platforms, and other third-party tools to streamline your workflow and ensure smooth data management across your systems.",
    },
    {
      question: "What kind of support does BigwigLms offer?",
      answer:
        "We provide 24/7 customer support, dedicated onboarding sessions, and comprehensive training materials to ensure your team gets the most out of BigwigLms.",
    },
    {
      question: "Is training provided for using BigwigLms?",
      answer:
        "Yes, we offer in-depth training tailored to your team’s needs. Whether you're new to real estate or experienced, we ensure you understand how to leverage BigwigLms to optimize your operations.",
    },
    {
      question: "Does BigwigLms offer analytics features?",
      answer:
        "Yes, BigwigLms comes equipped with powerful analytics tools to track key metrics like lead conversion rates, agent performance, property trends, and more to help you make data-driven decisions.",
    },
    {
      question: "How do I get started with BigwigLms?",
      answer:
        "Getting started is easy. Schedule a demo, and we'll guide you through the setup process, ensuring BigwigLms is fully customized to your business needs.",
    },
  ];
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full mx-auto px-16 py-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm mb-5 bg-gray-50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
