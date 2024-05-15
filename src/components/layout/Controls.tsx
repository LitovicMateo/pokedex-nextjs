import React from "react";
import Button from "../ui/Button";

const Controls = () => {
  return (
    <div className="flex justify-between items-center w-full  gap-6">
      <div className=" scale-75 md:scale-100 w-full flex flex-wrap gap-8 justify-center">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <div className="w-full scale-90 md:scale-100 flex justify-center items-center">
        <div className="grid grid-cols-3 w-fit grid-rows-3 justify-center items-center">
          <div className="h-[50px] aspect-square"></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-t-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
          </div>
          <div className="h-[50px] aspect-square "></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-l-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
          </div>
          <div className="h-[50px] aspect-square bg-[#6A2323]"></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-r-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
          </div>
          <div className="h-[50px] aspect-square "></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-b-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
          </div>
          <div className="h-[50px] aspect-square "></div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
