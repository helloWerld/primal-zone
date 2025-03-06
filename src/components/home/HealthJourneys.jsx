"use client";

import React from "react";
import SectionTitle from "../ui/SectionTitle";
import JourneyCard from "../ui/Cards/JourneyCard";

const HealthJourneys = () => {
  return (
    <div id="journeys" className="page-section flex- flex-col">
      <SectionTitle
        align={"center"}
        subheadline={"Get Inspired, Get Started"}
        headline={"Health Journeys"}
        description={
          "Everybody's journey to good health is unique and inspirational."
        }
        buttonText={""}
        buttonLink={""}
      />
      <div className="flex items-center mt-12 gap-4">
        <JourneyCard />
        <JourneyCard />
        <JourneyCard />
      </div>
      <button
        onClick={() => document.getElementById("sign_up_modal").showModal()}
        className="btn btn-lg w-[500px] gradient-btn mt-12 text-lg font-light"
      >
        Start Treatment
      </button>
    </div>
  );
};

export default HealthJourneys;
