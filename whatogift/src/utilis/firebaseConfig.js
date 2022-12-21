import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-Q8hAyWlztGeM8i6-OU_qK15g0FqmBkY",
    authDomain: "whatogift-9013c.firebaseapp.com",
    projectId: "whatogift-9013c",
    storageBucket: "whatogift-9013c.appspot.com",
    messagingSenderId: "850650979600",
    appId: "1:850650979600:web:6eb37fef0488516a551995"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;