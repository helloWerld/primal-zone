import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TreatmentCard from "../ui/Cards/TreatmentCard";
import { Mars, TestTubeDiagonal } from "lucide-react";

const OurTreatments = () => {
  const treatments = [
    {
      id: 0,
      icon: <Mars size={40} />,
      headline: "Men's Hormone Health",
      price: 299,
      subheadline: "Male Androgen Health (TRT) Consultation",
      included: ["Bloods Analysis", "Doctor Consultation", "Medicine Protocol"],
      medsNotIncluded: true,
    },
    {
      id: 1,
      icon: <TestTubeDiagonal size={40} />,
      headline: "Men's Fertility Health",
      price: 180,
      subheadline: "Male Fertility Consultation",
      included: [
        "Bloods & Semen Analysis",
        "Doctor Consultation",
        "Medicine Protocol",
      ],
      medsNotIncluded: true,
    },
  ];
  return (
    <div id="treatments" className="page-section flex flex-col items-center">
      <SectionTitle
        align={"center"}
        subheadline={"Transparent & Upfront"}
        headline={"Our Treatments"}
        description={
          "Our treatments are designed to hyper target individual Health needs. We’ll provide a FULL REFUND if you are NOT ELIGIBLE for treatment."
        }
      />
      <div className="flex flex-col md:flex-row items-center gap-6 p-12">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment?.id} treatment={treatment} />
        ))}
      </div>
    </div>
  );
};

export default OurTreatments;
