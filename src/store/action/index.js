// import firebase from './../../config/firebase';
import firebase from 'firebase';

const fb_login = () => {
    console.log('chal raha he ')

    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(user)
        }).catch(function (error) {
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }
}

const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })

    }
}
const addDtail = (data) => {
    return (dispatch) => {
        // console.log(data)
        dispatch({ type: "ADDETAIL", payload: data })

    }
}
const adds_data = (Data) => {
    // console.log(Data)
    let firedata = [];
    let db = firebase.database().ref('/').child('Mobile');
    return (dispatch) => {
        db.on('child_added', data => {
            console.log(data.val())

            firedata.push(data.val())
        })
        console.log('act ==?', firedata)
        dispatch({ type: "ADDATA", payload: firedata })

    }
}
export {
    set_data,
    adds_data,
    addDtail,
    fb_login
}