import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
import Footer from './../../components/footer'
import Back from './../../images/olx.jpg'
import Adds from './../../components/Adds/index'
import { connect } from 'react-redux';
import { adds_data } from './../../store/action';
import { addDtail } from './../../store/action';
import { Link } from "react-router-dom";



class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      adds: []
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     adds: props.adData
  //   }
  // }

  componentDidMount = () => {
    this.props.adds_data(this.props.history)
    // .then(() => {
    //   this.setState({
    //     adds: this.props.adData
    //   })
    // })
  }
  // shouldComponentUpdate = () => {
  //   if (this.props.adData){
  //     return true
  //   }
  // }
  render() {
    

    // let { page   } = this.state
  // console.log('props==>', this.props.adData)
    // { this.props.adData && <Link to='/'></Link> }
    // page = this.props.adData[0]



    return (
      <div>
        <Header />
        <Linkcomponent />
        <img className='img-fluid max-width: 100%; ' src={Back} alt='logo' />

        <div className='m-5'>
          <h2 className='pb-3'>Fresh recommendations</h2>
          {/* <div className='row mt-3'>
            <div className='col-lg-3 col-md-4'>

              <Link className='text-decoration-none text-dark' to='/adds_details'> <Adds price='RS:12,000' img="" /> </Link>
            </div>
            <div className='col-lg-3 col-md-4'>
              <Adds price='RS:1,000' />
            </div>
            <div className='col-lg-3 col-md-4'>
              <Adds price='RS:13,000' />
            </div>
            <div className='col-lg-3 col-md-4'>
              <Adds price='RS:14,000' />
            </div>
          </div> */}
          <div className='row mt-3'>



            {this.props.adData.map((v, i) => {
              return <div className='col-lg-3  col-md-4'>
                <Link onClick={() => this.props.addDtail(v)}
                  className='text-decoration-none text-dark' to='/adds_details'>
                  <Adds key={i} price={v.rupees} pic={v.imageurl} detail={v.adtitle} />
                </Link>
              </div>
            })}

          </div>
        </div>
        <Footer />
        <Link to='/'></Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  adData: state.adData
})
const mapDispatchToProps = (dispatch) => ({
  adds_data: (history) => dispatch(adds_data(history)),
  addDtail: (data) => dispatch(addDtail(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);