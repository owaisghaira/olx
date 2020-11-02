import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
import Back from './../../images/olx.jpg'
import Adds from './../../components/Adds/index'
import { connect } from 'react-redux';
import firebase from './../../config/firebase';
import { adds_data } from './../../store/action';



class Home extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("home props==>", props.adData)
    return {

    }
  }
 
  componentDidMount() {
    this.props.adds_data()
  }
  render() {

    let { page } = this.state
    // console.log('props==>', this.props.adData)
    page = this.props.adData[0]
    // console.log(page)



    return (
      <div>
        <Header />
        <Linkcomponent />
        <img className='img-fluid max-width: 100%; ' src={Back} alt='logo' />

        <div className='m-5'>
          <h2 className='pb-3'>Fresh recommendations</h2>
          <div className='row mt-3'>
            <div className='col-lg-3 col-md-4'>
              <Adds price='RS:12,000' img="" />
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
          </div>
          <div className='row mt-3'>



            {this.props.adData.map((v, i) => {
              return <div className='col-lg-3 col-md-4'>  <Adds key={i} price={v.rupees} /> </div>
            })}
            {/* {!page && ''}
              {page && <Adds price={this.props.adData[0].rupees} />} */}


            {/* <div className='col-lg-3 col-md-4'>
              {page && this.props.adData.map((v,i)=>{
                return  <Adds key={i} price={v.rupees} />
              })}
          

            </div> */}
            {/* <div className='col-lg-3 col-md-4'> */}
            {/* {this.state.data && this.state.data.map((v,i)=>{
                return  <Adds key={i} price={v.rupees} />
              })} */}
            {/* <button onClick={this.get_add}>add</button> */}

            {/* </div> */}

          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  // pagedata: state.pagedata,
  adData: state.adData
  // user : "owais"
})
const mapDispatchToProps = (dispatch) => ({
  adds_data: (data) => dispatch(adds_data(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);