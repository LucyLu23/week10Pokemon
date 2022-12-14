import React, {Component} from 'react';

const myStyle= {
    background:'green',
    color:'blue'
}
class Show extends Component{
    render(){
        //console.log(this.props.pokemon);
        const pokemon = this.props.pokemon;
        return (
            <div>
                
                <h1 style={myStyle}>{pokemon.name}</h1>
                <img src={pokemon.img}  alt={pokemon.name} />
                <p>The {pokemon.name}</p>
                
                <a href="/pokemon">Homepage</a>

            </div>
        )


    }
}

//export default Show
module.exports = Show;