export default async function handler(req, res) {
  const url = "https://pokeapi.co/api/v2/type/";
  
  if (req.method === "GET") {
      const {type} = req.query; 
      
      if (type) {
          const response = await fetch(url + type);
          try {
            const data = await response.json();
            const pokemons = data.pokemon.map(p => (p.pokemon.name)); 
            res.status(200).json({pokemons : pokemons});
          } catch (e) {
            res.status(400).json({ error: "Pokemon does not exist!" });
          }
      } 

  }

  
}
