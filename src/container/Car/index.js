import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'

class Car extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Linkcomponent/>
      </div>
    );
  }
}



export default Car;