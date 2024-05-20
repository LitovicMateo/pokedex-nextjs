

export type PokemonDetails = {
  name: string;
  description: string;
  type: string;
  moves: PokemonMoves[],
  stats: Stat[];
};;

type Stat = {
  shortStat: string;
  stat: string;
  value: number;
  statGrade: string;

}

type PokemonMoves = {
  name: string;
  accuracy: string;
  powerPoints: number;
  power: number;
  damage_class: {
    name: string
  },
  type: {
    name: string
  }
}