import React, { useState, useEffect  } from 'react';
import { IListResults } from '../types/ListResults';
import { IListItem } from '../types/PokemonItem';

const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4' 

interface PokemonTypeResult {
    slot: number;
    pokemon: {
        name: string;
        url: string;
    }
}

interface ITypeResults {
    pokemon: PokemonTypeResult[]
}

const useGetPokemons = (pokeUrl: string) => {
    const [pokemons, setPokemons] = useState<IListItem[]>([])

    useEffect(() => {
        (async () => {
            let res;
            if (pokeUrl) {
                res = await fetch(pokeUrl);
                const data = await res.json() as ITypeResults;
                const pokes = data.pokemon.map((value) => value.pokemon)
                
                setPokemons(pokes)
            } else {
                res = await fetch(URL)
                const data = await res.json() as IListResults<IListItem>;
                setPokemons(data.results)
            }
            
            
            
            
        })()



    }, [pokeUrl])

    return { pokemons }


}

export default useGetPokemons;