import React, { Component } from 'react'
import './App.css'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)

    axios.get('/postagens').then(resultado => { console.log(resultado) })
    axios.get('/comentarios/teste').then(resultado => { console.log(resultado) })
  }
  render() {
    return (
      <div className="App">
        <h1>Frontend</h1>
      </div>
    )
  }
}
export default App;
