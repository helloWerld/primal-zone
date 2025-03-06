import React from "react";

const FAQList = () => {
  const faqs = [
    {
      id: 0,
      question: "What is testosterone?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 1,
      question: "What are the benefits of testosterone therapy?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 2,
      question: "Who should consider testosterone therapy?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 3,
      question: "What are the risks of testosterone therapy?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 4,
      question: "How is testosterone therapy administered?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 5,
      question:
        "How long does it take to see results from testosterone therapy?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 6,
      question: "Can women benefit from testosterone therapy?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
    {
      id: 7,
      question: "Is testosterone therapy right for me?",
      answer:
        "Testosterone is a hormone that plays a key role in male physical features and development, including muscle mass, bone density, and sex drive.",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="collapse collapse-plus border border-pink-500/80"
        >
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-white">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
