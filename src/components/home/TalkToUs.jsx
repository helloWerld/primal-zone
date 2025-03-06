import React from "react";
import SectionTitle from "../ui/SectionTitle";
import calendar from "../../../public/calendar.png";
import CalendlyWidget from "../ui/CalendlyWidget";

const TalkToUs = () => {
  return (
    <div id="talk-to-us" className="page-section flex flex-col min-h-[800px]">
      <SectionTitle
        align={"center"}
        subheadline={"Need A Helping Hand?"}
        headline={"Talk To Us"}
        description={""}
        buttonText={""}
        buttonLink={""}
      />
      <img src={calendar.src} className="mt-12 w-[400px]" />
      {/* <CalendlyWidget /> */}
    </div>
  );
};

export default TalkToUs;
