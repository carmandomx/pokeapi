import React, { useState, useEffect} from 'react';
import { IPokemon } from '../types/Pokemon';
import { IPokemonStat } from '../types/PokemonStats';
import { ITypes } from '../types/PokemonTypes';

const useGetSinglePokemon = (pokeUrl: string) => {
    const [name, setName] = useState('')
    const [id, setId] = useState<number>();
    const [imgURL, setImgURL] = useState('');
    const [types, setTypes] = useState<ITypes[]>([])
    const [stats, setStats] = useState<IPokemonStat[]>([])

    useEffect(() => {

        (async() => {
            const res = await fetch(pokeUrl);
            const data = await res.json() as IPokemon;

            setName(data.name);
            setId(data.id);
            setImgURL(data.sprites.front_default);
            setTypes(data.types)
            setStats(data.stats);

        })()


    }, [pokeUrl])

    return { name, id, imgURL, types, stats }

}

export default useGetSinglePokemon