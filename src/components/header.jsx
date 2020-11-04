import React from 'react';
import imagesLogo from '../images/olx.webp'
import './header.css';
import '../css/font-awesome.min.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fb_login } from './../store/action'


class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={imagesLogo} width="50" alt='logo' />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        let current_user = this.props.current_user
        return (
            <div className="container-fluid shadow-lg text-center bg-light p-2">

                <div className="row ">
                    <div className="col-lg-1">
                        <Link to='/'> <Logo /></Link>
                    </div>
                    <div className="col-lg-3 " >
                        <div className="fontuser">

                            <input type="text" placeholder="Enter Username" name="uname" required />
                        </div>
                    </div>
                    <div className="col-lg-4   ">
                        <input id="search" type="text" />
                    </div>
                    <div id="icons" className="col-lg-4 ">
                        {current_user.name ?
                            <span>
                                <i className="fa fa-comment-o " aria-hidden="true"></i>
                                <img className='img-circle ml-2 rounded-circle' width='40' src={current_user.profilepic} alt="" />
                                <span className="dropdown btn show">
                                    <span className="  dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true"></span>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">LogOut</a>
                                    </div>
                                </span>
                            </span>
                            :
                            <p className='font-weight-bold btn ' onClick={() => this.props.fb_login()}> Login</p>
                        }
                        <Link to='/post'> <button id="nav-btn" className="font-weight-bold shadow">+ SELL</button> </Link>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user
})
const mapDispatchToProps = (dispatch) => ({
    fb_login: () => dispatch(fb_login())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);