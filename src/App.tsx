import React, { useState } from 'react';
import './App.css';
import PokemonTypeFilter from './Components/PokemonTypeFilter';
import PokemonGridContainer from './types/PokemonGridContainer';


function App() {
  const [type, setType] = useState('');
  
  return (
    <div className="App">
      <PokemonTypeFilter value={type} setValue={setType} />
      <PokemonGridContainer type={type} />
    </div>
  );
}

export default App;
