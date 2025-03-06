import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ProcessCard from "../ui/Cards/ProcessCard";

const TreatmentProcess = () => {
  const steps = [
    {
      id: 1,
      headline: "Information",
      details: [
        "Provide Contact Details",
        "Complete Health Survey",
        "Upload ID & Bloodwork",
        "Pay Consulting Fee",
      ],
    },
    {
      id: 2,
      headline: "Evaluation",
      details: [
        "Data Analysis",
        "Patient Diagnosis",
        "Medicine Protocol",
        "Speak with Doctor",
      ],
    },
    {
      id: 3,
      headline: "Medication",
      details: ["Pay for Medicine", "Receive Medication", "Take First Dose"],
    },
  ];

  return (
    <div id="how-it-works" className="page-section flex-col gap-8">
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
        {steps.map((step) => (
          <ProcessCard key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentProcess;
