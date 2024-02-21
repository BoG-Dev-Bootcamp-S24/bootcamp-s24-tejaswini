import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [dexNumber, setDexNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState('info'); // 'info' or 'moves'

  const fetchPokemonData = async (dexNumber) => {
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
  };

  useEffect(() => {
    fetchPokemonData(dexNumber);
  }, [dexNumber]);

  const incrementDexNumber = () => setDexNumber((prev) => prev + 1);
  const decrementDexNumber = () => setDexNumber((prev) => (prev > 1 ? prev - 1 : 1));

  const infoMovesHeader = currentTab === 'info' ? 'Info' : 'Moves';

  return (
    <div className="App">
      <div className="header">
        <h1>Pokedex!</h1>
      </div>
      {error && <div>Error: {error}</div>}
      {pokemonData && (
        <div className="content">
          <div className="left-column">
            <div className="sprite-container">
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
            <div className="name-box">
              {pokemonData.name}
            </div>
            <div className="types-text">
            <strong>Types:</strong>
            </div>
            <div className="types">
              {pokemonData.types.map((type) => (
                <span key={type.type.name} className={`type-badge type-${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="navigation-buttons">
              <button onClick={decrementDexNumber}>&lt;</button>
              <button onClick={incrementDexNumber}>&gt;</button>
            </div>
          </div>
          <div className="right-column">
            <div className="info-moves-container">
              <h2>{infoMovesHeader}</h2>
              <div className="fixed-box">
                {currentTab === 'info' && (
                  <div className="info">
                    <p>Height: {pokemonData.height * 0.1}m</p>
                    <p>Weight: {pokemonData.weight * 0.1}kg</p>
                    {pokemonData.stats.map((stat) => (
                      <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                    ))}
                  </div>
                )}
                {currentTab === 'moves' && (
                  <div className="moves">
                    {pokemonData.moves.map((move, index) => (
                      <p key={index}>{move.move.name}</p>
                    ))}
                  </div>
                )}
              </div>
              <div className="tab-buttons">
                <button
                  className={`info-button ${currentTab === 'info' ? 'active' : ''}`}
                  onClick={() => setCurrentTab('info')}
                >
                  Info
                </button>
                <button
                  className={`moves-button ${currentTab === 'moves' ? 'active' : ''}`}
                  onClick={() => setCurrentTab('moves')}
                >
                  Moves
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
