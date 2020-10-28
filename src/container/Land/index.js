import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
import { Link } from "react-router-dom";


class Land extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Linkcomponent/>
      </div>
    );
  }
}



export default Land;