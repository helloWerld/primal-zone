import React from "react";

const JourneyCard = ({ journey }) => {
  return (
    <div className="flex gradient-border">
      <div className="flex flex-col gap-4 p-8 z-10 max-w-96 bg-gradient-to-tr from-transparent via-transparent to-pink-500/30">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            src={journey?.embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute left-0 top-0 w-full h-full rounded-xl overflow-clip border border-white/10"
          ></iframe>
        </div>
        <p className="font-light">{journey.description}</p>
        <h4 className="font-semibold text-white">{journey.clientName}</h4>
      </div>
    </div>
  );
};

export default JourneyCard;
