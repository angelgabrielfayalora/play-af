import React from 'react'
import './AuthForm.scss'
import {Form, Button, Input, Icon} from 'semantic-ui-react'
import { validateEmail } from '../../utils/Validations'
import { auth } from '../../utils/firebase'
import alertErrors from '../../utils/AlertErrors'


export default function AuthForm(props) {

    const {setSelectForm} =props
    const [showPassword, setShowPassword] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [formData, setFormdata] = React.useState(InitialForm())
    const [formErrors, setFormErrors] = React.useState({})
    const [user, setUser] = React.useState(null)

    
    const onChange = (e) => {

        setFormdata({

             ...formData,
            [e.target.name]: e.target.value
            
        })


    }

    const onSubmit = () => {

        setFormErrors({})
        let errors= {}
        let formOk= true

        if(!validateEmail(formData.email)){
            errors.email=true
            formOk=false
        }
        if(formData.password.length < 6){
            errors.password=true
            formOk=false
        }
        setFormErrors(errors)

        if(formOk){
            setIsLoading(true)
            auth.signInWithEmailAndPassword(formData.email, formData.password).then((response) =>{
                setUser(response.user)

            }).catch((err) => {
                alertErrors(err.code)
            }).finally(() => {
                setIsLoading(false)
            })
        }
    }


    

    return (
        <div className="auth-form" >
            <h1>Peliculas, series y mucho mas</h1>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Field>
                    <Input 
                        type="text"
                        name="email"
                        placeholder="Correo electronico"
                        icon="mail outline"
                        error={formErrors.email}
                    />
                    {
                        formErrors.email && (
                            <span className="error-text" >
                                Introduce un email valido.
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
                                    onClick={() =>setShowPassword(!showPassword)}
                                />
                            ):(
                                <Icon  
                                    name="eye"
                                    link
                                    onClick={()=>setShowPassword(!showPassword)}
                                />
                            )
                        }
                    />
                    {
                        formErrors.password && (
                            <span className="error-text" >
                                Contraseña mayor a 5 caracteres.
                            </span>
                        )
                    }
                </Form.Field>
                <Button loading={isLoading} type="submit" >Iniciar sesion</Button>
            </Form>
            <div className="auth-form__options" >
                <p onClick={()=>setSelectForm(null)} >volver</p>
                <p>
                    no tienes cuenta?{""}
                    <span onClick={() => setSelectForm("register")} >Registrarte</span>
                </p>

            </div>
        </div>
    )
}

function InitialForm (){


    return{
        email: "",
        password: ""
    }
}
