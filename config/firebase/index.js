import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAW9lj4PXoO8jPYRIM9ZMITy1GctjQg480",
    authDomain: "clocker-work-158fc.firebaseapp.com",
    projectId: "clocker-work-158fc",
    storageBucket: "clocker-work-158fc.appspot.com",
    messagingSenderId: "303459357233",
    appId: "1:303459357233:web:4516c983fcfc09bc37fb10",
    measurementId: "G-4KYEDP81KY"
  }
  export default firebase = firebase.app.length
      ? firebase.app()
      : firebase.initializeApp(firebaseConfig);
  