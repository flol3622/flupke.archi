import React, { useState, useEffect } from "react";
import Image from "next/image";

function BgImg({ src }: { src: string }) {
  return (
    <div className="h-[40vh] flex-grow">
      <img
        src={src}
        className="max-h-full min-w-full object-cover align-bottom"
      />
    </div>
  );
}

export default function IntroBg() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(-window.scrollY / 2);
    });
  });

  return (
    <div
      id="introBg"
      className={`fixed -z-10 flex w-screen flex-wrap opacity-30`}
      style={{ transform: `translateY(${scroll}px)` }}
    >
      <BgImg src="/images/bg/bg-01.webp" />
      <BgImg src="/images/bg/bg-02.webp" />
      <BgImg src="/images/bg/bg-03.webp" />
      <BgImg src="/images/bg/bg-04.webp" />
      <BgImg src="/images/bg/bg-05.webp" />
      <BgImg src="/images/bg/bg-06.webp" />
      <BgImg src="/images/bg/bg-07.webp" />
      <BgImg src="/images/bg/bg-08.webp" />
      <BgImg src="/images/bg/bg-09.webp" />
      <BgImg src="/images/bg/bg-10.webp" />
    </div>
  );
}
