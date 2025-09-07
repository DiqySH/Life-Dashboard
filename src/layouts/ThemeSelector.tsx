import ThemeButton from "@/components/ui/ThemeButton";
import React from "react";
import { Outlet } from "react-router";

const ThemeSelector: React.FC = () => {
  return (
    <>
      <div className="w-full fixed grid place-items-end px-5 pt-5">
        <ThemeButton />
      </div>
      <Outlet />
    </>
  );
};

export default ThemeSelector;
