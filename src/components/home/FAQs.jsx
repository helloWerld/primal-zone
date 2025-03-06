import React from "react";
import SectionTitle from "../ui/SectionTitle";
import FAQList from "../ui/FAQList";

const FAQs = () => {
  return (
    <div id="faq" className="page-section flex flex-col lg:flex-row gap-6">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <SectionTitle
          align={"start"}
          subheadline={"Educate yourself"}
          headline={"Frequently Asked Questions"}
          description={
            "Here is a quick list of all the frequent questions our team receive and our responses for your conveneience."
          }
          buttonText={""}
          buttonLink={""}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <FAQList />
      </div>
    </div>
  );
};

export default FAQs;
