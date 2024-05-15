import React from "react";
import Button from "../ui/Button";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ListIcon from "@mui/icons-material/List";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type ControlsProps = {
  topScreen: () => void;
  deviceIsOn: boolean;
  activeMode: "info" | "stats" | "moves";
  activePokemon: (number: number) => void;
  changeMode: (mode: "info" | "stats" | "moves") => void
};

const Controls: React.FC<ControlsProps> = ({ topScreen, activePokemon, deviceIsOn, activeMode,changeMode }) => {
  const activateScreen = async () => {
    topScreen();
  };

  const switchMode = (mode: "info" | "stats" | "moves") => {
    changeMode(mode)
  };

  const handleSwitch = (n: number) => {
    activePokemon(n);
  };
  return (
    <div className="flex justify-between items-center w-full  gap-6">
      <div className=" scale-75 md:scale-100 w-full flex flex-wrap gap-8 justify-center">
        <div className="flex gap-8 w-full">
          <Button
            state={deviceIsOn}
            variation="power"
            icon={<PowerSettingsNewIcon fontSize="large" />}
            action={activateScreen}
          />
          <Button
            currentMode={activeMode}
            label="info"
            state={deviceIsOn}
            variation="mode"
            icon={<InfoOutlinedIcon fontSize="large" />}
            action={switchMode.bind(null, "info")}
          />
        </div>
        <div className="flex gap-8 w-full">
          <Button
            currentMode={activeMode}
            label="stats"
            state={deviceIsOn}
            variation="mode"
            icon={<BarChartIcon fontSize="large" />}
            action={switchMode.bind(null, "stats")}
          />
          <Button
            currentMode={activeMode}
            label="moves"
            state={deviceIsOn}
            variation="mode"
            icon={<ListIcon fontSize="large" />}
            action={switchMode.bind(null, "moves")}
          />
        </div>
      </div>
      <div className="w-full scale-90 md:scale-100 flex justify-center items-center">
        <div className="grid grid-cols-3 w-fit grid-rows-3 justify-center items-center">
          <div className="h-[50px] aspect-square"></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-t-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center -rotate-90 text-[#b94747]">
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
          <div className="h-[50px] aspect-square "></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-l-3xl flex justify-center items-center">
            <div
              onClick={handleSwitch.bind(null, -1)}
              className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center rotate-180 text-[#b94747]"
            >
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
          <div className="h-[50px] aspect-square bg-[#6A2323]"></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-r-3xl flex justify-center items-center">
            <div
              onClick={handleSwitch.bind(null, 1)}
              className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center text-[#b94747]"
            >
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
          <div className="h-[50px] aspect-square "></div>
          <div className="h-[50px] aspect-square bg-[#6A2323] rounded-b-3xl flex justify-center items-center">
            <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center rotate-90 text-[#b94747]">
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
          <div className="h-[50px] aspect-square "></div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
