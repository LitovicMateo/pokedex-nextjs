import React from "react";

const Controls = () => {
  return (
    <div className="flex justify-between items-center w-full p-8 gap-6">
      <div className="text-center w-full grid grid-cols-2 gap-2">
        <div className="w-[55px] aspect-square rounded-full bg-[#76F7FF] border-solid border-[6px] border-[#3F0909]"></div>
        <div className="w-[55px] aspect-square rounded-full bg-[#76F7FF] border-solid border-[6px] border-[#3F0909]"></div>
        <div className="w-[55px] aspect-square rounded-full bg-[#76F7FF] border-solid border-[6px] border-[#3F0909]"></div>
        <div className="w-[55px] aspect-square rounded-full bg-[#76F7FF] border-solid border-[6px] border-[#3F0909]"></div>
      </div>
      <div className="w-full flex justify-center items-center">
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
