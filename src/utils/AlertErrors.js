import {toast} from 'react-toastify'

export default function alertErrors (type) {

    switch (type) {
        case "auth/email-already-in-use":
            toast.error("El correo ya existe, intente ingresar a PlayAf")
            break;
        case "auth/wrong-password":
            toast.error("La contraseña es invalida")
            break;
        case "auth/user-not-found":
            toast.error("El usuario no existe, Registrate")
            break;
        case "auth/invalid-email":
            toast.error("El email no puede ser el mismo")
            break;
        default: 
            toast.error("Error del servidor")
            break;
    }

}