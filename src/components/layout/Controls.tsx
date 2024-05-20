import React from "react";
import Button from "../ui/Button";

import DPad from "../DPad";
import ButtonsMenu from "../ButtonsMenu";

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
      <ButtonsMenu activeMode={activeMode} handleMode={switchMode} devicePower={deviceIsOn} handlePower={topScreen} />
      <DPad handleSideButtons={handleSwitch} />
    </div>
  );
};

export default Controls;
