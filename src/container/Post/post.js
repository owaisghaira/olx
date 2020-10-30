import React from 'react'
import { Link } from "react-router-dom";
import imagesLogo from './../../images/olx.webp'
import { connect } from 'react-redux';
import { set_data } from '../../store/action';
import './post.css';

class Post extends React.Component {
  // constructor(){
  //   super()

  // }

  render() {
    return (
      <div>
        <div className='container-fluid shadow-sm bg-light p-2'>
          <Link to='/'> <i className="fa text-dark fa-arrow-left" aria-hidden="true" /> </Link>
          <img className='ml-3' src={imagesLogo} width="50" alt='logo' />
          {/* ////////////////// */}
        </div>
        <div >
          <h3 className='text-center pt-2 font-weight-bold'>POST YOUR AD</h3>
          <div className="container card h-100" style={{ width: '50rem' }}>
            <h3 className= 'mt-3 mb-0'>CHOOSE A CATEGORY</h3>
            <div className="card-body pl-0 ml-0">
              <div className='row'>
                <div className='col-lg-6'>
                  <ul className='pl-0'>

                  <li className="list-group-item list-group-item-action">
                      <div className="row">

                        <div className="col-lg-2">
                          <i className="fa fa-mobile " aria-hidden="true"></i>
                        </div>

                        <div className="col-lg-8">
                          Mobile
                         </div>

                        <div className="col-lg-2">
                          <div className='dropright'>

                            <span className data-toggle="dropdown">
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                            <div className="dropdown-menu">
                             
                              <div className='text-center list-group-item-action'><Link to="/post/attributes"><span onClick = {()=> this.props.set_data({page:'Mobile / Tablets'})} className='dark'>Tablet</span> </Link></div>
                              <div className='text-center list-group-item-action'><Link to="/post/attributes"><span  onClick = {()=> this.props.set_data({page:'Mobile / Accessories'})} className='dark'>Accessories</span> </Link></div>
                              <div className='text-center list-group-item-action'><Link to="/post/attributes"><span  onClick = {()=> this.props.set_data({page:'Mobile / Mobile Phones'})} className='dark'>Mobile Phones</span> </Link></div>
                           
                            </div>
                          </div>

                        </div>

                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <div className="row">

                        <div className="col-lg-2">
                          <i className="fa fa-mobile " aria-hidden="true"></i>
                        </div>

                        <div className="col-lg-8">
                          Mobile
                         </div>

                        <div className="col-lg-2">
                          <div className='dropright'>

                            <span className data-toggle="dropdown">
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                            <div className="dropdown-menu">
                              <div> <Link to="/Post/Attributes">tablet</Link></div>
                              <div><Link to="/">phone</Link></div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-6'></div>
              </div>

            </div>
          </div>
        </div>
      </div >
    );
  }
}



const mapStateToProps = (state) => ({
  pagedata : state.pagedata
  // user : "owais"
})
const mapDispatchToProps = (dispatch) => ({
  set_data:(data)=> dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Post);