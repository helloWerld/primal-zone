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
        "Testosterone therapy can help increase energy levels, improve libido, enhance mood, and boost muscle mass and strength.",
    },
    {
      id: 2,
      question: "Who should consider testosterone therapy?",
      answer:
        "Men experiencing symptoms of low testosterone, such as fatigue, depression, and decreased libido, may benefit from testosterone therapy.",
    },
    {
      id: 3,
      question: "What are the risks of testosterone therapy?",
      answer:
        "Potential risks include cardiovascular issues, prostate health concerns, and hormone imbalances.",
    },
    {
      id: 4,
      question: "How is testosterone therapy administered?",
      answer:
        "Testosterone therapy can be administered through injections, gels, patches, or pellets.",
    },
    {
      id: 5,
      question:
        "How long does it take to see results from testosterone therapy?",
      answer:
        "Results may vary, but most men notice improvements within a few weeks to months of starting therapy.",
    },
    {
      id: 6,
      question: "Can women benefit from testosterone therapy?",
      answer:
        "Yes, women can also experience low testosterone levels and may benefit from testosterone therapy to improve libido, energy, and overall well-being.",
    },
    {
      id: 7,
      question: "Is testosterone therapy right for me?",
      answer:
        "Consult our healthcare professionals to determine if testosterone therapy is the right treatment option for you based on your symptoms, blood work and medical history.",
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
