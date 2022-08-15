import React from 'react'
import useGetSinglePokemon from '../customHooks/useGetSinglePokemon';

type Props = {
    url: string;
}

const Pokemon = ({url}: Props) => {
    const {name, id, imgURL, stats, types} = useGetSinglePokemon(url);
    const statsList = stats.map((value, index) => <li key={index}> {value.stat.name}: {value.base_stat} </li>)
    const typesList = types.map((value, index) => <li key={index}>{value.type.name} </li>)
  return (
    <div>
        {typesList}
        <img src={imgURL} alt={name} />
        #{id} - {name}
        <div>
            <h6>Stats</h6>
            <ul>
                { statsList }
            </ul>
            
        </div>
    </div>
  )
}

export default Pokemon