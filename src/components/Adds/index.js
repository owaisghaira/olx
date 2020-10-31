import React from 'react'
import Car from './../../images/car.jpeg'




class Adds extends React.Component {
    render() {
        return (

            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top my-2 img-fluid" src={Car} alt="Card  cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.price } </h5>
                    <p className="card-text">Mint condition</p>
                </div>
            </div>

        );
    }
}



export default Adds;