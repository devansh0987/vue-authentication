import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPUalO0G_5mYGeskErE5-fmBBFdDnQbwM",
  authDomain: "dummy-payarc.firebaseapp.com",
  databaseURL: "https://dummy-payarc-default-rtdb.firebaseio.com",
  projectId: "dummy-payarc",
  storageBucket: "dummy-payarc.appspot.com",
  messagingSenderId: "268022735350",
  appId: "1:268022735350:web:9df8c49c3f789a40bf27d7"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }