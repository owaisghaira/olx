import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
import Footer from './../../components/footer'
import { Link } from "react-router-dom";
import Adds from '../../components/Adds/index'
import { adds_data } from '../../store/action';
import { connect } from 'react-redux';
import { addDtail } from './../../store/action';

class Tv extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Linkcomponent />
        <div className='row mt-3'>
          {this.props.adData.map((v, i) => {
            return v.itemtype == 'Tv-Video-Audio' && <div className='col-lg-3  col-md-4'>
              <Link onClick={() => this.props.addDtail(v)}
                className='text-decoration-none text-dark' to='/adds_details'>
                <Adds key={i} price={v.rupees} pic={v.imageurl} detail={v.adtitle} />
              </Link>
            </div>
          })}
        </div>
        <Footer />
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


export default connect(mapStateToProps, mapDispatchToProps)(Tv);