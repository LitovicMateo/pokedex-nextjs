"use client";

import React, { useState } from "react";

type ButtonProps = {
  state: boolean;
  action(): void;
  variation: "power" | "mode";
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ action, variation, icon, state }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const activeButton = variation === "power" ? "bg-green-500" : "bg-[#76F7FF]";
  const inactiveButton = variation === "power" ? "bg-red-500" : "bg-[#0F696F]";

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
    action();
  };

  return (
    <button
      onClick={clickHandler}
      className={`${
        state ? (isClicked ? inactiveButton : activeButton) : inactiveButton
      } w-[55px] flex justify-center items-center aspect-square rounded-full border-solid border-[4px] md:border-[6px]  border-[#3F0909]`}
    >
      {icon}
    </button>
  );
};

export default Button;
