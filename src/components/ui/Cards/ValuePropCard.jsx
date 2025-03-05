import React from "react";
import { BatteryLow, Dumbbell, Moon, Mars } from "lucide-react";

const ValuePropCard = ({ id, icon, title, description }) => {
  const getIcon = () => {
    switch (icon) {
      case "moon":
        return <Moon size={48} className="text-pink-500" />;
      case "battery":
        return <BatteryLow size={48} className="text-pink-500" />;
      case "male":
        return <Mars size={48} className="text-pink-500" />;
      case "weight":
        return <Dumbbell size={48} className="text-pink-500" />;
    }
  };

  return (
    <div
      className={`rounded-lg w-72 max-h-54 flex flex-col items-start justify-between gradient-border hover:z-[100] ${
        id >= 2 && "mt-12"
      }`}
    >
      <div className="z-10 bg-gradient-to-r from-transparent to-pink-500/10 p-6">
        {getIcon()}
        <h3 className="text-2xl text-white font-semibold mt-4">{title}</h3>
        <p className="text-lg mt-1 text-white">{description}</p>
      </div>
    </div>
  );
};

export default ValuePropCard;
