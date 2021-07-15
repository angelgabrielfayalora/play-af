import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import {Grid, Header, Icon, Menu} from 'semantic-ui-react'
import logoImageRed from '../../img/logo-form-red.png'
import {BrowserRouter as Router} from 'react-router-dom'
import Banner from '../Banner/Banner'
import { auth } from '../../utils/firebase'

export default function Headers() {

   // const [show,setShow] = React.useState(false)


   const signOut = () =>{

    auth.signOut()

   }


    return (
        

        <Menu   >
            <Link to="/" >
            
            
            <Menu.Item
            
            
            //active={activeItem === 'editorials'}
            //onClick={this.handleItemClick}
            >
                
                <img src={logoImageRed} alt="" />
                <div>
                    PlayAf
                </div>
            </Menu.Item>
            </Link>
            <Menu  floated="right" size="massive" >
                <Menu.Item  className="icon-profile" >
                    <Link to="/profile" >
                        <Icon
                            name="user"
                            position="right"
                        />
                    </Link>
                    
                    
                    <Icon  
                        name="power off"
                        onClick={signOut}
                    />
                </Menu.Item>

            </Menu>         
            
      </Menu>

        
    )
}
