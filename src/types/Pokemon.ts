import { IPokemonStat } from "./PokemonStats";
import { ITypes } from "./PokemonTypes";



export interface IPokemon {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    };
    types: ITypes[];
    stats: IPokemonStat[];

}