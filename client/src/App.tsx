import React, { Component, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { AppRoutes } from './routes/Routes'
import api from '../Api'

// class App extends Component {
//   constructor(props: {} | Readonly<{}>) {
//     super(props)



//     axios.get('/postagens').then(resultado => { console.log(resultado) })

//   }
//   render() {


//     return (
//       <AppRoutes />
//     )
//   }
// }


function App() {

  useEffect(() => {
    api.get('postagens').then(res => {
      console.log(res.data);
    })
  },[])

  return (
    <AppRoutes />

  );
}
export default App;
