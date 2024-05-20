import React from 'react'
import Button from './ui/Button'

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ListIcon from "@mui/icons-material/List";

type ButtonsMenuProps = {
  devicePower: boolean;
  activeMode: "info" | "moves" | "stats";
  handlePower: () => void
  handleMode: (mode: "info" | "moves" | "stats") => void
}


const ButtonsMenu: React.FC<ButtonsMenuProps> = ({ devicePower, activeMode, handleMode, handlePower}) => {
  return (
    <div className=" scale-75 md:scale-100 w-full flex flex-wrap gap-8 justify-center">
    <div className="flex gap-8 w-full">
      <Button
        state={devicePower}
        variation="power"
        icon={<PowerSettingsNewIcon fontSize="large" />}
        action={handlePower}
      />
      <Button
        currentMode={activeMode}
        label="info"
        state={devicePower}
        variation="mode"
        icon={<InfoOutlinedIcon fontSize="large" />}
        action={handleMode.bind(null, "info")}
      />
    </div>
    <div className="flex gap-8 w-full">
      <Button
        currentMode={activeMode}
        label="stats"
        state={devicePower}
        variation="mode"
        icon={<BarChartIcon fontSize="large" />}
        action={handleMode.bind(null, "stats")}
      />
      <Button
        currentMode={activeMode}
        label="moves"
        state={devicePower}
        variation="mode"
        icon={<ListIcon fontSize="large" />}
        action={()=>handleMode("moves")}      />
    </div>
  </div>
)
}

export default ButtonsMenu