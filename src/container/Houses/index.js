import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
import Footer from './../../components/footer'


class Houses extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Linkcomponent/>
        <Footer/>
      </div>
    );
  }
}



export default Houses;