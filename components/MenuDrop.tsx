import menuDrop from "@/recoil/menuDrop";
import { useRecoilValue } from "recoil";

export default function MenuDrop() {
  return (
    <ul
      className={`fixed right-0 top-16 z-20 w-28 text-center font-body transition duration-500 ease-in-out ${
        useRecoilValue(menuDrop) ? "translate-x-0" : "translate-x-28"
      }`}
    >
      <li
        className="border-b border-l border-black bg-white p-2"
        style={{ borderBottomStyle: "dashed" }}
      >
        Home
      </li>
      <li
        className="border-b border-l border-black bg-white p-2"
        style={{ borderBottomStyle: "dashed" }}
      >
        Projects
      </li>
      <li
        className="border-b border-l border-black bg-white p-2"
        style={{ borderBottomStyle: "dashed" }}
      >
        Blog
      </li>
      <li className="border-b border-l border-black bg-white p-2">About</li>
    </ul>
  );
}
