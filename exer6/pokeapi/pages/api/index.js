export default async function getRandomPokemon(req, res) {
    const pokeAPIBaseURL = "https://pokeapi.co/api/v2/pokemon/";
    const maxRetries = 5;

    if (req.method === "GET") {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
            try {
                const pokemonResponse = await fetch(pokeAPIBaseURL + randomPokemonId);
                if (!pokemonResponse.ok) throw new Error('Failed to fetch Pokémon');

                const pokemonData = await pokemonResponse.json();
                const nameOfPokemon = pokemonData.name;
                const typesOfPokemon = pokemonData.types.map(type => type.type.name);
                const abilitiesOfPokemon = pokemonData.abilities.map(ability => ability.ability.name);
                const imageOfPokemon = pokemonData.sprites.front_default;

                res.status(200).json({
                    name: nameOfPokemon,
                    types: typesOfPokemon,
                    abilities: abilitiesOfPokemon,
                    sprite: imageOfPokemon
                });
                return;
            } catch (error) {
                console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
                if (attempt === maxRetries - 1) {
                    res.status(500).json({ error: "Failed to fetch a random Pokémon after several attempts." });
                    return;
                }
            }
        }
    }
}
