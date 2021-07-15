import React from 'react'
import './Banner.scss'
import bannerImage from '../../img/banner.jpg'
import db, { auth, storage } from '../../utils/firebase'
import {map} from 'lodash'
import ReactPlayer from 'react-player'
import playPrueba from '../../videos/play.mp4'




export default function Banner() {

    

    const [banners, setBanners] = React.useState(null)
    const [bannerVideo, setBannerVideo] = React.useState(null)
    
    console.log(bannerImage)

    React.useEffect(() =>{
        db.collection("banners").get().then((listBanners) =>{
            const arrayBanner= []
            map(listBanners?.docs, allBanner =>{
                const data= allBanner.data()
                data.id= allBanner.id
                arrayBanner.push(data)                
            } )
            setBanners(arrayBanner[0])
        })
    },[])

    React.useEffect(() =>{
        if(banners){

            storage.ref(`banners/${banners?.banner}`).getDownloadURL().then((response) =>{
                setBannerVideo(response)
            })
        }

    },[banners])

    return (
        <div className="player-wrapper" >
                <ReactPlayer 
                    //className="react-player"
                    height= "100%"
                    width="100%"
                    playing="true" 
                    //url={bannerImage}
                 />
  
        </div>
        
    )
}
