"use client";

import { fetchPokemonById, fetchPokemonDescription } from "@/actions";
import Description from "@/components/Description";
import PokemonImage from "@/components/Image";
import BottomScreen from "@/components/layout/BottomScreen";
import Controls from "@/components/layout/Controls";
import TopScreen from "@/components/layout/TopScreen";
import Moves from "@/components/Moves";
import Stats from "@/components/Stats";
import { DeviceContext } from "@/context/deviceContext";
import { useFetchPokemon } from "@/hooks/fetchPokemonDetails";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export type PokemonDetails = {
  name: string;
  description: string;
  type: string;
  stats: {
    shortStat: string;
    stat: string;
    value: number;
    statGrade: string;
  }[];
};

export default function Home() {
  const deviceCtx = useContext(DeviceContext);

  const [activePokemonId, setActivePokemonId] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { pokemon } = useFetchPokemon(activePokemonId);

  const topScreenHandler = () => {
    deviceCtx.setPowerState(!deviceCtx.powerState);
  };

  const switchActivePokemon = (number: number) => {
    setActivePokemonId((prev) => prev + number);
  };

  const switchActiveMode = (mode: "info" | "stats" | "moves") => {
    deviceCtx.setModeState(mode);
  };

  return (
    <>
      <TopScreen isOn={deviceCtx.powerState}>
        <div className="w-full h-full flex justify-center items-center">
          {pokemon && (
            <PokemonImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${activePokemonId}.png`}
              alt={pokemon!.name}
            />
          )}
        </div>
      </TopScreen>
      <Controls
        changeMode={switchActiveMode}
        deviceIsOn={deviceCtx.powerState}
        activeMode={deviceCtx.modeState}
        activePokemon={switchActivePokemon}
        topScreen={topScreenHandler}
      />
      <BottomScreen isOn={deviceCtx.powerState}>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          (deviceCtx.modeState === "info" && pokemon && <Description description={pokemon!.description} />) ||
          (deviceCtx.modeState === "stats" && <Stats stats={pokemon!.stats} />) ||
          (deviceCtx.modeState === "moves" && <Moves moves={pokemon!.moves} />)
        )}
      </BottomScreen>
    </>
  );
}
