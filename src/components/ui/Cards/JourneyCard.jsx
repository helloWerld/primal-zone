import React from "react";

const JourneyCard = () => {
  return (
    <div className="flex gradient-border">
      <div className="flex flex-col gap-4 p-8 z-10 max-w-96 bg-gradient-to-tr from-transparent via-transparent to-pink-500/30">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/cj9q5fKMxxk?si=Yjsd_M4mU4vCw7CH&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute left-0 top-0 w-full h-full rounded-xl overflow-clip"
          ></iframe>
        </div>
        <p className="font-light">
          Peter is a middle age man on his journey back to good health. TRT has
          been an important support mechanism to enable next level results in
          the office, gym and bedroom
        </p>
        <h4 className="font-semibold text-white">Peter L - Suburban Dad</h4>
      </div>
    </div>
  );
};

export default JourneyCard;
