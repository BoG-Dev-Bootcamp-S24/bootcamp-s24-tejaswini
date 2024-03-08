export default async function handler(req, res) {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  
  if (req.method === "GET") {
      const {name} = req.query; 
      
      if (name) {
          const response = await fetch(apiUrl + name);
          try {
            const data = await response.json();
            const pokeName = data.name;
            const pokeTypes = data.types.map(t => (t.type.name));
            const pokeImage = data.sprites.front_default;

            res.status(200).json({name : pokeName, types: pokeTypes, sprite: pokeImage});

          } catch (e) {
            res.status(400).json({ error: "Pokemon does not exist!" });
          }
      } 
  }
}