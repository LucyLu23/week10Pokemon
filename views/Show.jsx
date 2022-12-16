import React, { Component } from "react";

class Show extends Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(this.props.pokemon);
    return (
      <div>
        <nav>
          <a href='/pokemon'> Pokedex</a>
        </nav>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img} alt={`${pokemon.name}'s Picture`} />
       
        <a href='/pokemon'>Pokedex</a>
      </div>
    );
  }
}

export default Show;
