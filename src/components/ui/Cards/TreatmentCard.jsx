import React from "react";
import { ArrowRight, BadgeCheck, Mars } from "lucide-react";
import Link from "next/link";

const TreatmentCard = ({ treatment }) => {
  return (
    <div
      className={`flex gap-4 w-80 min-h-[530px] text-white ${
        treatment?.id === 0
          ? "gradient-border"
          : "border border-white/50 rounded-lg"
      }`}
    >
      <div className="flex flex-col justify-between gap-4 p-6 w-full z-10">
        <div className="flex items-center justify-center size-16 border border-gray-600/50 rounded-lg">
          {treatment.icon}
        </div>
        <h2 className="uppercase font-semibold text-lg">
          {treatment.headline}
        </h2>
        <h3 className="text-5xl font-medium">
          ${treatment.price} <span className="text-xl font-normal">+GST</span>
        </h3>
        <h4 className="font-thin text-xl">{treatment.subheadline}</h4>
        <div className="divider -m-2"></div>
        <p className="font-semibold text-xl">Includes</p>
        <ul>
          {treatment.included.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <BadgeCheck size={20} /> {item}
            </li>
          ))}
          {treatment.medsNotIncluded && (
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
          href="#"
          className="btn w-full gradient-border btn-ghost hover:bg-black"
        >
          <div className="flex items-center gap-2 z-10">
            Get Started <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard;
