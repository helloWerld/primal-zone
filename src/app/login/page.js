import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-[800px] max-w-screen-2xl bg-login-body bg-cover mx-auto">
      <div className="w-full lg:w-1/2 p-12">
        <h1 className="text-5xl font-semibold text-white">Welcome Back</h1>
        <h2 className="mt-6 text-white font-semibold text-xl">
          Been here before?
        </h2>
        <p className="font-light w-full">
          Simply verify your email address to authorise this device and get back
          into your secure account area.
        </p>
      </div>
      <div className="flex items-center justify-center py-12 px-24">
        <div className="w-full max-w-[600px] flex flex-col h-fit gap-4 rounded-xl backdrop-blur-md p-8 border border-white/10 bg-purple-950/30">
          <h2 className="text-3xl font-semibold text-white">Instructions</h2>
          <p className="font-thin text-lg">
            Enter your email address and click submit, check your email and
            click the verify account email button.
          </p>
          <input
            className="input input-bordered bg-black/30 mt-6 !py-6"
            type="text"
            placeholder="Email Address"
          />
          <button className="btn gradient-btn btn-lg w-full font-light">
            Submit for Email Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
