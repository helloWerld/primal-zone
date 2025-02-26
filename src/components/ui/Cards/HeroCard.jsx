import React from "react";

const HeroCard = () => {
  return (
    <div className="absolute left-24 top-24 bg-neutral-800/90 h-96 w-96 p-6 rounded-lg flex flex-col gap-3 items-center justify-between">
      <h1 className="text-4xl text-white text-center font-semibold">
        Men's Hormone
        <br />& Holistic Health
      </h1>
      <p className="text-center text-2xl font-thin text-white">
        We’ll provide you a personalised hormone and holistic health plan to get
        you back in your prime.
      </p>
      <input
        className="input input-bordered w-full"
        type="email"
        placeholder="you@gmail.com"
      />
      <button className="btn btn-primary w-full gradient-btn">SIGN UP</button>
    </div>
  );
};

export default HeroCard;
