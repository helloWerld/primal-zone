import React from "react";

const ProcessCard = () => {
  return (
    <div className="flex gradient-border p-4">
      <div className="flex flex-col gap-4 items-center justify-center z-10 p-6">
        <div className="flex items-center justify-center size-24 rounded-full gradient-btn text-5xl font-bold mx-auto">
          1
        </div>
        <h2 className="text-3xl text-pink-600 font-semibold">Information</h2>
        <ul className="text-sm">
          <li>Provide Contact Details</li>
          <li>Complete Health Survey</li>
          <li>Upload ID & Bloodwork</li>
          <li>Pay Consulting Fee</li>
        </ul>
      </div>
    </div>
  );
};

export default ProcessCard;
