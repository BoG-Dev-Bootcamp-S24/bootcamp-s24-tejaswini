import "./App.css";
import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const TYPE_COLORS = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function App() {
  const [index, setIndex] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('info'); // 'info' or 'moves'

  async function getData(newIndex) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL + newIndex);
      if (!res.ok) {
        throw new Error('Failed to fetch data for ID: ' + newIndex);
      }
      const newData = await res.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData(index);
  }, [index]);

  const handlePrev = () => {
    if (index > 1) setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data && (
          <>
            <div className="sprite-container">
              <img src={data.sprites.front_default} className="App-logo" alt={data.name} />
            </div>
            <div className="name-box">
              <p className="name-text">{data.name}</p>
            </div>
            <div className="types-box">
              {data.types.map((type) => (
                <span
                  key={type.type.name}
                  className="type-text"
                  style={{ backgroundColor: TYPE_COLORS[type.type.name] }}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="button-box">
              <button onClick={handlePrev}>&lt;</button>
              <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="info-moves-buttons">
              <button
                className={activeTab === 'info' ? 'active' : ''}
                onClick={() => handleTabChange('info')}
              >
                Info
              </button>
              <button
                className={activeTab === 'moves' ? 'active' : ''}
                onClick={() => handleTabChange('moves')}
              >
                Moves
              </button>
            </div>
            {activeTab === 'info' && (
              <div className="info-content">
              </div>
            )}
            {activeTab === 'moves' && (
              <div className="moves-content">
              </div>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;

