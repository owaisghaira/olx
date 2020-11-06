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

const fb_out = () => {
    return (dispatch) => {
        let user_out = {}
        firebase.auth().signOut()
            .then(() => {
                alert('Logout successfull')
                dispatch({ type: 'USERADD', payload: user_out })

            })
            .catch(error => {
                console.log(error)
            });
    }
}

const allUsers = () => {
    return (dispatch) => {
        let users = []
        firebase.database().ref('/').child('users').on('child_added', (data) => {
            users.push(data.val())
        })
        dispatch({ type: 'ALLUSERADD', payload: users })
        // console.log('allusers', users)


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
    const categories = ['Mobile', 'Animals']
    let firedata = [];
    // let db = firebase.database().ref('/').child('Mobile');
    return (dispatch) => {
        firebase.database().ref('/').child('Mobile').on('child_added', data => {
            firedata.push(data.val())
        })
        firebase.database().ref('/').child('Animals').on('child_added', data => {
            firedata.push(data.val())
        })
        dispatch({ type: "ADDATA", payload: firedata })

    }
}
export {
    set_data,
    adds_data,
    addDtail,
    fb_login,
    fb_out,
    allUsers
}