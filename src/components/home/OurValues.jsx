import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ValueCard from "../ui/Cards/ValueCard";

const OurValues = () => {
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
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-12">
        <ValueCard />
        <ValueCard />
        <ValueCard />
        <ValueCard />
      </div>
    </div>
  );
};

export default OurValues;
