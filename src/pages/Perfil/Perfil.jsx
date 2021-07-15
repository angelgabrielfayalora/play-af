import React from 'react'
import './Perfil.scss'
import {Link} from 'react-router-dom'
import UserName from '../../Components/Settings/UserName'
import Avatar from '../../Components/Settings/Avatar'
import UserEmail from '../../Components/Settings/UserEmail'
import UserPassword from '../../Components/Settings/UserPassword'
import BasicModal from '../../Components/BasicModal/BasicModal'
import AddBanner from '../../Components/Settings/Admins/AddBanner'
import { isUserAdmin } from '../../utils/Api'





export default function Perfil(props) {


    const {user} =props

    const [showModal, setShowModal] = React.useState(false)
    const [titleModal, setTitleModal] = React.useState("")
    const [contentModal, setContentModal] = React.useState("")
    const [userAdmin, setUserAdmin] = React.useState(false)

    React.useEffect(() => {
        isUserAdmin(user.uid).then((response) =>{
            setUserAdmin(response)
        })

    },[user])



    return (
        
        
            <div className="confings" >
                <h1>Settings</h1>
                <div className="confings__list" >
                    <Avatar />
                    <UserName 
                        user={user}
                        setShowModal= {setShowModal}
                        setTitleModal= {setTitleModal}
                        setContentModal={setContentModal}
                    />
                </div>
                <div className="confings__list-block" >
                    <UserEmail  
                        user={user}
                        setShowModal={setShowModal}
                        setTitleModal={setTitleModal}
                        setContentModal={setContentModal}
                    />
                    <UserPassword 
                        user={user}
                        setShowModal={setShowModal}
                        setTitleModal={setTitleModal}
                        setContentModal={setContentModal}
                    />
                    {
                        <AddBanner
                            user={user}
                            setShowModal={setShowModal}
                            setTitleModal={setTitleModal}
                            setContentModal={setContentModal}
                        />
                    }
                    <BasicModal  show={showModal} setShow={setShowModal} title={titleModal} >
                        {contentModal}
                    </BasicModal>
                </div>
                
            </div>
        
    )
}
