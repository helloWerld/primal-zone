import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ProcessCard from "../ui/Cards/ProcessCard";

const TreatmentProcess = () => {
  return (
    <div className="page-section flex-col gap-8">
      <SectionTitle
        align={"center"}
        subheadline={"How It Works"}
        headline={"Quick Start Treatment Process"}
        description={
          "Eager to get started right away? Our 3-step, self-service and fully guided process is designed to make your Hormone and Holistic health journey as quick and seamless as possible. We’ll evaluate your hormone health issues and provide a bespoke treatment plan."
        }
        buttonText={""}
        buttonLink={""}
      />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
      </div>
    </div>
  );
};

export default TreatmentProcess;
