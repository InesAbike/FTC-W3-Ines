"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeartDogIcon = () => {
  const heartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (heartRef.current) {
      gsap.to(heartRef.current, {
        scale: 1.15,
        transformOrigin: "center",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.6,
      });
    }
  }, []);

  return (
    <svg
      ref={heartRef}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_108_1539)">
        <path d="M24 8.94622C24.0004..." fill="#DF4D60" />
        <path d="M24 8.94622C24.0004..." fill="#FF5364" />
        <path d="M21.2069 16.7835..." fill="#35495E" />
        <path d="M15.6166 8.79309..." fill="#2C3E50" />
        <path d="M18.6001 17.7186..." fill="#2C3E50" />
        <path d="M6.20684 4.76691..." fill="#3F5C6C" />
      </g>
      <defs>
        <clipPath id="clip0_108_1539">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartDogIcon;
