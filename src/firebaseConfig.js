import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDZdQUOf0yhkPuPedSS_iE94AMFMDQj1E4",
    authDomain: "ipill-176ef.firebaseapp.com",
    databaseURL: "https://ipill-176ef.firebaseio.com",
    projectId: "ipill-176ef",
    storageBucket: "ipill-176ef.appspot.com",
    messagingSenderId: "1004131679586"
};
const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

export const provider = new Firebase.auth.FacebookAuthProvider()
provider.setCustomParameters({
    'display': 'popup'
});

export const userRef = db.ref('user')
export const sympRef = db.ref('symptom')

export const dbAuth = firebaseApp.auth()

