import { BadgeCheck, Mars } from "lucide-react";
import Link from "next/link";
import React from "react";

const TreatmentCard = ({ treatment }) => {
  return (
    <div
      className={`flex gap-4 ${
        treatment?.id === 0
          ? "gradient-border"
          : "border rounded-lg border-white/50"
      } w-96 min-h-[530px] text-white`}
    >
      <div className="flex flex-col justify-between gap-4 z-10 p-6 w-full">
        <div className="flex items-center justify-center size-16 border border-gray-600/50 rounded-lg">
          {treatment?.icon}
        </div>
        <h2 className="uppercase font-semibold text-lg">
          {treatment?.headline}
        </h2>
        <h3 className="text-5xl font-medium">
          ${treatment?.price} <span className="text-xl font-normal">+GST</span>
        </h3>
        <h4 className="font-thin text-xl ">{treatment?.subheadline}</h4>
        <div className="divider -m-2"></div>
        <p className="font-semibold text-xl">
          {treatment?.included ? "Includes" : "Process"}
        </p>
        <ul className="list-none font-thin">
          {treatment?.included &&
            treatment?.included?.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <BadgeCheck size={20} />
                {item}
              </li>
            ))}
          {treatment?.process &&
            treatment?.process?.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <BadgeCheck size={20} />
                {item}
              </li>
            ))}

          {treatment?.medsNotIncluded && (
            <li className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-[#C92D78]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
              </svg>
              <p>
                Medications{" "}
                <span className="underline font-semibold text-[#C92D78]">
                  Not
                </span>{" "}
                Included
              </p>
            </li>
          )}
        </ul>
        <Link
          className={`btn w-full ${
            treatment?.id === 0
              ? "gradient-border"
              : "border hover:border hover:border-white/50 border-white/50 btn-ghost hover:bg-black"
          } !text-white min-h-12`}
          href="#"
        >
          <div className="z-10 ">Get Started</div>
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard;
