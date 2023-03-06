import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC0PfwtJd4IRDNY9AO8k1I_eegNj6v7dAs",
  authDomain: "auth-rocketseat-48bb7.firebaseapp.com",
  projectId: "auth-rocketseat-48bb7",
  storageBucket: "auth-rocketseat-48bb7.appspot.com",
  messagingSenderId: "854884118052",
  appId: "1:854884118052:web:370ea0e4b4f1c6412872b1",
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
