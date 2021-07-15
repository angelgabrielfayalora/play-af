import db, { auth, firebase } from "./firebase";



export async function isUserAdmin(uid) {
    const response = await db.collection("admins").doc(uid).get()
    return response.exists
}

export  const reautenticate = (password) => {

    const user = auth.currentUser
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    )

    return user.reauthenticateWithCredential(credential)


}