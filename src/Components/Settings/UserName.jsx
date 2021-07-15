import React from 'react'
import { toast } from 'react-toastify'
import {  Input, Button, Form } from 'semantic-ui-react'
import {auth} from '../../utils/firebase'


export default function UserName(props) {

    const {user, setShowModal, setTitleModal, setContentModal} = props
    

    const editarNombre = () => {
        setShowModal(true)
        setTitleModal("cambiar el nombre de usuario")
        setContentModal( <ChangeDisplayName setShowModal={setShowModal} displayName={user.displayName} /> )
    }
    return (
        <div className="profile-username" >          
            <h2>{user.displayName}</h2>     
            <Button onClick={editarNombre} >Cambiar Usuario</Button>
        </div>
    )
}


function ChangeDisplayName (props) {

    const {displayName, setShowModal}=props
    const [formData, setFormData] = React.useState({displayName:displayName})
    const [isLoading, setIsLoading] = React.useState(false)

    const onSubmit = () => {
        setIsLoading(true)
        if(formData.displayName === displayName || !formData.displayName){
            setShowModal(false)
        }else{
            setIsLoading(true)
            auth.currentUser.updateProfile({displayName: formData.displayName}).then(() => {
                toast.success("Se cambio correctamente")
            }).catch((err) => {
                toast.error("Ocurrio un error al cambiar el nombre")
            }).finally(() => {
                setIsLoading(false)
                setShowModal(false)
            })
        }
        
    }


    return(
        <Form onSubmit={onSubmit} >
            <Form.Field>
                <Input  
                    defaultValue={displayName}
                    onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                />
            </Form.Field>
            <Button type="submit" loading={isLoading} >Cambiar Nombre</Button>
        </Form>
    )
}
