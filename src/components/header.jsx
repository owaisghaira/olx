import React from 'react';
import imagesLogo from '../images/olx.webp'
import './header.css';
import '../css/font-awesome.min.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fb_login, fb_out } from './../store/action'
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
            list: ['car', 'mobile', 'motorcycles'],
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
            this.setState({
                result: result[0]
            })
        }
    }
    handleResult = () => {
        let srch = this.state.result
        if (srch != undefined) {
            console.log('handel===', this.state.result)
        }
    }

    render() {
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
                        <input placeholder=" Find Car,Mobile & more" onChange={this.search} id="search" type="text" />
                        <button onClick={this.handleResult}>seach</button>
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
    current_user: state.current_user
})
const mapDispatchToProps = (dispatch) => ({
    fb_login: () => dispatch(fb_login()),
    fb_out: () => dispatch(fb_out())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);