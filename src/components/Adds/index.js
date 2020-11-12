import React from 'react'
import Car from './../../images/car.jpeg'



class Adds extends React.Component {
    render() {
        return (
            <div className='container   '>
            <div className="card mb-3" >
                <img className="card-img-top my-2"  width='100' height='200' src={this.props.pic} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">RS : {this.props.price} </h5>
                    <hr/>
                    <p  className="card-text">{this.props.detail}</p>
                </div>
            </div>
            </div>
        );
    }
}



export default Adds;