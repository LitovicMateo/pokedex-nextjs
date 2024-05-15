"use client";

import BottomScreen from "@/components/layout/BottomScreen";
import Controls from "@/components/layout/Controls";
import TopScreen from "@/components/layout/TopScreen";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [screenIsOn, setScreenIsOn] = useState(false);
  const [activePokemon, setActivePokemon] = useState<number>(1)

  const topScreenHandler = () => {
    setScreenIsOn((prev) => !prev);
  };

  const switchActivePokemon = (number: number) => {
    setActivePokemon(prev => prev + number)
  }

  return (
    <main className="flex flex-col gap-[30px] justify-start items-center bg-gradient-to-br p-[32px] pt-[64px] from-[#B63838] to-[#B22424] h-svh w-full max-h-[930px] max-w-[430px] rounded-md ">
      <TopScreen isOn={screenIsOn}>
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${activePokemon}.png`}
            className="h-[240px] w-[240px] z-50"
          />
        </div>
        <div style={{
          background: "radial-gradient(40% 40% at 50% 50%, rgba(0, 108, 116, 0.75) 0%, rgba(0, 108, 116, 0.23) 50%, rgba(0, 108, 116, 0) 100%)"
        }} className="w-[200px] h-[40px] absolute bottom-[60px] rounded-full left-0 right-0 mx-auto z-20 "></div>
      </TopScreen>
      <Controls activePokemon={switchActivePokemon} topScreen={topScreenHandler} />
      <BottomScreen isOn={screenIsOn}></BottomScreen>
    </main>
  );
}

/* Shadow */

