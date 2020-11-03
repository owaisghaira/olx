import React from 'react'
import Header from './../../components/header'
import Linkcomponent from './../../components/link'
import './style.css'
import { connect } from 'react-redux';
import add from './../../images/add1.png'
import avatar from './../../images/avatar.png'
import add2 from './../../images/add2.png'




class Adds_details extends React.Component {
    render() {
        console.log(this.props.adDetail)
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
                            <img className='border rounded mx-2' alt="Responsive image " width='838' height='450' src={add} />
                        </div>
                        <div className='mx-2 border rounded'>
                            <h2 className='p-3'>Details</h2>
                            <span className='p-3'>
                                Condition : New <span className='ml-5 pl-5'> Type : Mobile</span>
                            </span>
                            <hr />
                            <div className='m-4'>
                                <h2 >Details</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Repellendus voluptatum quisquam omnis illum ipsam eos tenetur!
                                Fugiat, eum. Fugiat vel quaerat dolorem assumenda libero illum
                                perspiciatis repudiandae iusto adipisci quia.</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <div className='card mb-4'>

                            <div className='card-body'>
                                <h2>RS : 17,200</h2>
                                <p>samsunhu s7 egdsh</p>
                                <p>karachi</p>
                            </div>

                        </div>
                        <div className='card mb-3'>

                            <div className='card-body'>
                                <h2>Seller discription</h2>
                                <p>
                                    <img src={avatar} width='55' alt="" />
                                    <span className='pl-2 text-bold'>Owais ghaira</span>
                                </p>

                                <button className='btn btn-dark'>chat with seller</button>
                            </div>

                        </div>
                        <div className='border mb-3'>

                            <div className='card-body'>
                                <h4>Post In</h4>
                                <iframe className='fluid' width='350' src="https://www.google.com/maps/d/embed?mid=1usRkJzwkZLUjSCJV6O5NcyS4vco" />
                            </div>

                        </div>
                        <div className='ml-3'>

                           <img src={add2} width='350' alt=""/>

                        </div>
                    </div>
                </div>


            </div>

        );
    }
}



const mapStateToProps = (state) => ({
    adDetail: state.adDetail
})



export default connect(mapStateToProps, null)(Adds_details);