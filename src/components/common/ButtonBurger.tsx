"use client";

import { useUIStore } from "@/stores/useUIStore";
import MyIcon from "./MyIcon";

const ButtonBurger = () => {
  const { toggleSidebar } = useUIStore();

  return (
    <div onClick={() => toggleSidebar()} className="cursor-pointer hover:text-slate-400">
      <MyIcon src="/assets/icons/ic-burger.svg" width={32} height={32} />
    </div>
  );
};

export default ButtonBurger;
