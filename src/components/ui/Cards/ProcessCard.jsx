import React from "react";

const ProcessCard = ({ step }) => {
  return (
    <div className="flex gradient-border w-72 justify-center">
      <div className="flex flex-col justify-start gap-4 items-center z-10 p-12 h-[350px]">
        <div className="flex items-center justify-center size-24 rounded-full gradient-btn text-5xl font-bold mx-auto">
          {step?.id}
        </div>
        <h2 className="text-3xl text-pink-600 font-semibold">
          {step?.headline}
        </h2>
        <ul className="text-center">
          {step?.details?.map((detail) => (
            <li key={detail} className=" font-light">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProcessCard;
