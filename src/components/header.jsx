import React from 'react';
import imagesLogo from '../images/olx.webp'
import '../../src/App.css';
import '../css/font-awesome.min.css'



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
            <div className="text-center bg-light p-2">
               
                    <div className="row">
                        <div className="col-lg-1">
                            <Logo />
                        </div>
                        <div className="col-lg-3 " >
                            {/* <input id="location" type="text"  placeholder=""/> */}
                            <div className="fontuser"> 
                             
                                <input type="text" placeholder="Enter Username" name="uname" required />  
                                {/* <i className="fa fa-user fa-lg" />  */}
                            </div>
                        </div>
                        <div className="col-lg-4   ">
                            <input id="search" type="text" />
                        </div>
                        <div id="icons" className="col-lg-4 ">
                            <i className="fa fa-comment-o " aria-hidden="true"></i>
                            <i class="fa fa-bell-o " aria-hidden="true"></i>
                            <i class="fa fa-user-circle-o " aria-hidden="true"></i>
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            <button id="nav-btn" className="font-weight-bold">+ SELL</button>
                        </div>
                    </div>
               
            </div>
        )
    }
}

export default Header;