import React from "react";

const Circle = () => (
  <div className="w-[55px] aspect-square rounded-full bg-[#76F7FF] border-solid border-[6px] border-[#3F0909]"></div>
);

const ControlButton = ({ className }: {className: string}) => (
  <div className={`h-[50px] aspect-square bg-[#6A2323] ${className} flex justify-center items-center`}>
    <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
  </div>
);

const Controls = () => {
  const circles = Array(4).fill(null);
  const controlButtons = [
    { className: "rounded-t-3xl" },
    { className: "rounded-l-3xl" },
    { className: "" },
    { className: "rounded-r-3xl" },
    { className: "" },
    { className: "rounded-b-3xl" },
  ];

  return (
    <div className="flex justify-between items-center w-full p-8 gap-6">
      <div className="text-center w-full grid grid-cols-2 gap-2">
        {circles.map((_, index) => (
          <Circle key={index} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-3 justify-center items-center gap-2">
          {controlButtons.map((button, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 && <div className="h-[50px] aspect-square"></div>}
              <ControlButton className={button.className} />
              {index % 2 === 1 && <div className="h-[50px] aspect-square"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Controls;
