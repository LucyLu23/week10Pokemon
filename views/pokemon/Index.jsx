import React, { Component } from 'react'

const headerStyle= {
    background:'green'
}
const myStyle1= {
  background:'lightgreen',
  
  
}

class Index extends Component {
    
  render() {
    //console.log(this.props.pokemon)
    const {pokemon} =this.props;
    return (
      <div>
        
            <h1 style={headerStyle}>Gotta Catch  'Em All </h1>
            <h2 style={headerStyle}>{pokemon.name}</h2>
            {pokemon.map((p,id)=>{
                return (
                    <a href={`/pokemon/${id}`}> {/* id is index */}
                    <li style={myStyle1} >{p.name[0].toUpperCase()+p.name.substring(1)}</li>
                    </a>
                );
            })}
            <a href="/:id"></a>
        
        </div>
    );
  }
}

module.exports=Index;