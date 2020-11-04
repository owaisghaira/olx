import firebase from 'firebase';

const fb_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            let user_login = {
                name: user.displayName,
                profilepic: user.photoURL,
                email: user.email,
                uid: user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(user_login)
                .then(() => {
                    dispatch({ type: 'USERADD', payload: user_login })
                    alert('login successfull')
                })
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
    let firedata = [];
    let db = firebase.database().ref('/').child('Mobile');
    return (dispatch) => {
        db.on('child_added', data => {
            firedata.push(data.val())
        })
        dispatch({ type: "ADDATA", payload: firedata })

    }
}
export {
    set_data,
    adds_data,
    addDtail,
    fb_login
}