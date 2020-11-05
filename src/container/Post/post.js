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
            <h3 className='mt-3 mb-0'>CHOOSE A CATEGORY</h3>
            <div className="card-body pl-0 ml-0">
              <div className='row'>
                <div className='col-lg-6'>
                  <ul className='pl-0'>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Mobile" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center dark list-group-item-action'>Mobile</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                              {/* <span className data-toggle="dropdown">
                            </span>
                            <div className="dropdown-menu">
                              <div className='text-center list-group-item-action'><Link to="/post/attributes"><span onClick={() => this.props.set_data({ page: "Mobile" })} className='dark'>Tablet</span> </Link></div>
                              <div className='text-center list-group-item-action'><Link to="/post/attributes"><span onClick={() => this.props.set_data({ page: "Mobile" })} className='dark'>Accessories</span> </Link></div>
                              <div className='text-center list-group-item-action'><Link to="/post/attributes"><span onClick={() => this.props.set_data({ page: "Mobile" })} className='dark'>Mobile Phones</span> </Link></div>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Car" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center dark list-group-item-action'>Car</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Motorcycles" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center dark list-group-item-action'>Motorcycles</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>

                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Houses" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center dark list-group-item-action'>Houses</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>

                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Tv-Video-Audio" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center dark list-group-item-action'>Tv-Video-Audio</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>

                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Animals" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center text-decoration-none dark list-group-item-action'>Animals</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>

                    <Link to="/post/attributes">
                      <li onClick={() => this.props.set_data({ page: "Land & Plots" })} className="list-group-item list-group-item-action">
                        <div className="row ">
                          <div className="col-lg-2">
                            <i className="fa fa-mobile " aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <div className='text-center text-decoration-none dark list-group-item-action'>Land & Plots</div>
                          </div>
                          <div className="col-lg-2">
                            <div className='dropright'>
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
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
  pagedata: state.pagedata
  // user : "owais"
})
const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);