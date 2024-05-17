import React from "react";

type BottomScreenProps = {
  isOn: boolean;
  children?: React.ReactNode;
};

const BottomScreen: React.FC<BottomScreenProps> = ({ isOn, children }) => {
  return (
    <div
      id="screen"
      className={`${
        isOn ? "bg-[#C3FBFF]" : "bg-black"
      } h-[334px] max-h-[full] w-[366px] max-w-full flex justify-center items-center border-solid border-8 border-[#6A2323]`}
    >
      {children}
    </div>
  );
};

export default BottomScreen;
