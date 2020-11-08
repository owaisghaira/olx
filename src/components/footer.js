import React from 'react'
import { Link } from "react-router-dom";




export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid mt-5 bg-light'>
                    <div className='container'>
                        <div className='row p-3'>
                            <div className='col-lg-3'>
                                <h6 className='font-weight-bold'>POPULAR CATEGORIES</h6>
                                <ul className='list-group'>
                                    <li><Link className=' text-dark' to='/mobile'>Mobile Phones</Link></li>
                                    <li><Link className=' text-dark' to='/car'>Cars</Link></li>
                                    <li><Link className=' text-dark' to='/house'>Houses</Link></li>
                                    <li><Link className=' text-dark' to='/land'>Land & Plots</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <h6 className='font-weight-bold'>POPULAR CATEGORIES</h6>
                                <ul className='list-group'>
                                    <li><Link className=' text-dark' to='/motorcycles'>Motorcycles</Link></li>
                                    <li><Link className=' text-dark' to='/animals'>Animals</Link></li>
                                    <li><Link className=' text-dark'>Books</Link></li>
                                    <li><Link className=' text-dark'>Dogs</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-2'>
                                <h6 className='font-weight-bold'>ABOUT US</h6>
                                <ul className='list-group'>
                                    <li className='text-dark'>About OLX group</li>
                                    <li className='text-dark'>OLX Blogs</li>
                                    <li className='text-dark'>Contact Us </li>
                                    <li className='text-dark'>OLX For Businesses</li>
                                </ul>
                            </div>
                            <div className='col-lg-2'>
                                <h6 className='font-weight-bold'>OLX</h6>
                                <ul className='list-group'>
                                    <li className='text-dark'>Help</li>
                                    <li className='text-dark'>Site Map</li>
                                    <li className='text-dark'>Ligal & Privacy information</li>
                                </ul>
                            </div>
                            <div className='col-lg-2'>
                                <h6 className='font-weight-bold'>FOLLOW US</h6>
                                <span className=''>
                                    <i class="fa fa-facebook fa " aria-hidden="true"></i>
                                    <i class="fa fa-twitter pl-2" aria-hidden="true"></i>
                                    <i class="fa fa-play pl-2" aria-hidden="true"></i>
                                    <i class="fa fa-instagram pl-2" aria-hidden="true"></i>

                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container-fluid text-light bg-dark'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <h6 className='pt-2'>Other Countries  <span> India - South Africa - Indonesia  </span></h6>
                        </div>
                        <div className='col-lg-4'>
                            <h6 className='pt-2'>Free Classifieds in Pakistan. © 2006-2020 OLX</h6>
                        </div>
                    </div>


                </div>
            </div>


        )
    }
}