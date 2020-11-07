import React from 'react'
import Header from './../../components/header'
import LinkU from './../../components/link'
import './chatStyle.css'
import { connect } from 'react-redux'
import { fb_out, allUsers } from './../../store/action'
import firebase from './../../config/firebase'


class ChatBox extends React.Component {
    constructor() {
        super()
        this.state = {
            chat_user: {},
            chats: [],
            message: ''
        }
    }
    uid_merg = (uid1, uid2) => {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }

    chat = (user) => {
        this.setState({
            chats: [],
            chat_user: user
        })
        // this.setState({
        //     chat_user: user
        // })
        let current_user = this.props.current_user
        let chat_user = this.state.chat_user
        let merg_uid = this.uid_merg(current_user.uid, chat_user.uid)
        this.get_messages(merg_uid)

    }
    send_message = () => {
        let current_user = this.props.current_user
        let chat_user = this.state.chat_user
        let merg_uid = this.uid_merg(current_user.uid, chat_user.uid)

        firebase.database().ref('/').child(`chats/${merg_uid}`).push({
            message: this.state.message,
            name: current_user.name,
            uid: current_user.uid
        })

        // this.state.chats.push({
        //     message: this.state.message
        // })
        // this.setState({
        //     chats:this.state.chats,
        //     message:''
        // })
    }

    get_messages = (uid) => {

        firebase.database().ref('/').child(`chats/${uid}`).on('child_added', (masseges) => {
            this.state.chats.push(masseges.val())
            this.setState({
                chats: [],
                chats: this.state.chats
            })
        })

    }

    componentDidMount() {
        this.props.allUsers()
    }

    render() {
        console.log('alllll', this.props.allUsers)
        let current_user = this.props.current_user
        let { chat_user } = this.state

        return (
            <div>
                <Header />
                <LinkU />
                <div className="container bg-white chatbox rounded">
                    <div className="row h-100">
                        <div className="col-md-4 px-0" id="side-1">
                            <div className="card cardchat h-100">
                                <div className="card-header">
                                    <div className="row ">
                                        <div className="col-md-2 col-2">
                                            <img className='img-circle rounded-circle' width='40' src={current_user.profilepic} alt="" />

                                        </div>
                                        <div className="col-md-9 col-9 mt-2">
                                            <h5>{current_user.name}</h5>
                                        </div>
                                        <div className="col-md-1 col-1">
                                            <div className="dropleft mt-2">
                                                <span className data-toggle="dropdown">
                                                    <i className="fa fa-ellipsis-v icon" aria-hidden="true" />
                                                </span>
                                                <div className="dropdown-menu">
                                                    <a onClick={() => this.props.fb_out()} className="dropdown-item">LogOut</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush" id="lstchat">
                                    {this.props.all_user.map((v, i) => {
                                        return current_user.uid != v.uid && <li onClick={() => this.chat(v)} key={i} className="list-group-item ml-0 list-group-item-action" >
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={v.profilepic} className="profile-pic rounded-circle" alt="" />
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="name"> {v.name} </div>
                                                </div>
                                            </div>

                                        </li>

                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* ////////////////////////////// chat pannel  ////////////////////////// */}
                        <div className="col-md-8 h-100 col-12 pl-0 px-0 " >

                            {Object.keys(this.state.chat_user).length ?

                                <div className="card cardchat" >
                                    <div className="card-header">
                                        <div className="row">

                                            <div className="col-md-2 col-2">
                                                <img className="profile-pic rounded-circle" id="divpic" src={chat_user.profilepic} alt="" />
                                            </div>
                                            <div className="col-md-10 col-10">
                                                <div className="name" id="divChatname">{chat_user.name}</div>
                                                <div className="under-name" id="divChatseen">{chat_user.email} </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body" id="messages">
                                        <ul>
                                            {this.state.chats.map((v, i) => {
                                                return <li key={i}>{v.message}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="card-footer p-2">
                                        <div className="row">
                                            <div className="col-md-1 col-1">
                                                <i className="fa fa-smile-o fa-3x m-3" aria-hidden="true" />
                                            </div>
                                            <div className="col-md-10 col-10">
                                                <input value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} id="messageinput" type="text" placeholder="type here..." className="form-control ml-1 form-rounded  " />
                                            </div>
                                            <div className="col-md-1 col-1">
                                                <i onClick={() => this.send_message()} className="fa fa-share btn fa-2x pr-5" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                :
                                <div className="card cardchat" >

                                    <div className='text-center mt-5 pt-5'>
                                        <i class="fa fa-comments-o" aria-hidden="true"></i>
                                        <p>Select a chat to view conversation</p>
                                    </div>

                                </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    current_user: state.current_user,
    all_user: state.all_user
})
const mapDispatchToProps = (dispatch) => ({
    fb_out: () => dispatch(fb_out()),
    allUsers: () => dispatch(allUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);