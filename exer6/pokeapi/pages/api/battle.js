export default async function comparePokemonStats(req, res) {
    const pokeAPIBaseURL = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === "POST") {
        const { firstPokemon, secondPokemon } = req.body;
        console.log(firstPokemon, secondPokemon);
        if (firstPokemon && secondPokemon) {
            try {
                const firstPokemonResponse = await fetch(pokeAPIBaseURL + firstPokemon);
                const secondPokemonResponse = await fetch(pokeAPIBaseURL + secondPokemon);

                const firstPokemonData = await firstPokemonResponse.json();
                const secondPokemonData = await secondPokemonResponse.json();

                const firstPokemonBaseStat = firstPokemonData.stats[0].base_stat;
                const secondPokemonBaseStat = secondPokemonData.stats[0].base_stat;

                const winner = (
                    firstPokemonBaseStat === secondPokemonBaseStat ? "TIE" :
                    firstPokemonBaseStat > secondPokemonBaseStat ? firstPokemon : secondPokemon
                );

                res.status(200).json({ winner: winner });

            } catch (error) {
                res.status(400).json({ error: "Error fetching Pokemon data or parsing JSON" });
            }
        } else {
            res.status(400).json({ error: "Please provide both 'firstPokemon' and 'secondPokemon' in the request body" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
