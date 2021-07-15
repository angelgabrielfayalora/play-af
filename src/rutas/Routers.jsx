import React from 'react'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Banner from '../Components/Banner/Banner'
import SliderBasic from '../Components/SliderBasic/SliderBasic'
import Home from '../pages/Home/Home'
import Perfil from '../pages/Perfil/Perfil'


export default function Routers(props) {

    const {user} = props

    return (
        
            <Switch>
                <Route path="/profile" exact  >
                    <Perfil user={user} />
                </Route>
                <Route path="/" exact >
                    <Banner/>
                    <SliderBasic/>
                </Route>
            </Switch>
    )
}
