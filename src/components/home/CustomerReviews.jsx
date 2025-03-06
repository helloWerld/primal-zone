import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ReviewCard from "../ui/Cards/ReviewCard";
import Link from "next/link";

const CustomerReviews = () => {
  return (
    <div className="page-section flex flex-col">
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
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-12 lg:px-24">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <Link
        href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x6b12ae0c5939aaab:0xc29dc17511c7eb1a!12e1?source=g.page.m.kd._&laa=lu-desktop-review-solicitation"
        target="_blank"
        className="btn w-1/2 btn-lg gradient-btn mt-12"
      >
        Write a Google Review
      </Link>
    </div>
  );
};

export default CustomerReviews;
