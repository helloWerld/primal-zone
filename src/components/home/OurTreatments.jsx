import React from "react";
import SectionTitle from "../ui/SectionTitle";

const OurTreatments = () => {
  return (
    <div className="page-section flex flex-col w-full items-center">
      <SectionTitle
        align={"center"}
        subheadline={"Transparent & Upfront"}
        headline={"Our Treatments"}
        description={
          "Our treatments are designed to hyper target individual Health needs. We’ll provide a FULL REFUND if you are NOT ELIGIBLE for treatment."
        }
        buttonText={""}
        buttonLink={""}
        width={"2/3"}
      />
    </div>
  );
};

export default OurTreatments;
