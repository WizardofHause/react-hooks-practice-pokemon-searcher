import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search  }) {

  const searchedPokemon = pokemon.filter((mon) => 
    mon.name.toLowerCase().includes(search.toLowerCase()))

  const pokemonCard = searchedPokemon.map((mon) => {
    return (
      <PokemonCard 
        key={mon.id}
        mon={mon}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCard}
    </Card.Group>
  );
}

export default PokemonCollection;
