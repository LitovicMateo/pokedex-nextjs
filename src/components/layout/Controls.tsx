import React from "react";
import Button from "../ui/Button";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

type ControlsProps = {
  topScreen: () => void;
  deviceIsOn: boolean;
  activePokemon: (number: number) => void;
};

const Controls: React.FC<ControlsProps> = ({ topScreen, activePokemon,deviceIsOn }) => {
  const dummyFunc = async () => {
    topScreen();
  };

  const handleSwitch = (n: number) => {
    activePokemon(n);
  };
  return (
    <div className="flex justify-between items-center w-full  gap-6">
      <div className=" scale-75 md:scale-100 w-full flex flex-wrap gap-8 justify-center">
        <div className="flex gap-8 w-full">
          <Button state={deviceIsOn} variation="power" icon={<PowerSettingsNewIcon fontSize="large" />} action={dummyFunc} />
          <Button state={deviceIsOn} variation="mode" action={dummyFunc} />
        </div>
        <div className="flex gap-8 w-full">
          <Button state={deviceIsOn} variation="mode" action={dummyFunc} />
          <Button state={deviceIsOn} variation="mode" action={dummyFunc} />
        </div>
      </div>
      <div className="w-full scale-90 md:scale-100 flex justify-center items-center">
        <div className="grid grid-cols-3 w-fit grid-rows-3 justify-center items-center">
          <div className="h-[50px] aspect-square"></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-t-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
          </div>
          <div className="h-[50px] aspect-square "></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-l-3xl flex justify-center items-center">
            <div
              onClick={handleSwitch.bind(null, -1)}
              className="w-[75%] aspect-square bg-[#4d1919] rounded-full"
            ></div>
          </div>
          <div className="h-[50px] aspect-square bg-[#6A2323]"></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-r-3xl flex justify-center items-center">
            <div onClick={handleSwitch.bind(null, 1)} className="w-[75%] aspect-square bg-[#4d1919] rounded-full"></div>
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
