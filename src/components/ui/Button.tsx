"use client";

import React, { useState } from "react";

type ButtonProps = {
  state: boolean;
  action(): void;
  currentMode?: string;
  label?: string;
  variation: "power" | "mode";
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ action, variation, icon, state, currentMode, label }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  let buttonBg;

  if (variation === "power") {
    if (state) {
      buttonBg = "bg-green-500";
    } else {
      buttonBg = "bg-red-500";
    }
  }

  if (variation === "mode") {
    if (state) {
      if (currentMode === label) {
        buttonBg = "bg-[#76F7FF]";
      } else {
        buttonBg = "bg-[#0F696F]";
      }
    } else {
      buttonBg = "bg-[#0F696F]";
    }
  }

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
    action();
  };

  return (
    <button
      disabled={!state && variation === "mode"}
      onClick={clickHandler}
      className={`${buttonBg} w-[55px] flex justify-center items-center aspect-square rounded-full border-solid border-[4px] md:border-[6px]  border-[#3F0909]`}
    >
      {icon}
    </button>
  );
};

export default Button;
