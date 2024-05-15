"use server"

const POKEAPI_URI = "https://pokeapi.co/api/v2"

type Pokemon = {
    name: string;
    description: string;
    type: string;
    frontImg: string;
    backImg: string
}

type PokemonListItem = {
    name: string;
    url: string
}

export const fetchAllPokemons = async(): Promise<PokemonListItem[]> => {
    const res = await fetch(`${POKEAPI_URI}/pokemon?limit=700`);
    const data = await res.json()
    return data.results;
}

export const fetchPokemonFromGeneration = async() => {

}

export const fetchPokemonByType = async() => {

}

export const fetchPokemonById = async(id: number) => {
    console.log("FP by ID Called");
    
    const res = await fetch(`${POKEAPI_URI}/pokemon/${id}/`);
    const data = await res.json()
    return data
}

export const fetchPokemonDescription = async(id: number): Promise<string> => {
    const res = await fetch(`${POKEAPI_URI}/pokemon-species/${id}/`)
    const data = await res.json()
    const english = data.flavor_text_entries.filter((e: any) => e.language.name === 'en')
    
    return english[0].flavor_text.replace(/[\n\f]/g, " ");
    
}

export const fetchPokemonSprite = async(id: number) => {
    const front = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`

    return [front, back]
}
