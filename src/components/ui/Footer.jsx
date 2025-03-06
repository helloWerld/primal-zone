import Link from "next/link";
import React from "react";
import logo from "../../../public/footer_logo.webp";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl p-12 mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-4 justify-center items-start">
          <img className="w-96" src={logo.src} />
          <p>60 Martin Place, Sydney NSW 2000 Australia</p>
        </div>
        <div className="flex flex-col gap-4  justify-end">
          <h3 className="text-center text-3xl font-semibold text-white">
            Are you interested in <br />
            working with Primal Zone?
          </h3>
          <Link
            className="gradient-btn btn btn-lg font-light"
            href="mailto:ignite@primalzone.com.au"
          >
            ignite@primalzone.com.au
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">YouTube</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Statement</Link>
        </div>
        <p>2025 &copy; Primal Zone</p>
      </div>
    </div>
  );
};

export default Footer;
