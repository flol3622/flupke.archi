import { atom } from "recoil";

type visibility = boolean;

const menuDrop = atom<visibility>({
  key: "menuDrop",
  default: false,
});

export default menuDrop;
