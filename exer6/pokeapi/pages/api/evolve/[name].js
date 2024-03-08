export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon-species/";
    
    if (req.method === "GET") {
        const {name} = req.query; 
        
        if (name) {
            const response = await fetch(url + name);
            try {
                const species = await response.json();
                const chainURL = species.evolution_chain.url;
                const chainResponse = await fetch(chainURL);
                const chainData = await chainResponse.json();
                const evolve = chainData.chain.evolves_to;
                res.status(200).json({ evolution_step: evolve.length === 0 ? chainData.chain.species.name : evolve[0].species.name });
            } catch (e) {
                res.status(400).json({ error: "pokemon does not exist" });
            }
        } 

    }

    
  }