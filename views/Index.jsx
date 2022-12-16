import React, { Component } from 'react'


const headerStyle= {
    background:'green'
}
const myStyle1= {
  background:'lightgreen',
  fontSize: 19
}
const myStyle3 ={
  backgroundimage: 'url(Beach.PNG)',
  backgroundsize: 'cover',           

}
class Index extends Component {
    
  render() {
    console.log(this.props.pokemon)
    const {pokemon} =this.props;
    //const pokemon =this.props.pokemon;
    return (
     
        <body  style={headerStyle}>  
          <nav>
            <a href="/pokemon/new" style={{fontSize:23}}>create a new pokemon</a>
          </nav>            
            <div>
              <h1 style={headerStyle}>Gotta Catch  'Em All </h1>
                <h3 style={headerStyle}>{pokemon.name}</h3>
                {pokemon.map((p)=>{
                    return (
                  <div>                
                      <a href={`/pokemon/${p.id}`}>
                          <li style={myStyle1} >{p.name[0].toUpperCase()+p.name.substring(1)} </li>
                      </a>
                      <br />
                      <form action={`/pokemon/${p.id}?_method=DELETE`} method="POST">
                      <input type="submit" value="DELETE" />
                      </form>  
                      <br />            
                      <a href={`/pokemon/${p.id}/edit`}>Edit This Pokemon</a>                    
                     </div>
                    )
                })}
                <a href="/:id"></a>
            
            </div>
          </body>
        
    );
  }
}

module.exports=Index;



