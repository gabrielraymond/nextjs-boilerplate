// stores/useUIStore.ts
import { create } from "zustand";

type UIState = {
  theme: "light" | "dark";
  isSideBarShow: boolean;
  toggleSidebar: () => void;
  toggleTheme: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: "light",
  isSideBarShow: true,
  toggleSidebar: () => set((state) => ({ isSideBarShow: !state.isSideBarShow })),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
