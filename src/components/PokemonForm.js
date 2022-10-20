import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleNewPokemon }) {
  const [formPokemon, setFormPokemon] = useState({
    name: "",
    hp: "",
    frontImg: "",
    backImg: ""
  })
  //SETS the state for our FORM component as EMPTY STRINGS

  function handleChange(e) {
    setFormPokemon({
      ...formPokemon,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    //ASSIGN distinct STATE objects to the format we need for our POST
    const addedPokemon = {
      name: formPokemon.name,
      hp: formPokemon.hp,
      sprites: {
        front: formPokemon.frontImg,
        back: formPokemon.backImg,
      },
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addedPokemon)
    })
      .then((r) => r.json())
      .then(handleNewPokemon)//reference to a function in PokemonPage.js that
      //renders the entire pokemon array with the new one added on
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={formPokemon.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={formPokemon.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontImg"
            value={formPokemon.frontImg}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backImg"
            value={formPokemon.backImg}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
