import React, { Component } from 'react';

class Edit extends Component {
  render() {
    const { pokemon } =this.props;
    console.log(pokemon);

    return (

        <div>
            <nav>
                <a href='/pokemon'> Changes My Pokemon</a>
            </nav>
            <h1>Edit Pokemon</h1>
            <form action={`/pokemon/${this.props.pokemon.id}?_method=PUT`}  method='POST'>
                Name: <input type='text' name='name' defaultValue={pokemon.name} />{" "}
                <br />
                Image: <input
                    type='url'
                    name='img'
                    defaultValue={pokemon.img}
                />{" "}
                 
                <br />
                <br />
                <input type='submit' value='submit changes' />
            </form>
        
        
        </div>
    )
  }
}
module.exports= Edit;