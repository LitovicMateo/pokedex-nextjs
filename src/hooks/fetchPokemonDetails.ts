/*

Custom Hook that makes a call to PokeAPI, fetches Pokemon Bio and his Description,
transforms the data, and returns it along with 'loading' and 'error' state.

*/
import { useEffect, useState } from "react";
import { PokemonDetails } from "@/lib/types/PokemonAPI";

type PokemonDetailsAPI = {
  name: string;
  weight: number;
  types: PokemonDetailsTypeAPI[];
  stats: PokemonDetailsStatsAPI[];
  moves: { move: { url: string } }[];
};

type PokemonDetailsTypeAPI = {
  type: { name: string };
};

type PokemonDetailsStatsAPI = {
  base_stat: number;
  stat: { name: string };
};

type PokemonDescriptionAPI = {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
};

const POKEAPI_URI = "https://pokeapi.co/api/v2";

const statAcronyms = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
const maxStats = [255, 180, 200, 180, 200, 200];

export const useFetchPokemon = (
  id: number
): { pokemon: PokemonDetails | null; isLoading: boolean; error: string | undefined } => {
  const [details, setDetails] = useState<PokemonDetailsAPI | null>(null);
  const [moves, setMoves] = useState<PokemonDetails["moves"] | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetails = async (): Promise<string[]> => {
      try {
        const res = await fetch(`${POKEAPI_URI}/pokemon/${id}/`);
        if (!res.ok) throw new Error("Failed to fetch details");
        const data: PokemonDetailsAPI = await res.json();
        setDetails(data);
        return data.moves.map(move => move.move.url);
      } catch (err) {
        setError("Fetching pokemon details failed");
        setIsLoading(false);
        throw err;
      }
    };

    const fetchMoves = async (moveUrls: string[]) => {
      try {
        const responses = await Promise.all(moveUrls.map(url => fetch(url)));
        const movesData = await Promise.all(responses.map(res => res.json()));
        setMoves(movesData);
      } catch {
        setError("Fetching moves failed");
      }
    };

    const fetchDescription = async () => {
      try {
        const res = await fetch(`${POKEAPI_URI}/pokemon-species/${id}/`);
        if (!res.ok) throw new Error("Failed to fetch description");
        const data: PokemonDescriptionAPI = await res.json();
        setDescription(normalizeDescription(data));
      } catch {
        setError("Fetching description failed");
      }
    };

    const normalizeDescription = (data: PokemonDescriptionAPI): string => {
      const english = data.flavor_text_entries.find(entry => entry.language.name === "en");
      return english ? english.flavor_text.replace(/[\n\f]/g, " ") : "";
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const moveUrls = await fetchDetails();
        await Promise.all([fetchMoves(moveUrls), fetchDescription()]);
      } catch {
        // Error already handled in individual functions
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  let pokemon: PokemonDetails | null = null;

  if (details && description && moves) {
    pokemon = {
      name: details.name,
      description,
      moves,
      type: details.types[0].type.name,
      stats: details.stats.map((s, i) => ({
        shortStat: statAcronyms[i],
        stat: s.stat.name,
        value: s.base_stat,
        statGrade: Math.round((s.base_stat / maxStats[i]) * 100).toString() + "%",
      })),
    };
  }

  return { pokemon, isLoading, error };
};
