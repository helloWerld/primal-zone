"use client";

import React from "react";

const SignUpModal = () => {
  return (
    <dialog
      id="sign_up_modal"
      className="modal modal-bottom sm:modal-middle backdrop-blur-lg w-full"
    >
      <div className="modal-box bg-black border border-white/20 flex flex-col gap-4 ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            ✕
          </button>
        </form>
        <h2 className="-mt-4 text-4xl bg-gradient-to-br from-pink-500 to-purple-500 text-transparent bg-clip-text font-semibold">
          Verify To Get Started
        </h2>
        <div className="divider -my-2 py-0"></div>
        <ol className="list-decimal ms-6 flex flex-col gap-3">
          <li>
            <h3 className="text-white text-lg mb-1">Fill In Your Details</h3>
            <p className="font-thin">
              Fill in the form beside with your details as they appear on your
              driver's license and click submit
            </p>
          </li>
          <li>
            <h3 className="text-white text-lg mb-1">
              Verify Your Email Address
            </h3>
            <p className="font-thin">
              Click the validate button in your email to authorise your device
              and link you back into your secure account area
            </p>
          </li>
          <li>
            <h3 className="text-white text-lg mb-1">
              Start Treatment Application
            </h3>
            <p className="font-thin">
              Once you are in your secure account area, you’ll be able to safely
              apply for treatments, buy approved medications and manage your
              re-order process.
            </p>
          </li>
        </ol>
        <div className="flex flex-row gap-2 items-center w-full mt-1">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered bg-black grow"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered bg-black grow"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered bg-black grow"
        />
        <input
          type="phone"
          placeholder="Phone Number"
          className="input input-bordered bg-black grow"
        />
        <button className="btn w-full gradient-btn">
          Submit For Email Verification
        </button>
      </div>
    </dialog>
  );
};

export default SignUpModal;
