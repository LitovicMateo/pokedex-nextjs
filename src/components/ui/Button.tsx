"use client";

import React, { useState } from "react";

type ButtonProps = {
  action(): void;
  variation: "power" | "mode";
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ action, variation, icon }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const activeButton = variation === "power" ? "bg-green-500" : "bg-[#76F7FF]";
  const inactiveButton = variation === "power" ? "bg-red-500" : "bg-[#13A3AC]";

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
    action();
  };

  return (
    <button
      onClick={clickHandler}
      className={`${
        isClicked ? inactiveButton : activeButton
      } w-[55px] flex justify-center items-center aspect-square rounded-full border-solid border-[4px] md:border-[6px]  border-[#3F0909]`}
    >
      {icon}
    </button>
  );
};

export default Button;
