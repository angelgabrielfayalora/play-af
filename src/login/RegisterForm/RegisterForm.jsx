import React from 'react'
import './RegisterForm.scss'
import {Button, Input, Icon, Form} from 'semantic-ui-react'
import {auth} from '../../utils/firebase'
import {toast} from 'react-toastify'
import {validateEmail} from '../../utils/Validations'
import alertErrors from '../../utils/AlertErrors'



export default function RegisterForm(props) {

    const {setSelectForm}=props
    const [showPassword, setShowPassword] = React.useState(false)
    const [formData, setFormData] = React.useState(InitialForm())
    const [isLoading, setIsLoading] = React.useState(false)
    const [formErrors, setFormErrors] = React.useState({})

    const onChange = (e) => {
        setFormData({...formData,
        [e.target.name] : e.target.value})
        

    }

    
    const onSubmit = () => {

        setFormErrors({})
        let errors= {}
        let formOk=true
        
        if(!validateEmail(formData.email)){
            errors.email= true
            formOk= false
        }
        if(formData.password.length < 6){
            errors.password=true
            formOk=false
        }
        if(!formData.username ){
            errors.username=true
            formOk=false
        }
        setFormErrors(errors)
        
        if(formOk){
            setIsLoading(true)
            auth.createUserWithEmailAndPassword(formData.email, formData.password).then(() =>{
                toast.success("Tu cuenta de PlayAf se creó correctamente")
                updateUserName()
                
            }).catch((err) =>{
                alertErrors(err.code)
                setSelectForm("register")
                
            }).finally(() => {
                
                setIsLoading(false)
                setSelectForm(null)
            })
            
        }
    }
    
    const updateUserName = () => {
        auth.currentUser.updateProfile({
            displayName: formData.username
        }).catch(() => {
            toast.error("Error al obtener el Usuario")
        })
    }
    
    return (
        <div className="register-form" >
            <h1>Uneté y encuentra millones de peliculas y series </h1>
            <Form onSubmit={onSubmit} onChange={onChange} >
                <Form.Field>
                    <Input 
                        type="text"
                        placeholder="Correo electronico"
                        icon="mail outline"
                        name="email"
                        error={formErrors.email}
                    />
                    {
                        formErrors.email && (
                            <span className="error-text" >
                                Introduce un correo  valido.
                            </span>
                        )
                    }
                </Form.Field>
                <Form.Field>
                    <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        name="password"
                        error={formErrors.password}
                        icon={
                            showPassword ? (
                                <Icon  
                                    name="eye slash outline"
                                    link
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ): (
                                <Icon  
                                    name="eye"
                                    link
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )
                        }
                    />
                    {
                        formErrors.password && (
                            <span className="error-text" >
                                Introduce una contraseña mayor a 5 caracteres.
                            </span>
                        )
                    }
                </Form.Field>
                <Form.Field>
                    <Input 
                        type="text"
                        placeholder="¿Como quieres llamarte?"
                        icon="user circle outline"
                        name="username"
                        error={formErrors.username}
                    />
                    {
                        formErrors.username && (
                            <span className="error-text" >
                                Campo obligatorio.
                            </span>
                        )
                    }
                </Form.Field>
                <Button type="submit" loading={isLoading} >Registrate</Button>
            </Form>
            <div className="register-form__options" >
                <p onClick={() =>setSelectForm(null)} >volver</p>
                <p>
                    ¿ ya tienes PlayAf ? <span onClick={() =>setSelectForm("auth")} >Iniciar sesion</span>
                </p>
            </div>
        </div>
    )
}

function InitialForm(){


    return{
        email:"",
        password:"",
        username:""
    }
}
