"use client";

import React from "react";
import SectionTitle from "../ui/SectionTitle";
import JourneyCard from "../ui/Cards/JourneyCard";

const HealthJourneys = () => {
  const journeys = [
    {
      id: 0,
      embedUrl:
        "https://www.youtube.com/embed/1mBYK2igR30?si=R5hIubtmsDzYXyl7&amp;controls=0",
      description:
        "Peter is a middle age man on his journey back to good health. TRT has been an important support mechanism to enable next level results in the office, gym and bedroom",
      clientName: "Peter L - Suburban Dad",
    },
    {
      id: 1,
      embedUrl:
        "https://www.youtube.com/embed/OlKHHNW6dmk?si=eEdO1DQkJ4tI8lRn&amp;controls=0",
      description:
        "Peter is a middle age man on his journey back to good health. TRT has been an important support mechanism to enable next level results in the office, gym and bedroom",
      clientName: "Allan B - Executive",
    },
    {
      id: 2,
      embedUrl:
        "https://www.youtube.com/embed/vpDpjGLjLKk?si=Dhij0KiWKRPnSIzU&amp;controls=0",
      description:
        "Peter is a middle age man on his journey back to good health. TRT has been an important support mechanism to enable next level results in the office, gym and bedroom",
      clientName: "George P - Enterpreneur",
    },
  ];
  return (
    <div id="journeys" className="page-section flex flex-col">
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
      <div className="flex flex-col lg:flex-row items-center mt-12 gap-4">
        {journeys.map((journey) => (
          <JourneyCard key={journey.id} journey={journey} />
        ))}
      </div>
      <button
        onClick={() => document.getElementById("sign_up_modal").showModal()}
        className="btn btn-lg w-full md:w-[400px] gradient-btn mt-12 text-lg font-light"
      >
        Start Treatment
      </button>
    </div>
  );
};

export default HealthJourneys;
