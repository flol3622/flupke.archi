import Image from "next/image";
import menuIcon from "../public/icons/menu.svg";
import logo from "../public/icons/single-black.svg";

export default function Navbar() {
  return (
    <nav className="fixed z-10 flex w-full">
      <div className="flex h-16 w-16 items-center justify-center border-b border-black bg-white">
        <Image src={logo} alt="my logo" height={45} />
      </div>
      <div className="flex h-16 grow items-center justify-center border-b border-l border-black bg-white font-title text-base sm:text-xl lg:justify-end lg:pr-5">
        Flupke
      </div>
      <div className="text flex h-16 grow items-center justify-center border-b border-l border-black bg-white font-title text-base sm:text-xl lg:justify-start lg:pl-5">
        Philippe Soubrier
      </div>
      <div className="flex h-16 w-16 items-center justify-center border-b border-l border-black bg-white">
        <Image src={menuIcon} alt="///" width={24} height={20} />
      </div>
    </nav>
  );
}
