import Image from "next/image";
import menuIcon from "../public/icons/menu.svg";
import logo from "../public/icons/single-black.svg";

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="flex h-14 w-14 items-center justify-center border-b border-black">
        <Image src={logo} alt="my logo" height={40} />
      </div>
      <div className="flex h-14 grow items-center justify-center border-b border-l border-black font-title text-lg sm:text-xl">
        Flupke
      </div>
      <div className="text flex h-14 grow items-center justify-center border-b border-l border-black font-title text-lg sm:text-xl">
        Philippe Soubrier
      </div>
      <div className="flex h-14 w-14 items-center justify-center border-b border-l border-black">
        <Image src={menuIcon} alt="///" width={24} height={20} />
      </div>
    </nav>
  );
}
