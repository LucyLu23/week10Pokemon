
import React, {Component} from 'react';

/* const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }; */

class Index extends Component {
    render(){
        console.log(this.props.pokemon);
        const {pokemon} = this.props;
        
  return (
    <div>
      
        <h1>{{/* See all the pokemon */}}</h1>
        <h3> Index page</h3>
        <ul>{/* loop map*/}
        {fruits.map((pokemon, id)=>{
            return (
                <li>the <a href={`/pokemon/${id} {pokemon.name} `}> </a>is {pokemon.img}
                 <br />           
                </li>
            )
        })}
        </ul>
         
        
        </div>



  )
}
}

//export default Index
module.exports=Index;