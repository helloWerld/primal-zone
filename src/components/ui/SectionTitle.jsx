import Link from "next/link";
import React from "react";

const SectionTitle = ({
  align,
  subheadline,
  headline,
  description,
  buttonText,
  buttonLink,
  width,
}) => {
  return (
    <div className={`flex flex-col items-${align} ms-12 w-${width}`}>
      <Subheadline subheadline={subheadline} />
      <h2 className="text-5xl text-white mt-4">{headline}</h2>
      {description && (
        <p className={`text-${align} font-thin text-lg mt-8 max-w-${width}`}>
          {description}
        </p>
      )}
      {buttonText && (
        <Link
          href={buttonLink}
          className="btn gradient-btn w-full btn-lg mt-8 font-light text-xl"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;

const Subheadline = ({ subheadline }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="w-8 h-3 gradient-btn rounded-full opacity-80"></div>
      <p className="text-sm">{subheadline}</p>
    </div>
  );
};
