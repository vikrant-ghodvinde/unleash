import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
const firebaseConfig = {
	apiKey: "AIzaSyD3BhwS6M37N2YMawg8ceOyr6HoHvz_Bf0",
	authDomain: "caresoul-60c46.firebaseapp.com",
	projectId: "caresoul-60c46",
	storageBucket: "caresoul-60c46.appspot.com",
	messagingSenderId: "62669546851",
	appId: "1:62669546851:web:ee0419d5c46f74790c9f56",
	measurementId: "G-FS5GXQ7M25"			
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
export { auth, provider ,facebookProvider,twitterProvider};
