import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TreatmentCard from "../ui/Cards/TreatmentCard";
import { Mars, Microscope, Syringe } from "lucide-react";

const GotBlood = () => {
  const treatments = [
    {
      id: 0,
      icon: <Syringe size={40} />,
      headline: "BLOOD TEST (BB4)",
      price: 248,
      subheadline: "Full Blood Test",
      process: ["Pay Online", "Get Blood Tested", "Receive & Upload Results"],
      medsNotIncluded: false,
    },
    {
      id: 1,
      icon: <Microscope size={40} />,
      headline: "Semen Analysis",
      price: 93,
      subheadline: "Semen Analysis",
      process: ["Pay Online", "Get Blood Tested", "Receive & Upload Results"],
      medsNotIncluded: false,
    },
  ];
  return (
    <div className="page-section flex flex-col lg:flex-row px-4 gap-6 lg:gap-0">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <SectionTitle
          align={"start"}
          subheadline={"The River Of Life"}
          headline={"Got Blood?"}
          description={
            "Your Blood analysis is a critical part of the Testosterone treatment as is your Semen Analysis for the Fertility treatment - without them we cannot determine if you are a suitable candidate for treatment. Get your comprehensive Blood Panels and Semen Analysis and then upload them during the Treatment application process."
          }
          buttonText={""}
          buttonLink={""}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center justify-center gap-4">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment?.id} treatment={treatment} />
        ))}
      </div>
    </div>
  );
};

export default GotBlood;
