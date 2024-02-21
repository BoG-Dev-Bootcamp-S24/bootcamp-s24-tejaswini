

import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [dexNumber, setDexNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState('info'); // 'info' or 'moves'

  const fetchPokemonData = async (dexNumber) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}${dexNumber}/`);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (e) {
      setError(e.message);
      setPokemonData(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonData(dexNumber);
  }, [dexNumber]);

  const incrementDexNumber = () => setDexNumber((prev) => prev + 1);
  const decrementDexNumber = () => setDexNumber((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="App">
      <div className="pokedex-container">
        <header className="pokedex-header">
          <h1>Exercise 5 - PokeDex!</h1>
        </header>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {pokemonData && (
          <>
            <div className="pokemon-container">
              <div className="sprite-container">
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
              </div>
              <div className="pokemon-info">
                <h2 className="pokemon-name">{pokemonData.name}</h2>
                <div className="pokemon-types">
                  {pokemonData.types.map((type) => (
                    <span key={type.type.name} className={`type-badge type-${type.type.name}`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="pokemon-stats">
                  {currentTab === 'info' && (
                    <>
                      <p>Height: {pokemonData.height * 0.1}m</p>
                      <p>Weight: {pokemonData.weight * 0.1}kg</p>
                      {pokemonData.stats.map((stat) => (
                        <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                      ))}
                    </>
                  )}
                  {currentTab === 'moves' && (
                    <div className="pokemon-moves">
                      {pokemonData.moves.map((move, index) => (
                        <p key={index}>{move.move.name}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="controls">
              <button onClick={decrementDexNumber}>&lt;</button>
              <button onClick={incrementDexNumber}>&gt;</button>
            </div>
            <div className="tab-buttons">
              <button
                className={`tab-button ${currentTab === 'info' ? 'active' : ''}`}
                onClick={() => setCurrentTab('info')}
              >
                Info
              </button>
              <button
                className={`tab-button ${currentTab === 'moves' ? 'active' : ''}`}
                onClick={() => setCurrentTab('moves')}
              >
                Moves
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


