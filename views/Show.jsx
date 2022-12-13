import React, {Component} from 'react';


class Show extends Component{
    render(){
        console.log(this.props.pokemon);
        const pokemon = this.props.pokemon;
        return (
            <div>
                <h1>Show Route</h1>
                <p>The {pokemon.name}  is {pokemon.img}</p>
                
                <a href="/pokemon"></a>

            </div>
        )


    }
}

//export default Show
module.exports = Show;