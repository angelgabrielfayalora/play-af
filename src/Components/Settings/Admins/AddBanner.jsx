import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Button, Form, Input, Image } from 'semantic-ui-react'
import noImage from '../../../img/noimage.png'
import {v4 as uuidv4} from 'uuid'
import './AddBanner.scss'
import { toast } from 'react-toastify'
import db, { storage } from '../../../utils/firebase'



export default function AddBanner(props) {

    const {user, setContentModal, setShowModal, setTitleModal}=props
    

    const agregarBanner = () =>{
        setShowModal(true)
        setTitleModal("Agregar Banner")
        setContentModal(<DisplayModalbanner user={user} setShowModal={setShowModal} />)
    }

    
    return (
        <div className="profile-admin-banner" >
            <h1>CONFIGURACION DE ADMINISTRADORES</h1>
            <h2>Banner</h2>
            <Button onClick={agregarBanner} >Agregar Banner</Button>
        </div>
    )
}

function DisplayModalbanner (props){

    const {user, setShowModal, setTitleModal, setContentModal}=props
    const [file, setFile] = React.useState(null)
    const [banner, setBanner] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [formBanner, setFormBanner] = React.useState({
        name: "",
        descripcion: "",
        album: ""

    })


    const onDrop = React.useCallback((acceptedFile) => {
        const file= acceptedFile[0]
        setFile(file)
        setBanner(URL.createObjectURL(file))
        
    },[])

    const {getInputProps, getRootProps}= useDropzone({
        accept: "image/jpeg, image/png, .mp4",
        noKeyboard: true,
        onDrop
    })

    const uploadBanner = (fileName) =>{
        const ref = storage.ref().child(`banners/${fileName}`)
        return ref.put(file)
    }

    const onSubmit = () => {
        if(!formBanner.name || !formBanner.descripcion || !formBanner.album || !file){
            toast.error("No pueden estar vacios los campos asignados !")
        }else{
            setIsLoading(true)
            const fileName= uuidv4()
            uploadBanner(fileName).then(() =>{
                db.collection("banners").add({
                    name: formBanner.name,
                    album: formBanner.album,
                    descripcion: formBanner.descripcion,
                    banner: fileName
                }).then(() =>{
                    toast.success("se subio con exito el banner")
                    

                }).catch((err) =>{
                    console.log(err)

                })
            }).catch((err) =>{
                console.log(err)

            }).finally(() =>{
                setIsLoading(false)
                setShowModal(false)
                
            })
            
        }
    }



    return(
        <Form className="add-banner-form"  onSubmit={onSubmit} >
            <Form.Field className="banner-form" >
                <div
                    {...getRootProps()}
                    className="banner"
                    style={{backgroundImage: `url('${banner}')`}}
                />
                
                <input {...getInputProps()} />
                {!banner && <Image src={noImage} />}
            </Form.Field>
            <Form.Field className="banner-avatar" >
                <div
                   className="avatar"
                   style={{backgroundImage: `url('${banner ? banner : noImage}')`}}
                   >
                </div>
            </Form.Field>
            <Form.Field>
                <input  
                    placeholder="Nombre del banner"
                    onChange={(e) => setFormBanner({...formBanner, name: e.target.value})}
                />
                <input  
                    placeholder="Nombre del album"
                    onChange={(e) => setFormBanner({...formBanner, album: e.target.value})}
                />
                <input  
                    placeholder="descripcion"
                    onChange={(e) => setFormBanner({...formBanner, descripcion: e.target.value})}
                />
                <Button type="submit" loading={isLoading}>Subir Banner</Button>
            </Form.Field>
        </Form>
    )
}
