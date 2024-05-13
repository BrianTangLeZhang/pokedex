import React from "react";

function PokemonGrid(props) {
    const { pokemons, isLoading, isError } = props;
    /* INSTRUCTION: add a loading message when isLoading is true */
    if(isLoading) return <div style={{height:100,width:100,textAlign:"center"}}>Loading....</div>

    /* INSTRUCTION: add an error message when isError is true */
    if(isError) return <div style={{height:100,width:100,textAlign:"center"}}>Error: {isError.message}</div>
    return (
        <div className="pokemon-grid">
            {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
            {!pokemons && pokemons.length < 1 ? (<div style={{height:100,width:100,textAlign:"center"}}>No pokemons found.</div>) : (<>
            {pokemons.map(pokemon => <div className="pokemon-card" key={pokemon.name}><h3>{pokemon.name}</h3>
            <p>{pokemon.type}</p>
            <p>{pokemon.level}</p>
            </div>)}</>)}
        </div>
    );
}

export default PokemonGrid;
