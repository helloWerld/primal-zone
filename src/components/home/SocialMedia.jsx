import React from "react";
import SectionTitle from "../ui/SectionTitle";
import facebook from "../../../public/facebook.webp";
import instagram from "../../../public/instagram.webp";
import linkedin from "../../../public/linkedin.webp";
import youtube from "../../../public/youtube.webp";
import Link from "next/link";

const SocialMedia = () => {
  const socials = [
    {
      id: 0,
      icon: instagram,
      link: "https://www.instagram.com",
    },
    {
      id: 1,
      icon: linkedin,
      link: "https://www.linkedin.com",
    },
    {
      id: 2,
      icon: facebook,
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      icon: youtube,
      link: "https://www.youtube.com",
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
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-12">
        {socials.map((social) => (
          <Link
            href={social.link}
            target="_blank"
            className="flex items-center justify-center size-20 gradient-btn rounded-full"
            key={social.id}
          >
            <img src={social.icon.src} className="size-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
