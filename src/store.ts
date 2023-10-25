import { atomWithStorage } from "jotai/utils";

// dark mode atom
export const themeAtom = atomWithStorage("theme", "light");
export const logged = atomWithStorage("logged", true);
