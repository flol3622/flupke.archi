import Image from "next/image";
import * as Bg from "../public/images/bg";

export default function IntroBg() {
  return (
    <div id="introBgContainer" className="flex justify-center">
      <div
        id="introBg"
        className="absolute  top-16 -z-20 w-full max-w-[calc(5*500px)] columns-1 gap-0 mobile:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
        style={{ opacity: "0.15" }}
      >
        {Bg.default.map((item, i) => (
          <div key={i} className="h-auto w-full">
            <Image
              placeholder="blur"
              key={i}
              src={item}
              alt=""
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
