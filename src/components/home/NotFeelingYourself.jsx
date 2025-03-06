import React from "react";
import ValuePropCard from "../ui/Cards/ValuePropCard";
import SectionTitle from "../ui/SectionTitle";

const NotFeelingYourself = () => {
  const cards = [
    {
      id: 0,
      icon: "moon",
      title: "Constantly Tired?",
      description: "Are you sleeping mroe than ever?",
    },
    {
      id: 1,
      icon: "battery",
      title: "Low/No Energy?",
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
    <div className="page-section flex-col-reverse lg:flex-row flex ">
      <div className="max-h-fit lg:w-1/2 grid grid-flow-col grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-6 items-center p-6">
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
      <div className="flex items-center justify-center lg:w-1/2">
        <SectionTitle
          align={""}
          subheadline={"Listen To Your Instincts"}
          headline={"Not Feeling Yourself?"}
          description={
            "Onset of symptoms like this can happen to Men of any age. Hormone Health is one of the biggest Mens Health issues not spoken about. If you arent feeling yourself and are experiencing these type of symptoms, then your Hormone Health is worth evaluating."
          }
          buttonText={""}
          buttonLink={""}
        />
      </div>
    </div>
  );
};

export default NotFeelingYourself;
