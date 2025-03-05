import React from "react";
import SectionTitle from "../ui/SectionTitle";

const CustomerReviews = () => {
  return (
    <div className="page-section">
      {" "}
      <SectionTitle
        align={"center"}
        subheadline={"We Value Your Feedback"}
        headline={"Customer Reviews"}
        description={
          "We started Primal Zone as patients ourselves. Our prime directive is delivering the easiest, most convenient and highest quality experience possible with great economy. Patients are at the centre of our universe and we are obsessed with making the experience outstanding."
        }
        buttonText={""}
        buttonLink={""}
      />
    </div>
  );
};

export default CustomerReviews;
