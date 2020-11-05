import React from 'react'
import { Link } from "react-router-dom";
import './link.css'

class Linkcomponent extends React.Component {
    render() {
        return (
            <div className='shadow-sm mb-5 bg-white '>
                <ul className='pl-2'>

                    <li > <Link className=' text-dark' to='/'>ALL CATEGORIES</Link></li>
                    <li className='pl-3'><Link className=' text-dark' to='/mobile'>Mobile Phones</Link></li>
                    <li><Link className=' text-dark'  to='/car'>Cars</Link></li>
                    <li><Link className=' text-dark'  to='/motorcycles'>Motorcycles</Link></li>
                    <li><Link className=' text-dark'  to='/house'>Houses</Link></li>
                    <li><Link className=' text-dark'  to='/tv-video-audio'>Tv-Video-Audio</Link></li>
                    <li><Link className=' text-dark'  to='/animals'>Animals</Link></li>
                    <li><Link className=' text-dark'  to='/land'>Land & Plots</Link></li>
                </ul>
            </div>
        )
    }
}
export default Linkcomponent;