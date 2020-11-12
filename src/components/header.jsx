import React from 'react';
import imagesLogo from '../images/olx.webp'
import './header.css';
import '../css/font-awesome.min.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fb_login, fb_out, search_key } from './../store/action'
import Addmodal from './showmodal'

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
    constructor(props) {
        super(props)
        this.state = {
            list: ['car', 'mobile', 'motorcycles', 'animals', 'houses', 'tv-video-audio'],
            addModalShow: false
        }
    }
    search = (e) => {
        // console.log(e.target.value)
        const { list } = this.state
        const text = e.target.value

        const result = list.filter((item) => {
            return item.indexOf(text) != -1
        })
        // console.log('result....', result[0])
        if (result.length == 0) {
            console.log('no data')
        } else {
            let search1 = result[0]
            var firstChar = search1.slice(0, 1);
            var otherChars = search1.slice(1);
            firstChar = firstChar.toUpperCase();
            otherChars = otherChars.toLowerCase();
            search1 = firstChar + otherChars;
            this.setState({
                result: search1
            })
        }
    }
    handleResult = () => {
        let srch = this.state.result
        if (srch != undefined) {
            this.props.search_key(this.state.result)

            this.setState({
                result: ''
            })
        }
    }

    render() {
        // console.log('header props..',this.props)
        console.log(this.props.search)

        let addModalClose = () => this.setState({ addModalShow: false })
        let current_user = this.props.current_user
        return (
            <div className="container-fluid shadow-lg text-center bg-light p-2">

                <div className="row ">
                    <div className="col-lg-1">
                        <Link to='/'> <Logo /></Link>
                    </div>
                    <div className="col-lg-3 " >
                        <div className="fontuser">

                            <input type="text" placeholder=" Karachi" name="uname" required />
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        {/* <input placeholder=" Find Car,Mobile & more" onChange={this.search} id="search" type="text" />
                        <button onClick={this.handleResult}><Link to='/search'> seach </Link></button> */}
                        <div className="input-group md-form form-sm form-2 mt-1 pl-0">
                            <input className="form-control my-0 py-1 red-border" onChange={this.search} type="text" placeholder=" Find Car,Mobile & more" aria-label="Search" />
                            <Link to='/search'> <div onClick={this.handleResult} className="input-group-append mt-1">
                                <span className="input-group-text btn py-2 text-light red bg-dark lighten-3" id="basic-text1">
                                    <i className="fa fa-search text-light" aria-hidden="true" /></span>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div id="icons" className="col-lg-4 ">
                        {current_user.name ?
                            <span>
                                <i className="fa fa-comment-o " aria-hidden="true"></i>
                                <img className='img-circle ml-2 rounded-circle' width='40' src={current_user.profilepic} alt="" />
                                <span className="dropdown btn show">
                                    <span className="  dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true"></span>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a onClick={() => this.props.fb_out()} className="dropdown-item">LogOut</a>
                                    </div>
                                </span>
                            </span>
                            :
                            <p className='font-weight-bold btn mb-0' onClick={() => this.props.fb_login()}> Login</p>
                        }
                        {current_user.name ?
                            < Link to='/post'> <button id="nav-btn" className="font-weight-bold shadow">+ SELL</button> </Link>
                            :
                            <button id="nav-btn" onClick={() => this.setState({ addModalShow: true })} className="font-weight-bold text-decoration-none shadow">+ SELL</button>
                        }
                        <Addmodal show={this.state.addModalShow} onHide={addModalClose} />
                    </div>

                </div>

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user,
    search: state.search_key
})
const mapDispatchToProps = (dispatch) => ({
    fb_login: () => dispatch(fb_login()),
    fb_out: () => dispatch(fb_out()),
    search_key: (data) => dispatch(search_key(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);