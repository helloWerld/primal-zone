import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ValueCard from "../ui/Cards/ValueCard";
import {
  HeartPulse,
  MessageCircleQuestion,
  Search,
  Stethoscope,
} from "lucide-react";

const OurValues = () => {
  const values = [
    {
      id: 0,
      icon: <HeartPulse size={40} className="text-pink-500" />,
      headline: "Comprehensive Patient Care",
      description:
        "You will receive in-depth medical evaluation of your blood test results and personalised treatment plans to ensure that your specific health needs are addressed and managed effectively.",
    },
    {
      id: 1,
      icon: <Search size={40} className="text-pink-500" />,
      headline: "Transparency and Trust",
      description:
        "Transparency and trust are at the core of what we do. We’ll give you detailed information about our treatment options. Whenever you have questions, we’ll answer them.",
    },
    {
      id: 2,
      icon: <Stethoscope size={40} className="text-pink-500" />,
      headline: "Expert Collaboration",
      description:
        "Our hormone constultants and medical professionals will provide you with the highest quality of care possible by offering expert advice, personalised treatment recommendations and continuing medical supervision.",
    },
    {
      id: 3,
      icon: <MessageCircleQuestion size={40} className="text-pink-500" />,
      headline: "Continuous Support",
      description:
        "Your treatment doesn’t stop when you have received your prescription medication. Our specialists will provide ongoing care through regular check-ins, comprehensive reviews and adjustments to your treatment plan.",
    },
  ];
  return (
    <div className="page-section flex flex-col ">
      <SectionTitle
        align={"center"}
        subheadline={"Why We Do, What We Do"}
        headline={"Our Values"}
        description={""}
        buttonText={""}
        buttonLink={""}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-4 mt-12">
        {values.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
