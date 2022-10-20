import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"


function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((pokemon) => setPokemon(pokemon))
  }, [])

  // function handleNewPokemon(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:3001/pokemon", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newPokemon)
  //   })
  //   .then((r) => r.json())
  //   .then(newPokemon => setPokemon([...pokemon, newPokemon]))
  //   setPokemon(pokemon)
  // }

  function handleNewPokemon(addedPokemon) {
    setPokemon([...pokemon, addedPokemon])
  }//call this function HERE because THIS component holds the [pokemon] state we want to access
  //in PokemonForm.js

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        handleNewPokemon={handleNewPokemon}
      />
      <br />
      <Search 
        search={search} 
        handleSearch={handleSearch}
      />
      <br />
      <PokemonCollection 
        pokemon={pokemon} 
        search={search} 
        setPokemon={setPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
