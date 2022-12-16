import React, { Component } from 'react'

const myStyle2 ={
  color: "yellow",
  background: "lightgreen",
  fontSize: 20

}

 class New extends Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Form</h1>
        <form action="/pokemon" method="post">

          Name: <input type="text" name='name' /> <br /> <br />

          Image: <input type="url" name='img' /> <br /> <br />
          
        <input type="submit" name=''  value="createPokemon"  style={myStyle2}/>


        </form>
        <br />
        <a href="/pokemon"> <strong> <i>I do want to create a new pokemon </i> </strong></a>
        </div>
    )
  }
}
export default New;
