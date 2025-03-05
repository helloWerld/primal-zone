"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // console.log("Scroll position", window.scrollY);
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      id: 0,
      title: "Treatments",
      href: "#treatments",
    },
    {
      id: 1,
      title: "How It Works",
      href: "#how-it-works",
    },
    {
      id: 2,
      title: "Talk To Us",
      href: "#talk-to-us",
    },
    {
      id: 3,
      title: "Journey's",
      href: "#journeys",
    },
    {
      id: 4,
      title: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <nav
      className={`flex flex-row items-center justify-between max-w-7xl ml-2 p-4 rounded-lg fixed w-[98%] top-2 translate-x-[50%] right-1/2 z-20 ${
        isScrolled ? "bg-neutral-900/90" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          alt="logo"
          src={
            "https://www.primalzone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ed0f3d45.png&w=3840&q=75"
          }
          width={200}
          height={50}
        />
      </Link>
      <div className="flex flex-row gap-5">
        {navLinks.map((link) => (
          <Link
            href={`/${link.href}`}
            key={link.id}
            className="hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-3">
        <button className="btn btn-outline">Patient Portal</button>
        <button className="btn btn-primary gradient-btn ">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
