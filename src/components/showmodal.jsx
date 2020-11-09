import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fb_login } from './../store/action'




class Addmodal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h2 className='font-weight-bold'> Login Acoount First </h2>
                            <span className='small'>Help to make OLX safer to buy and sell</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.current_user.name ?
                            <h1>Welcome {this.props.current_user.name}</h1>

                            :
                            // <h1>wellcome ${this.props.current_user.name}</h1>
                            <div onClick={() => this.props.fb_login()} className='border btn btn-lg bg-primary text-light ml-5 p-2 rounded'>
                                <span class="fa fa-facebook fa-2x pl-3 " aria-hidden="true"></span>
                                <span className='ml-3 pr-5'> Continue with FaceBook</span>
                            </div>
                        }

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    current_user: state.current_user
})
const mapDispatchToProps = (dispatch) => ({
    fb_login: () => dispatch(fb_login())
})


export default connect(mapStateToProps, mapDispatchToProps)(Addmodal);

