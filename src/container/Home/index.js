import React from 'react'
import Linkcomponent from './../../components/link'
import Header from './../../components/header'
import Back from './../../images/olx.jpg'
import Adds from './../../components/Adds/index'



class Home extends React.Component {
  render() {
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
        </div>
      </div>
    );
  }
}



export default Home;