import * as firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyD0byHo-DXM4AHMoNpR_BGtikoqs9hr0z0",
    authDomain: "olx-app-f2017.firebaseapp.com",
    databaseURL: "https://olx-app-f2017.firebaseio.com",
    projectId: "olx-app-f2017",
    storageBucket: "olx-app-f2017.appspot.com",
    messagingSenderId: "777924678868",
    appId: "1:777924678868:web:e4482d6d0545ce3c5d5741",
    measurementId: "G-5Z9T3ZJ4NE"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);