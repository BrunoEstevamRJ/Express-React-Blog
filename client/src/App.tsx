import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { AppRoutes } from './routes/Routes'


class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)

    axios.get('/postagens').then(resultado => { console.log(resultado) })
    axios.get('/comentarios/teste').then(resultado => { console.log(resultado) })
  }
  render() {
    return (
     <AppRoutes />
    )
  }
}
export default App;
