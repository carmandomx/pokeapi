import React, { useState } from 'react'
import Pokemon from '../Components/Pokemon';
import useGetPokemons from '../customHooks/useGetPokemons';

type Props = {
    type: string;
}

const PokemonGridContainer = ({ type }: Props) => {
    const { pokemons  } = useGetPokemons(type);
    const [pageSize, setPageSize ] = useState(4);
    const [page, setPage] = useState(0); 
    const list = pokemons.slice(page * pageSize, (page * pageSize) + pageSize).map((value) => <Pokemon key={value.name} url={value.url} /> )
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 16
    }}>
        {list}
        <button onClick={(e) => {
            setPage(page + 1)
        }}>
            Next page
        </button>
    </div>
  )
}

export default PokemonGridContainer