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

                        <i className="fa fa-comment-o " aria-hidden="true"></i>
                        <i onClick={() => this.props.fb_login()} className="fa fa-user-circle-o btn " aria-hidden="true"></i>
                        <Link to='/post'> <button id="nav-btn" className="font-weight-bold shadow">+ SELL</button> </Link>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    fb_login: () => dispatch(fb_login())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);