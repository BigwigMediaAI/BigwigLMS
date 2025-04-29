import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faq_img from "../assets/faq-img.png";

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
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="text-white mb-10 py-4 px-10 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-2 text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly  py-3 items-start ">
        <div className="md:flex items-start hidden  ">
          <img src={faq_img} alt="FAQ Illustration" className="w-80 max-w-sm" />
        </div>
        <div className="space-y-5 pt-10  ">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* FAQ Box */}
              <div className="bg-gray-50 border text-gray-900 border-gray-700 rounded-lg pl-12 pr-6 py-3 relative max-w-xl w-full">
                {/* Number Badge (half-overlapping from left) */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-orange-500">
                  {index + 1}
                </div>

                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pt-2 text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
