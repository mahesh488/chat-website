import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDWG4acvV_M4XaZu39OWGKEeNrWg9oRalc",
    authDomain: "whatshap-clone1.firebaseapp.com",
    projectId: "whatshap-clone1",
    storageBucket: "whatshap-clone1.appspot.com",
    messagingSenderId: "34243006068",
    appId: "1:34243006068:web:9a147eef010410d824cb21"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;