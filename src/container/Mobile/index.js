import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import firebase from './../../config/firebase';
import { adds_data } from './../../store/action';
import Adds from './../../components/Adds/index'
import { Link } from "react-router-dom";
import { addDtail } from './../../store/action';



class Mobile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Linkcomponent />
        <div className='row mt-3'>
          {this.props.adData.map((v, i) => {
            return v.itemtype == 'Mobile' && <div className='col-lg-3  col-md-4'>
              <Link onClick={() => this.props.addDtail(v
                // rupees: v.rupees, discript: v.discript,
                // adtitle: v.adtitle, imageurl: v.imageurl,
                // make: v.make, condition: v.condition, useruid: v.useruid,
                // stat: v.stat, itemtype: v.itemtype
              )}
                className='text-decoration-none text-dark' to='/adds_details'>
                <Adds key={i} price={v.rupees} pic={v.imageurl} detail={v.adtitle} />
              </Link>
            </div>
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
  adds_data: (data) => dispatch(adds_data(data)),
  addDtail: (data) => dispatch(addDtail(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(Mobile);