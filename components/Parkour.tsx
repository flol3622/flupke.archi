import Image from "next/image";
import link from "../public/icons/box-arrow-up-right.svg";

function Spacer({ children, url }: { children: any; url?: string }) {
  return (
    <>
      <div className="h-3 border-l border-black" />
      <p className="text-center">
        {children}
        <a href={url}>
          <Image src={link} alt="" height={10} className="ml-1 mb-1 inline" />
        </a>
      </p>
    </>
  );
}

export default function Parkour() {
  return (
    <>
      <h2 className="font-title text-lg sm:text-xl">Parkour</h2>
      <Spacer url="https://studiekiezer.ugent.be/bachelor-of-science-in-engineering-architecture/2023">
        Bachelor of Science in Engineering:
        <br />
        Architecture
      </Spacer>
      <Spacer url="https://www.urbanplatform.com/">
        Internship at Urban Platform
      </Spacer>
      <Spacer url="https://b-b.be/en/">
        Internship at Bureau Bouwtechniek
      </Spacer>
      <Spacer url="https://studiekiezer.ugent.be/master-of-science-in-de-ingenieurswetenschappen-architectuur-architectuurontwerp-en-bouwtechniek/2023">
        Master of Science in Engineering: Architecture
        <br />
        (Architectural Design and Construction Techniques)
      </Spacer>
    </>
  );
}
