import React from 'react';

const pokemonData = {
    name: 'ditto',
    image: './exer5/pokedex/src/assets/dittogif.gif', // Replace with the actual image path or URL
    info: {
        height: '0.3m',
        weight: '4.0kg',
        hp: 48,
        attack: 48,
        defense: 48,
        specialAttack: 48,
        specialDefense: 48,
        speed: 48,
    },
    types: ['normal'],
};

const PokeDex = () => {
    // addd function to navigate between pokemon
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-lg mb-2">Exercise 5 - PokeDex!</h1>
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <img src={pokemonData.image} alt={pokemonData.name} className="w-full" />
                    </div>
                    <div className="w-1/2 ml-4">
                        <h2 className="text-lg">Info</h2>
                        <p>height: {pokemonData.info.height}</p>
                        <p>weight: {pokemonData.info.weight}</p>
                        <p>hp: {pokemonData.info.hp}</p>
                        <p>attack: {pokemonData.info.attack}</p>
                        <p>defense: {pokemonData.info.defense}</p>
                        <p>special-attack: {pokemonData.info.specialAttack}</p>
                        <p>special-defense: {pokemonData.info.specialDefense}</p>
                        <p>speed: {pokemonData.info.speed}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <h3>Types:</h3>
                    {pokemonData.types.map((type) => (
                        <span key={type} className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2">{type}</span>
                    ))}
                </div>
                <div className="flex mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Info
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
                        Moves
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeDex;