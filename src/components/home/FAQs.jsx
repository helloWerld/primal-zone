import React from "react";
import SectionTitle from "../ui/SectionTitle";

const FAQs = () => {
  return (
    <div className="page-section">
      <div>
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
      <div>Right Section</div>
    </div>
  );
};

export default FAQs;
