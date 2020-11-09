import React from 'react'
import imagesLogo from './../../images/olx.webp'
import { Link } from "react-router-dom";
import './attribute.css'
import { connect } from 'react-redux';
import { adds_data, image_url } from './../../store/action';
import firebase from './../../config/firebase'


class Attributes extends React.Component {
    constructor() {
        super();
        this.state = {
            file: null,
            adds: [{}],
            discript: '',
            rupees: '',
            make: '',
            stat: '',
            adtitle: '',
            imageurl: '',
            condition: ''
        }

    }
    discripText(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('current_user>>>', this.props.loginData.name)

        this.setState({
            adds: {
                discript: this.state.discript,
                rupees: this.state.rupees,
                make: this.state.make,
                stat: this.state.stat,
                adtitle: this.state.adtitle,
                imageurl: this.state.imageurl,
                condition: this.state.condition,
                useruid: this.props.loginData.uid,
                userpic: this.props.loginData.profilepic,
                username: this.props.loginData.name,
                itemtype: this.props.pagedata[0].page
            }
        })
    }

    postAdd = () => {

        let { page } = this.state
        page = this.props.pagedata[0].page
        console.log(page)
        let adds = this.state.adds
        firebase.database().ref('/').child(page).push(adds)


        ///////  adding data in redux //////////
        this.props.adds_data(this.state.adds)
        alert('post added successfully...')
    }
    imagehandle = () => {
        let url = ''
        var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)
        ref.on('state_changed', function (snapshot) { }, function (error) { }, () => {
            ref.snapshot.ref.getDownloadURL()
                .then((downloadURL) => {
                    console.log('File available at', downloadURL)
                    url = downloadURL
                    this.setState({ imageurl: url })
                    alert('image added...')
                });

        })
    }

    render() {
        let { page } = this.state
        console.log('props', this.props.pagedata[0].page)
        page = this.props.pagedata[0]
        return (
            <div>
                <div className='container-fluid shadow-sm bg-light p-2'>
                    <Link to='/post'> <i className="fa text-dark fa-arrow-left" aria-hidden="true" /> </Link>
                    <Link to='/'>     <img className='ml-3' src={imagesLogo} width="50" alt='logo' /></Link>
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
                            <input required name='make' onChange={(e) => { this.discripText(e) }} className='ml-0 mb-3 ' type="text" />

                            <p>Condition*</p>
                            <button onClick={() => this.setState({ condition: 'New' })} className='btn border'>New</button>
                            <button onClick={() => this.setState({ condition: 'Used' })} className='btn border ml-2'>Used</button>


                            <p className='mt-3' >Ad title*</p>
                            <input required name='adtitle' onChange={(e) => { this.discripText(e) }} className='ml-0' type="text" />
                            <p>Mention the key features of your item (e.g. brand, model, age, type)</p>

                            <p className='mt-3' >Description*</p>
                            <input required name='discript' onChange={(e) => { this.discripText(e) }} style={{ height: "120px", }} className='ml-0' type="text" />
                            <p>A minimum length of 20 characters is required. Please edit the field.</p>
                            <hr />

                            <h4 className='mt-3'>Set A Price</h4>
                            <p>Price*</p>
                            <input required name='rupees' onChange={(e) => { this.discripText(e) }} className='ml-0' type="number" />
                            <hr />

                            <h4 className='mt-3'>UPLOAD UP TO 12 PHOTOS</h4>
                            <p>Image*</p>
                            <input required onChange={(e) => this.setState({ file: e.target.files[0] })} name='file' className='ml-0' type="file" />
                            <button onClick={() => this.imagehandle()}>send</button>
                            <hr />

                            <h4 className='mt-3'>CONFIRM YOUR LOCATION</h4>
                            <p>State*</p>
                            <input required onChange={(e) => { this.discripText(e) }} name='stat' className='ml-0' type="text" />
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
    adData: state.adData,
    loginData: state.current_user
})
const mapDispatchToProps = (dispatch) => ({
    adds_data: (data) => dispatch(adds_data(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);