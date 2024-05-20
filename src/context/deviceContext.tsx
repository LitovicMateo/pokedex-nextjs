"use client"

import React, { createContext, useState } from "react";

type DeviceState = {
  powerState: boolean;
  modeState: "info" | "moves" | "stats";
  setPowerState: (newPowerState: boolean) => void;
  setModeState: (newModeState: "info" | "moves" | "stats") => void;
};

const defaultValue: DeviceState = {
  powerState: false,
  modeState: "info",
  setPowerState: () => {},
  setModeState: () => {},
};

export const DeviceContext = createContext<DeviceState>(defaultValue);

export const DeviceContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [power, setPower] = useState(defaultValue.powerState);
  const [mode, setMode] = useState<DeviceState["modeState"]>(defaultValue.modeState);

  // Setter functions
  const setPowerState = (newPowerState: boolean) => {
    setPower(newPowerState);
  };

  const setModeState = (newModeState: DeviceState["modeState"]) => {
    setMode(newModeState);
  };

  const contextValue = {
    powerState: power,
    modeState: mode,
    setPowerState,
    setModeState,
  };

  return (
    <DeviceContext.Provider value={contextValue}>
      {children}
    </DeviceContext.Provider>
  );
};
