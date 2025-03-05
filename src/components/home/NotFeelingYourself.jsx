import React from "react";
import ValuePropCard from "../ui/Cards/ValuePropCard";
import SectionTitle from "../ui/SectionTitle";

const NotFeelingYourself = () => {
  const cards = [
    {
      id: 0,
      icon: "moon",
      title: "Constantly Tired?",
      description: "Are you sleeping more than ever?",
    },
    {
      id: 1,
      icon: "battery",
      title: "Low / No Energy?",
      description: "Constantly running on empty?",
    },
    {
      id: 2,
      icon: "male",
      title: "No Sex Drive?",
      description: "No desire or urge to get on the job?",
    },
    {
      id: 3,
      icon: "weight",
      title: "No Muscle Mass?",
      description: "Can't put on muscle no matter what?",
    },
  ];

  return (
    <div className="page-section flex flex-row">
      <div className="w-1/2 grid grid-flow-col grid-cols-2 grid-rows-2 items-start p-8">
        {cards.map((card) => (
          <ValuePropCard
            key={card.id}
            id={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="w-1/2 flex items-center justify-start">
        <SectionTitle
          align={"start"}
          subheadline={"Listen To Your Instincts"}
          headline={"Not Feeling Yourself?"}
          description={
            "Onset of symptoms like this can happen to Men of any age. Hormone Health is one of the biggest Men’s Health issues not spoken about. If you aren’t feeling yourself and are experiencing these type of symptoms, then your Hormone Health is worth evaluating."
          }
          buttonText={"Start Treatment"}
          buttonLink={"/"}
          width={"4/5"}
        />
      </div>
    </div>
  );
};

export default NotFeelingYourself;
