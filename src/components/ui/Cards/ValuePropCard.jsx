import React from "react";
import { Moon } from "lucide-react";

const ValuePropCard = () => {
  return (
    <div className="border rounded-lg w-72 h-54 p-6 flex flex-col items-start jusitfy-between border-pink-600">
      <Moon size={48} color="#ffffff" />
      <h3 className="text-2xl text-white font-semibold mt-4">
        Constantly Tired?
      </h3>
      <p className="text-lg mt-1 text-white">
        Are you sleeping more than ever?
      </p>
    </div>
  );
};

export default ValuePropCard;
