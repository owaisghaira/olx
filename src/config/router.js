import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./../container/Home"
import Mobile from "./../container/Mobile"
import Motorcycles from "./../container/Motorcycles"
import Car from "./../container/Car"
import About from "./../container/about"
import Houses from "./../container/Houses"
import Land from "./../container/Land"
import Tablets from "./../container/Tablets"
import Tv from "./../container/Tv"
import Post from './../container/Post/post'
import Attributes from './../container/attributes/attributes'



class Approuter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route exact path='/mobile' component={Mobile}/>
                <Route exact path='/car' component={Car}/>
                <Route exact path='/motorcycles' component={Motorcycles}/>
                <Route exact path='/house' component={Houses}/>
                <Route exact path='/tv-video-audio' component={Tv}/>
                <Route exact path='/tablets' component={Tablets}/>
                <Route exact path='/land' component={Land}/>
                <Route exact path='/post' component={Post}/>
                <Route exact path='/post/attributes' component={Attributes}/>
            </Router>
        )
    }
}
export default Approuter;