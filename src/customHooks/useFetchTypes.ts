import React, {useState, useEffect} from 'react';
import { IListResults } from '../types/ListResults';
import { IListItem } from '../types/PokemonItem';

const URL = 'https://pokeapi.co/api/v2/type/'

const useFetchTypes = () => {
    const [types, setTypes] = useState<IListItem[]>([]);

    useEffect(() => {
        (async() => {
            const res = await fetch(URL);
            const data = await res.json() as IListResults<IListItem>;

            setTypes(data.results)


        })()
    }, [URL])

    return { types }
}

export default useFetchTypes;