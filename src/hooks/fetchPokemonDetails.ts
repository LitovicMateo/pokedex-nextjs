/*

Custom Hook that makes a call to PokeAPI, fetches Pokemon Bio and his Description,
transforms the data, and returns it along with 'loading' and 'error' state.

*/

import { useEffect, useState } from "react";

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

type PokemonDetailsAPI = {
  name: string;
  weight: number;
  types: PokemonDetailsTypeAPI[];
  stats: PokemonDetailsStatsAPI[];
};

type PokemonDetailsTypeAPI = {
  type: {
    name: string;
  };
};

type PokemonDetailsStatsAPI = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type PokemonDescriptionAPI = {
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
      };
    }[];
  };

const POKEAPI_URI = "https://pokeapi.co/api/v2";

const statAcronyms = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
const maxStats = [255, 180, 200, 180, 200, 200];

export const useFetchPokemon = (
  id: number
): { pokemon: PokemonDetails | null; isLoading: boolean; error: string | undefined } => {
  const [details, setDetails] = useState<PokemonDetailsAPI>();
  const [description, setDescription] = useState<string>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const normalizeDescription = (data: PokemonDescriptionAPI) => {
    const english = data.flavor_text_entries.filter((e: any) => e.language.name === "en");

    const description = english[0].flavor_text.replace(/[\n\f]/g, " ");

    return description;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const detailsUrl = `${POKEAPI_URI}/pokemon/${id}/`;
      const descriptionUrl = `${POKEAPI_URI}/pokemon-species/${id}/`;

      try {
        fetch(detailsUrl)
          .then((res) => res.json())
          .then((data) => setDetails(data));

        fetch(descriptionUrl)
          .then((res) => res.json())
          .then((data) => normalizeDescription(data))
          .then((nData) => setDescription(nData));
      } catch (err) {
        setError("Fetching pokemon details failed");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  let pokemon: PokemonDetails | null = null;

  if (details && description) {
    pokemon = {
      name: details.name,
      description,
      type: details.types[0].type.name,
      stats: details.stats.map((s, i) => {
        return {
          shortStat: statAcronyms[i],
          stat: s.stat.name,
          value: s.base_stat,
          statGrade: Math.round((s.base_stat / maxStats[i]) * 100).toString() + "%",
        };
      }),
    };
  }

  return {
    pokemon,
    isLoading,
    error,
  };
};
