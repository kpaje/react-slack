import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyCyACkbU1iPuy-FAmOvW6MGNllQf3bON9Y",
	authDomain: "react-slack-e1016.firebaseapp.com",
	databaseURL: "https://react-slack-e1016.firebaseio.com",
	projectId: "react-slack-e1016",
	storageBucket: "react-slack-e1016.appspot.com",
	messagingSenderId: "779872821435",
	appId: "1:779872821435:web:e766b285d5047e5d"
};
firebase.initializeApp(config);

export default firebase;
