import React from 'react'
import { toast } from 'react-toastify'
import { Button, Form, Icon, Input } from 'semantic-ui-react'
import alertErrors from '../../utils/AlertErrors'
import { reautenticate } from '../../utils/Api'
import { auth } from '../../utils/firebase'



export default function UserEmail(props) {

    const {user, setContentModal, setShowModal, setTitleModal} = props


    const cambiarEmail = () => {
        setShowModal(true)
        setTitleModal("Cambiar el Email")
        setContentModal ( <ChangeUserEmail email={user.email} setShowModal={setShowModal}  /> )
    }
    
    return (
        <div className="profile-email" >
            <h2>email: {user.email}</h2>
            <Button onClick={cambiarEmail} >Cambiar Email</Button>
        </div>
    )
}


function ChangeUserEmail (props) {

    const {email, setShowModal}=props
    const [formData, setFormData] = React.useState({email: "", password: ""})
    const [isLoading, setIsLoading] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)

    const onSubmit= () => {
        setIsLoading(true)
        reautenticate(formData.password).then(() =>{
            const user= auth.currentUser
            user.updateEmail(formData.email).then(() =>{
                toast.success("Se cambio el Email correctamente")
            }).catch((err) => {
                alertErrors(err?.code)
                setIsLoading(false)
                
            })
        }).catch((err) => {
            alertErrors(err?.code)
            setIsLoading(false)
            console.log(err)
            
        }).finally(() => {
            setIsLoading(false)
            setShowModal(false)
        })
    }
    
    return(

        <Form onSubmit={onSubmit}  > 
            <Form.Field>
                <Input 
                    defaultValue ={email}
                    onChange={(e) => setFormData({...formData,email: e.target.value})}
                />
                <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingrese contraseña"
                    onChange={(e) => setFormData({...formData, password: e.target.value })}
                    icon={showPassword ? (
                        <Icon 
                            name="eye slash outline"
                            link
                            onClick={()=>setShowPassword (!showPassword)}
                        />
                    ): (
                        <Icon  
                            name="eye"
                            link
                            onClick={()=>setShowPassword(!showPassword)}
                        
                        />
                    )}
                />
            </Form.Field>
            <Button type="submit" loading={isLoading} >Cambiar Email</Button>
        </Form>
    )
}
