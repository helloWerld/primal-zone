import React from "react";
import SectionTitle from "../ui/SectionTitle";
import facebook from "../../../public/facebook.webp";

const SocialMedia = () => {
  const socials = [
    {
      id: 0,
      icon: facebook,
      link: "https://www.facebook.com",
    },
    {
      id: 1,
      icon: facebook,
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: facebook,
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      icon: facebook,
      link: "https://www.facebook.com",
    },
  ];

  return (
    <div className="page-section flex flex-col">
      <SectionTitle
        align={"center"}
        subheadline={"Stay In Touch"}
        headline={"Social Media"}
        description={
          "Stay in touch with our team and the latest crest-of-the-wave thoughts and inspiration from our favourite influencers."
        }
        buttonText={""}
        buttonLink={""}
      />
      <div className="flex items-center gap-4 mt-12">
        {socials.map((social) => (
          <div
            className="flex flex-row items-center justify-center size-20 gradient-btn rounded-full"
            key={social.id}
          >
            <img src={social.icon.src} className="size-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
