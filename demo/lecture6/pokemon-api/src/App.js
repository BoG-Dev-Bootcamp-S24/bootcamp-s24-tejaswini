import "./App.css";
import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [index, setIndex] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(true);  // Set loading to true when starting to fetch new data
    try {
      const res = await fetch(API_URL + index);
      const newData = await res.json();

      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
    setLoading(false);
  }

  // fetch data at beginning and whenever index changes
  useEffect(() => {
    getData();
  }, [index]);

  return (
    <>
      <div>Pokemon name fetcher:</div>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>Pokemon Name: {data.name}</div>
      ) : (
        <div>Error fetching data</div>
      )}
      <button
        onClick={() => {
          if (index > 1) setIndex(index - 1);
        }}
      >
        Left Arrow (Prev)
      </button>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Right Arrow (Next)
      </button>
    </>
  );
}

export default App;