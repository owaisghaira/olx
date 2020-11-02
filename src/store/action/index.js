import firebase from './../../config/firebase';


const set_data = (data) => {
    return (dispatch) => {
        // console.log(data)
        dispatch({ type: "SETDATA", data: data })

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
    adds_data
}