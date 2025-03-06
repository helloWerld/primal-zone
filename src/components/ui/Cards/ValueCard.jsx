import { HeartPulse } from "lucide-react";
import React from "react";

const ValueCard = ({ value }) => {
  return (
    <div className="flex flex-col w-full lg:max-w-96 gradient-border">
      <div className="z-10 flex flex-col p-6 gap-2">
        {value.icon}
        <h3 className="text-xl font-semibold text-white">{value.headline}</h3>
        <p>{value.description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
