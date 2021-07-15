import React from 'react'
import { toast } from 'react-toastify'
import { Button, Form, Icon, Input } from 'semantic-ui-react'
import alertErrors from '../../utils/AlertErrors'
import { reautenticate } from '../../utils/Api'
import { auth } from '../../utils/firebase'




export default function UserPassword(props) {


    const {user, setShowModal, setContentModal, setTitleModal} =props

    const cambiarPassword = () => {

        setShowModal(true)
        setTitleModal("Cambia tu Contraseña")
        setContentModal( <DisplayUpdatePassword user={user} setShowModal={setShowModal} /> )
    }

    return (
        <div className="profile-password" >
            <h2>Password: **********</h2>
            <Button onClick={cambiarPassword} >Cambiar Contraseña</Button>
        </div>
    )
}

function DisplayUpdatePassword (props) {
    
    const {user, setShowModal}=props
    const [showPassword, setShowPassword] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [formData, setFormData] = React.useState({
        password: "",
        newPassword: "",
        repeatNewPassword: ""
    })
    

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
        
        
    }
    const onSubmit = () =>{
        
        if(!formData.password || !formData.newPassword || !formData.repeatNewPassword){
            toast.error("Los campos no pueden estar vacios")
        }else if(formData.password === formData.newPassword ){
            toast.error("La contraseña no puede ser igual a nueva contraseña")
        }else if(formData.password.length < 6 ||formData.newPassword.length < 6 ||formData.repeatNewPassword.length < 6){
            toast.error("La contraseña de debe ser mayor a 6 caracteres")
        }else if (formData.newPassword !== formData.repeatNewPassword){
            toast.error("La nueva contraseña deben ser iguales")
        }else{
            setIsLoading(true)
            reautenticate(formData.password).then(() =>{
                const user= auth.currentUser
                user.updatePassword(formData.newPassword).then(() =>{
                    toast.success("Su contraseña se cambio correctamente")
                    auth.signOut()
                    
                }).catch((err) =>{
                    alertErrors(err?.code)
                })
            }).catch((err) =>{
                alertErrors(err?.code)

            }).finally(() =>{
                setIsLoading(false)
                setShowModal(false)
                toast.success("Ingrese nuevamente")
            })
        }

        

    }


    return (
        <Form onSubmit={onSubmit} onChange={onChange} >
            <Form.Field>
                <Input 
                    placeholder="Ingrese contraseña actual"
                    name="password"
                    //onChange={(e) => setPassword({...password, password: e.target.value}) }
                    type={showPassword ? "text" : "password"}
                    icon={  
                        <Icon 
                            onClick={() => setShowPassword(!showPassword)}
                            name={showPassword ? "eye slash outline" : "eye"}
                            link
                        />
                    }
                />
                <Input 
                    placeholder="Ingrese contraseña nueva"
                    name="newPassword"
                    type={showPassword ? "text" : "password"}
                    icon={
                        <Icon  
                            onClick={() => setShowPassword(!showPassword)}
                            name={showPassword ? "eye slash outline" : "eye"}

                            link
                        />
                   }
                />
                <Input 
                    placeholder="Repita la contraseña nueva"
                    name="repeatNewPassword"
                    type={showPassword ? "text" : "password"}
                    icon={
                        <Icon  
                            onClick={() => setShowPassword(!showPassword)}
                            name={showPassword ? "eye slash outline" : "eye"}
                            link
                        />
                    }
                />
                <Button type="submit" >Cambiar contraseña</Button>
            </Form.Field>
        </Form>
    )
}


