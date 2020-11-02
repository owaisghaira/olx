import React from 'react'
import imagesLogo from './../../images/olx.webp'
import { Link } from "react-router-dom";
import './attribute.css'
import { connect } from 'react-redux';
import { adds_data } from './../../store/action';
import firebase from './../../config/firebase'


class Attributes extends React.Component {
    constructor() {
        super();
        this.state = {
            adds: [{}],
            selectedFile: null,
            discript: '',
            rupees: '',
            make: '',
            stat: '',
            adtitle: ''
        }

    }
    discripText(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.setState({
            adds: {
                discript: this.state.discript,
                rupees: this.state.rupees,
                make: this.state.make,
                stat: this.state.stat,
                adtitle: this.state.adtitle
            }
        })
    }
    onFileChange = files => {

        // Update the state 
        this.setState({ selectedFile: files});

    };
    onFileUpload = () => {

        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        console.log(this.state.selectedFile); 
    }
        postAdd = () => {
            // let addKey = firebase.database().ref('addpost').push().key
            let { page } = this.state
            page = this.props.pagedata[0]
            let adds = this.state.adds
            firebase.database().ref('/').child(page.page).push(adds)
            console.log(adds)
            // console.log(page.page)
            // console.log('props', this.props)
            ///////  adding data in redux //////////
            this.props.adds_data(this.state.adds)
        }

        render() {
            let { page } = this.state
            // console.log('props', this.props)
            page = this.props.pagedata[0]
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
                                <h5> {!page && 'Plz Select Categories'} </h5>
                                <h5> {page && page.page} </h5>
                            </div>

                            <div className='container'>
                                <h4 className='mt-3'>INCLUDE SOME DETAILS</h4>

                                <p>Make*</p>
                                <input name='make' onChange={(e) => { this.discripText(e) }} className='ml-0 mb-3 ' type="text" />

                                <p>Condition*</p>
                                <button className='btn border'>New</button>
                                <button className='btn border ml-2'>Used</button>


                                <p className='mt-3' >Ad title*</p>
                                <input name='adtitle' onChange={(e) => { this.discripText(e) }} className='ml-0' type="text" />
                                <p>Mention the key features of your item (e.g. brand, model, age, type)</p>

                                <p className='mt-3' >Description*</p>
                                <input name='discript' onChange={(e) => { this.discripText(e) }} style={{ height: "120px", }} className='ml-0' type="text" />
                                <p>A minimum length of 20 characters is required. Please edit the field.</p>
                                <hr />

                                <h4 className='mt-3'>Set A Price</h4>
                                <p>Price*</p>
                                <input name='rupees' onChange={(e) => { this.discripText(e) }} className='ml-0' type="number" />
                                <hr />

                                <h4 className='mt-3'>UPLOAD UP TO 12 PHOTOS</h4>
                                {/* <div style={{ marginTop: "20px", padding: "15px" }}>
                                <span className="border p-3"><label className="image-upload" htmlFor="input1">
                                    <i class="fa fa-camera fa-2x" aria-hidden="true"></i></label></span>

                                    <input type="file" ></input>

                            </div> */}
                                <input type="file" className='my-3' onChange={(e)=>{this.onFileChange(e.target.files)}}  ></input>
                                <button onClick={this.onFileUpload}>
                                    Upload!
                             </button>
                                <hr />

                                <h4 className='mt-3'>CONFIRM YOUR LOCATION</h4>
                                <p>State*</p>
                                <input onChange={(e) => { this.discripText(e) }} name='stat' className='ml-0' type="text" />
                                <hr />

                                <button onClick={this.postAdd} className='btn btn-light border mb-4'>Post Now</button>

                            </div>

                        </div>
                    </div>
                </div>

            )
        }
    }

    const mapStateToProps = (state) => ({
        pagedata: state.pagedata,
        adData: state.adData
        // user : "owais"
    })
    const mapDispatchToProps = (dispatch) => ({
        adds_data: (data) => dispatch(adds_data(data))
    })

    export default connect(mapStateToProps, mapDispatchToProps)(Attributes);