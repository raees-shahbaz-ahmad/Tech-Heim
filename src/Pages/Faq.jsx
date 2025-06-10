import React, { useState } from "react";
import "../Pages/Faq.css"
import Footer from "../Components/Footer/Footer";

const Faq = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, active: !faq.active } : { ...faq, active: false }
      )
    );
  };

  return (
    <>
      <div className="faq-container">
        <div className="faq-banner-wrapper">
          <img className="faq-banner" src="./faq.jpg" alt="FAQ Banner" />
        </div>

        <div className="container">
          <div className="main-container">
            <div className="left-side-container">
              <h6>Table of Contents</h6>
              <div className="left-side-container-content">
                <p className="active">General</p>
                <p>Trusts & Safety</p>
                <p>Services</p>
                <p>Billing</p>
              </div>
            </div>

            <div className="right-side-container">
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div className="card" key={index}>
                    <div
                      className="card-header"
                      onClick={() => toggleFAQ(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="question">{faq.question}</div>
                    </div>
                    <div className={`collapse ${faq.active ? "show" : ""}`}>
                      <div className="card-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const faqData = [
  {
    question: "Can I purchase products from Tech Heim using installment payments?",
    answer: "Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget.",
    active: false,
  },
  {
    question: "How can I engage with the magazine content on Tech Heim?",
    answer: "You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community.",
    active: false,
  },
  {
    question: "Does Tech Heim offer a warranty on its products?",
    answer: "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
    active: false,
  },
  {
    question: "Is Tech Heim a secure platform for online shopping?",
    answer: "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
    active: false,
  },
  {
    question: "How can I get assistance with my purchase or any other inquiries?",
    answer: "If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help. You can reach out to us through the contact page on our website, and we'll be happy to assist you promptly.",
    active: false,
  },
];

export default Faq;
