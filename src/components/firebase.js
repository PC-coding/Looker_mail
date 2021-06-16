import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlk9V6Xm-Vc2g-ifv9XtdI0aI9I1FG-XE",
    authDomain: "looker-mail.firebaseapp.com",
    projectId: "looker-mail",
    storageBucket: "looker-mail.appspot.com",
    messagingSenderId: "1006548466192",
    appId: "1:1006548466192:web:2f8c69207d960641496895",
    measurementId: "G-X228GZ9DPF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };