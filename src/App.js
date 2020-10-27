import React from 'react';  
import './App.css';
import Header from './components/header.jsx'
import Home from './container/home'

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        {/* <Home/> */}
      </div>
    )
  }
}

export default App;
