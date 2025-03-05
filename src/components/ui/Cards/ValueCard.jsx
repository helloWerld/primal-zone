import { HeartPulse } from "lucide-react";
import React from "react";

const ValueCard = () => {
  return (
    <div className="flex flex-col max-w-96 gradient-border">
      <div className="z-10 flex flex-col p-6 gap-2">
        <HeartPulse size={60} className="text-pink-500" />
        <h3 className="text-xl font-semibold text-white">
          Comprehensive Patient Care
        </h3>
        <p>
          You will receive in-depth medical evaluation of your blood test
          results and personalised treatment plans to ensure that your specific
          health needs are addressed and managed effectively.
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
