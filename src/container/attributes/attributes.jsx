import React from 'react'
import imagesLogo from './../../images/olx.webp'
import { Link } from "react-router-dom";



class Attributes extends React.Component{
    render(){
        return(
            <div className='container-fluid shadow-sm bg-light p-2'>
            <Link to='/post'> <i className="fa text-dark fa-arrow-left" aria-hidden="true" /> </Link>
            <img className='ml-3' src={imagesLogo} width="50" alt='logo' />
            {/* ////////////////// */}
          </div>
        )
    }
}

export default Attributes;