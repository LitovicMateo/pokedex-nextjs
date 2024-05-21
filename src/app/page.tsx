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
import { useContext, useState, useCallback } from "react";
import { debounce } from 'lodash';

export default function Home() {
  const deviceCtx = useContext(DeviceContext);

  const [activePokemonId, setActivePokemonId] = useState<number>(1);

  const { pokemon, isLoading, error } = useFetchPokemon(activePokemonId);

  const topScreenHandler = useCallback(() => {
    deviceCtx.setPowerState(!deviceCtx.powerState);
  }, [deviceCtx]);

  const switchActivePokemon = useCallback(debounce((number: number) => {
    setActivePokemonId((prev) => {
      if (prev === 1 && number === -1) {
        return prev;
      }
      return prev + number;
    });
  }, 300), []); // Adjust the delay time (in milliseconds) as needed

  const switchActiveMode = useCallback((mode: "info" | "stats" | "moves") => {
    deviceCtx.setModeState(mode);
  }, [deviceCtx]);

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
      <BottomScreen isOn={deviceCtx.powerState}>
        {!pokemon ? (
          <div>Loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            {deviceCtx.modeState === "info" && (
              <Description name={pokemon!.name} description={pokemon!.description} />
            )}
            {deviceCtx.modeState === "stats" && <Stats stats={pokemon!.stats} />}
            {deviceCtx.modeState === "moves" && <Moves moves={pokemon!.moves} />}
          </>
        )}
      </BottomScreen>
      <Controls
        changeMode={switchActiveMode}
        deviceIsOn={deviceCtx.powerState}
        activeMode={deviceCtx.modeState}
        activePokemon={switchActivePokemon}
        topScreen={topScreenHandler}
      />
    </>
  );
}
