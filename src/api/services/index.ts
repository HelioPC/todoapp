import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { firebaseConfig } from "../firebase/config"

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const api = {
    signWithGoogle: async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await firebaseApp.auth().signInWithPopup(provider)

        return result
    }
}

export default api
