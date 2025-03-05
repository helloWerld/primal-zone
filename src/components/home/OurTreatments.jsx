import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TreatmentCard from "../ui/Cards/TreatmentCard";

const OurTreatments = () => {
  return (
    <div className="page-section flex flex-col items-center">
      <SectionTitle
        align={"center"}
        subheadline={"Transparent & Upfront"}
        headline={"Our Treatments"}
        description={
          "Our treatments are designed to hyper target individual Health needs. We’ll provide a FULL REFUND if you are NOT ELIGIBLE for treatment."
        }
      />
      <div className="flex flex-row items-center gap-6 p-12">
        <TreatmentCard />
        <TreatmentCard />
      </div>
    </div>
  );
};

export default OurTreatments;
