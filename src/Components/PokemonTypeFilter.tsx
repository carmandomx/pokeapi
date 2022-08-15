import React from 'react'
import useFetchTypes from '../customHooks/useFetchTypes'

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const PokemonTypeFilter = ({value, setValue}: Props) => {
    const { types } = useFetchTypes();

    const list = types.map((value) => <option key={value.name} value={value.url}>{value.name.toUpperCase()}</option>)
  return (
    <div>

        <select value={value} onChange={(e) => {
          setValue(e.target.value);
        }}>
            <option value="">Select a type...</option>
            {list}
        </select>

    </div>
  )
}

export default PokemonTypeFilter