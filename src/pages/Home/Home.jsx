import React from 'react'
import Headers from '../../Components/Header/Headers'
import './Home.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import Routers from '../../rutas/Routers'
import {Grid, Segment} from 'semantic-ui-react'
import SliderBasic from '../../Components/SliderBasic/SliderBasic'



export default function Home(props) {

    const {user}=props

    return (
        
        <Router  >  
            <Grid className="layout-home"  >
                <Grid.Row >
                    <Grid.Column width={16} >
                        <Headers  /> 
                        <Routers  user={user} />
                        
                    </Grid.Column>
                    
                </Grid.Row>

            </Grid>

        </Router>
        
    )
}
