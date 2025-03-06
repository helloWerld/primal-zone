import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ReviewCard from "../ui/Cards/ReviewCard";
import Link from "next/link";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 0,
      content:
        "I can't recommend Primal Zone highly enough! Dave, Luke and everyone behind the scenes have helped me reach new levels of energy and wellness. It's a great feeling to be supported by an entire team who not only understands your goals but is also work",
      author: "Mike Woolnough-Reid",
    },
    {
      id: 1,
      content:
        "The team at Primal have been amazing to deal with. From the first enquiry through the website responses were swift. Communication has always been great at all stages in the process. Reviews have always been comprehensive, yet communicated to me in a",
      author: "Steve G",
    },
    {
      id: 2,
      content:
        "Primal Zone have been awesome, from my initial consultation I felt Luke knew what he was talking about and information I received after my bloods was very informative. There doctor phoned me and we spoke about all the concerns I had and my mind was d",
      author: "Terry Van Stroe",
    },
    {
      id: 3,
      content:
        "Having Dave Lee look over my bloods gives me peace of mind, knowing I’m on the right track. I’ve been with Primal Zone since August 2024, and my health has never been better. Mentally, I’m feeling sharper than ever, and my wife loves that I’m back to",
      author: "Bronson Hills",
    },
    {
      id: 4,
      content:
        "Luke and the team at primalzone have been amazing to work with 6 months in and my results have already exceeded my expectations. Excellent customer service and the best Advice. Recommend to anyone wanting to improve their quality of life.",
      author: "Artie Farrow",
    },
  ];
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
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Link
        href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x6b12ae0c5939aaab:0xc29dc17511c7eb1a!12e1?source=g.page.m.kd._&laa=lu-desktop-review-solicitation"
        target="_blank"
        className="btn w-full md:w-[400px] btn-lg gradient-btn mt-12"
      >
        Write a Google Review
      </Link>
    </div>
  );
};

export default CustomerReviews;
