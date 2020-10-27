import React from 'react'
import './style.css';
import { connect } from 'react-redux';
import { set_data } from '../../store/action';

class Home extends React.Component{
  render(){
      let user = {
        name:'osama',
        email:'osama@gmail.com'
      }
      console.log('props...',this.props.users)

  return (
    <div>
      <h1>Home</h1>
      <button onClick = {()=> this.props.set_data(user)}>setdata</button>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
    users : state.users
    // user : "owais"
})
const mapDispatchToProps = (dispatch) => ({
    set_data:(data)=> dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);