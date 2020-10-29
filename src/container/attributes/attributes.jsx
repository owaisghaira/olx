import React from 'react'
import imagesLogo from './../../images/olx.webp'
import { Link } from "react-router-dom";
import './attribute.css'


class Attributes extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <div className='container-fluid shadow-sm bg-light p-2'>
                    <Link to='/post'> <i className="fa text-dark fa-arrow-left" aria-hidden="true" /> </Link>
                    <img className='ml-3' src={imagesLogo} width="50" alt='logo' />
                </div>
                <div>
                    <h3 className='text-center pt-3 font-weight-bold'>POST YOUR AD</h3>
                    <div className="container card my-4" style={{ width: '50rem' }}>
                        <div className='card-header bg-white p-0 mt-2'>
                            <h4>SELECTED CETEGORIES</h4>
                        </div>

                        <div className='container'>
                            <h4 className='mt-3'>INCLUDE SOME DETAILS</h4>

                            <p>Make*</p>
                            <input className='ml-0 mb-3 ' type="text" />

                            <p>Condition*</p>
                            <button className='btn border'>New</button>
                            <button className='btn border ml-2'>Used</button>


                            <p className='mt-3' >Ad title*</p>
                            <input className='ml-0' type="text" />
                            <p>Mention the key features of your item (e.g. brand, model, age, type)</p>

                            <p className='mt-3' >Description*</p>
                            <input style={{ height: "120px", }} className='ml-0' type="text" />
                            <p>A minimum length of 20 characters is required. Please edit the field.</p>
                            <hr />

                            <h4 className='mt-3'>Set A Price</h4>
                            <p>Price*</p>
                            <input className='ml-0' type="text" />
                            <hr />

                            <h4 className='mt-3'>UPLOAD UP TO 12 PHOTOS</h4>
                            {/* <div style={{ marginTop: "20px", padding: "15px" }}>
                                <span className="border p-3"><label className="image-upload" htmlFor="input1">
                                    <i class="fa fa-camera fa-2x" aria-hidden="true"></i></label></span>

                                    <input type="file" ></input>

                            </div> */}
                            <input type="file" ></input>
                            <input type="file" className='my-3' ></input>
                            <hr/>

                            <h4 className='mt-3'>CONFIRM YOUR LOCATION</h4>
                            <p>State*</p>
                            <input className='ml-0' type="text" />
                            <hr />

                            <button className='btn btn-light border mb-4'>Post Now</button>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Attributes;