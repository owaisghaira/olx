import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import firebase from './../../config/firebase';
import { adds_data } from './../../store/action';
import Adds from './../../components/Adds/index'


class Mobile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Linkcomponent />
        <div className='row mt-3'>
          {this.props.adData.map((v, i) => {
            return <div className='col-lg-3 col-md-4'>  <Adds key={i} price={v.rupees} /> </div>
          })}
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  adData: state.adData
})
const mapDispatchToProps = (dispatch) => ({
  adds_data: (data) => dispatch(adds_data(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Mobile);