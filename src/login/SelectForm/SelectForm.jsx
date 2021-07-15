import React from 'react'
import './SelectForm.scss'
import {Button} from 'semantic-ui-react'


export default function SelectForm( props) {

    const {setSelectForm}=props
    

    return (
        <div className="select-form" >
            <h2>Millones de peliculas, en PlayAf</h2>
            <Button className="register" onClick={() => setSelectForm("register")} >
                Registrate Gratis
            </Button>
            <Button className="auth" onClick={() => setSelectForm("auth")} >
                Iniciar Sesion
            </Button>
        </div>
    )
}
