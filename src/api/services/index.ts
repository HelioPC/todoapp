import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { firebaseConfig } from "../firebase/config"

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const api = {
    signWithGoogle: async (): Promise<boolean> => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            const result = await firebaseApp.auth().signInWithPopup(provider)
            const user = result.user

            console.log(user)

            if(user === null) return false

            const query = await db.collection('user').where('uid', '==', user.uid).get()

            if(query.size === 0) {
                await db.collection('user').doc(user?.uid).set({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email,
                    password: null,
                    phone: user?.phoneNumber,
                    avatar: user?.photoURL,
                }, { merge: true })
            }
            console.log(query.size)

            return true
        } catch (error) {
            console.table(error)
            return false
        }
    }
}

export default api
