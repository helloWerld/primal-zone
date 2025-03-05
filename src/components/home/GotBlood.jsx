import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TreatmentCard from "../ui/Cards/TreatmentCard";

const GotBlood = () => {
  return (
    <div className="page-section  px-4">
      <div className="w-1/2 flex">
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
      <div className="w-1/2 flex gap-4">
        <TreatmentCard />
        <TreatmentCard />
      </div>
    </div>
  );
};

export default GotBlood;
