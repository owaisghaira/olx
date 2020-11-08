import React from 'react'
import Header from './../../components/header'
import Linkcomponent from './../../components/link'
import './style.css'
import { connect } from 'react-redux';
import add from './../../images/add1.png'
import avatar from './../../images/avatar.png'
import add2 from './../../images/add2.png'
import { Link } from "react-router-dom";
import Footer from './../../components/footer'




class Adds_details extends React.Component {
    render() {
        let addDetails = this.props.adDetail
        let currentUser = this.props.current_user

        console.log('yaha ', addDetails)
        return (

            <div>
                <div>
                    <Header />
                    <Linkcomponent />
                    <img class="img-fluid ml-5 pl-5" alt="Responsive image " src={add} />
                </div>
                <div className='row my-5'>
                    <div className='col-lg-8'>
                        <div>
                            <img className='border rounded mx-2 px-5 py-2' alt="Responsive image " width='838' height='450' src={addDetails.imageurl} />
                        </div>
                        <div className='mx-2 border rounded'>
                            <h2 className='p-3'>Details</h2>
                            <span className='p-3'>
                                Condition : {addDetails.condition} <span className='ml-5 pl-5'> Type : {addDetails.itemtype}</span>
                            </span>
                            <hr />
                            <div className='m-4'>
                                <h2 >Details</h2>
                                <p>{addDetails.discript}</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <div className='card mb-4'>

                            <div className='card-body'>
                                <h2>RS : {addDetails.rupees}</h2>
                                <p> {addDetails.adtitle}</p>
                                <p> {addDetails.stat}</p>
                            </div>

                        </div>
                        <div className='card mb-3'>

                            <div className='card-body'>
                                <h2>Seller discription</h2>
                                <p>
                                    <img className='rounded-circle' src={addDetails.userpic} width='55' alt="" />
                                    <span className='pl-2 text-bold'>{addDetails.username}</span>
                                </p>

                                {<Link to='/chat'>   <button  className='btn btn-dark'>chat with seller</button></Link>}
                                {/* {!currentUser.name && <button className='btn btn-dark'>chat with seller</button>} */}

                            </div>

                        </div>
                        <div className='border mb-3'>

                            <div className='card-body'>
                                <h4>Post In</h4>
                                <iframe className='fluid' width='350' src="https://www.google.com/maps/d/embed?mid=1usRkJzwkZLUjSCJV6O5NcyS4vco" />
                            </div>

                        </div>
                        <div className='ml-3'>

                            <img src={add2} width='350' alt="" />

                        </div>
                    </div>
                </div>
            <Footer/>

            </div>

        );
    }
}



const mapStateToProps = (state) => ({
    adDetail: state.adDetail,
    current_user: state.current_user
})



export default connect(mapStateToProps, null)(Adds_details);