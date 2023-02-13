import Image from "next/image";
import { useEffect, useState } from "react";

function BgImg({ src }: { src: string }) {
  return (
    <div className="h-auto w-full">
      <Image src={src} alt="" width={500} height={500} />
    </div>
  );
}

export default function IntroBg({ children }: { children: any }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(-window.scrollY / 2);
    });
  });

  return (
    <div
      className="h-screen overflow-y-auto overflow-x-hidden"
      style={{ perspective: "1px" }}
    >
      <div className="z-10">{children}</div>
      <div
        id="introBgContainer"
        className=""
        style={{ transform: "translateZ(-1px) scale(2)" }}
      >
        <div
          id="introBg"
          className="w-full max-w-[calc(5*500px)] columns-1 gap-0 opacity-20 mobile:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
        >
          <BgImg src="/images/bg/bg-02.webp" />
          <BgImg src="/images/bg/bg-03.webp" />
          <BgImg src="/images/bg/bg-04.webp" />
          <BgImg src="/images/bg/bg-05.webp" />
          <BgImg src="/images/bg/bg-06.webp" />
          <BgImg src="/images/bg/bg-07.webp" />
          <BgImg src="/images/bg/bg-08.webp" />
          <BgImg src="/images/bg/bg-09.webp" />
          <BgImg src="/images/bg/bg-10.webp" />
          <BgImg src="/images/bg/bg-11.webp" />
          <BgImg src="/images/bg/bg-12.webp" />
          <BgImg src="/images/bg/bg-13.webp" />
          <BgImg src="/images/bg/bg-14.webp" />
          <BgImg src="/images/bg/bg-15.webp" />
          <BgImg src="/images/bg/bg-16.webp" />
          <BgImg src="/images/bg/bg-17.webp" />
          <BgImg src="/images/bg/bg-18.webp" />
          <BgImg src="/images/bg/bg-19.webp" />
          <BgImg src="/images/bg/bg-20.webp" />
          <BgImg src="/images/bg/bg-21.webp" />
          <BgImg src="/images/bg/bg-22.webp" />
          <BgImg src="/images/bg/bg-23.webp" />
          <BgImg src="/images/bg/bg-24.webp" />
        </div>
      </div>
    </div>
  );
}
