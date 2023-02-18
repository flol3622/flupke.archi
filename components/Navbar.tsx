import menuDrop from "@/recoil/menuDrop";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { Menu, SingeBlack } from "./icons";
import MenuDrop from "./MenuDrop";

export default function Navbar() {
  const [menuDropState, setMenuDrop] = useRecoilState(menuDrop);

  return (
    <>
      <nav className="fixed z-10 flex w-full">
        <div className="flex h-16 w-16 items-center justify-center border-b border-black bg-white">
          <Link href="/" onClick={() => setMenuDrop(false)}>
            <SingeBlack className="text-5xl" />
          </Link>
        </div>
        <div className="flex h-16 grow items-center justify-center border-b border-l border-black bg-white font-title text-base sm:text-xl lg:justify-end lg:pr-5">
          Flupke
        </div>
        <div className="text flex h-16 grow items-center justify-center border-b border-l border-black bg-white font-title text-base sm:text-xl lg:justify-start lg:pl-5">
          Philippe Soubrier
        </div>
        <div
          onClick={() => setMenuDrop(!menuDropState)}
          className="flex h-16 w-16 items-center justify-center border-b border-l border-black bg-white"
        >
          <Menu className="text-xl" />
        </div>
      </nav>
      <MenuDrop />
    </>
  );
}
