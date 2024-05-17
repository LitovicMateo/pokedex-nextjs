"use client";

import { fetchPokemonDescription } from "@/actions";
import Description from "@/components/Description";
import BottomScreen from "@/components/layout/BottomScreen";
import Controls from "@/components/layout/Controls";
import TopScreen from "@/components/layout/TopScreen";
import { DeviceContext } from "@/context/deviceContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Home() {
	const deviceCtx = useContext(DeviceContext);

	const [activePokemon, setActivePokemon] = useState<number>(1);
	const [description, setDescription] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	const topScreenHandler = () => {
		deviceCtx.setPowerState(!deviceCtx.powerState);
	};

	const switchActivePokemon = (number: number) => {
		setActivePokemon((prev) => prev + number);
	};

	const switchActiveMode = (mode: "info" | "stats" | "moves") => {
		deviceCtx.setModeState(mode);
	};

	useEffect(() => {
		const fetchDescription = async () => {
			try {
				const desc = await fetchPokemonDescription(activePokemon);
				setDescription(desc);
				setError(null);
			} catch (error) {
				setError("Failed to fetch Pokemon description");
			}
		};
		fetchDescription();
	}, [activePokemon]);

	return (
		<>
			<TopScreen isOn={deviceCtx.powerState}>
				<div className="w-full h-full flex justify-center items-center">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${activePokemon}.png`}
						className="h-full aspect-square z-50"
					/>
				</div>
				<div
					style={{
						background:
							"radial-gradient(40% 40% at 50% 50%, rgba(0, 108, 116, 0.75) 0%, rgba(0, 108, 116, 0.23) 50%, rgba(0, 108, 116, 0) 100%)",
					}}
					className="w-[200px] h-[40px] absolute bottom-[60px] rounded-full left-0 right-0 mx-auto z-20 "
				></div>
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
					deviceCtx.modeState === "info" && <Description description={description} />
				)}
			</BottomScreen>
		</>
	);
}
