import React from 'react'
import './Login.scss'
import fondoImage from '../img/inicio.jpg'
import logoImage from '../img/logo-form.png'
import logoImagePlomo from '../img/logo-form-plomo.png'
import logoImageRed from '../img/logo-form-red.png'


import AuthForm from './AuthForm/AuthForm'
import RegisterForm from './RegisterForm/RegisterForm'
import SelectForm from './SelectForm/SelectForm'


    const Login = () => {

    const [selectForm, setSelectForm] = React.useState(null)


    const handleForm = () => {
        switch (selectForm) {
            case "auth":
                return <AuthForm  setSelectForm={setSelectForm} />
            case "register":
                return <RegisterForm setSelectForm={setSelectForm}  />
            default:
                return < SelectForm setSelectForm={setSelectForm} />
                
        }
    }

    


    return (
        <div className="login" style={{backgroundImage: `url(${fondoImage})`}} >
            <div className="login__dark" />
                <div className="login__box" >
                    <div className="login__box-logo" >
                        <img src={logoImageRed} alt="Playaf" />
                    </div>

                    {handleForm()}
                    
                </div>
            
        </div>
    )
}

export default Login