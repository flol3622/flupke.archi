import Image from "next/image";

function BgImg({ src }: { src: string }) {
  return (
    <div className="h-auto w-full">
      <Image src={src} alt="" width={500} height={500} />
    </div>
  );
}

export default function IntroBg() {
  return (
    <div id="introBgContainer" className="flex justify-center">
      <div
        id="introBg"
        className="absolute  top-16 -z-20 w-full max-w-[calc(5*500px)] columns-1 gap-0 mobile:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
        style={{ opacity: "0.15" }}
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
  );
}
