import React from 'react';  
import './App.css';
// import Header from './components/header.jsx'
import Approuter from './config/router'


class App extends React.Component{
  render(){
    return(
      <div>
        <Approuter/>
      </div>
    )
  }
}

export default App;
