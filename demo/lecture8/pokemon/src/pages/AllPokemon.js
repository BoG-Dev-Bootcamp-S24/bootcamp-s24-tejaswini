import { useEffect, useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export default function AllPokemon() {
  const [fetchData, setFetchData] = useState();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(URL);
      const fetchedData = await result.json();
      console.log(fetchedData);
      setFetchData(fetchedData);
    }

    fetchData();
  }
  , []);

  function getNames() {
    console.log(fetchData);
    const data =(fetchData.results);
    const names = [];
    for (let i = 0; i < data.length; i++) {
      names.push(<div>{data[i].name}</div>);
    }
    console.log(names);
    return names
  }

  const filteredData = fetchData?.results.filter((pokemon) => {
    return pokemon.name.includes(filter);
  });





  return (
      <div>
       <input
         onChange={(e) => {
           setFilter(e.target.value);
         }}
       ></input>

      {filteredData?.map((pokemon) => {
        return <div>{pokemon.name}</div>;
      })}
    </div>
  );
}


// import { useEffect, useState } from "react";

// const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

// export default function AllPokemon() {
//   const [data, setData] = useState();
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const result = await fetch(URL);
//       const fetchedData = await result.json();
//       setData(fetchedData);
//     }

//     fetchData();
//   }, []);

//   const filteredData = data?.results.filter((pokemon) => {
//     return pokemon.name.includes(filter);
//   });

//   return (
//     <div>
//       <input
//         onChange={(e) => {
//           setFilter(e.target.value);
//         }}
//       ></input>
//       {filteredData?.map((pokemon) => {
//         return <div>{pokemon.name}</div>;
//       })}
//     </div>
//   );
// }
