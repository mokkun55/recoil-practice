import { atom } from "recoil";

export const countAtom = atom({
  key: "count",
  default: 0,
});

export const textAtom = atom({
  key: "text",
  default: "",
});
