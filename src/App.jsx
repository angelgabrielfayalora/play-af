import React from 'react'
import Login from './login/Login';
import {ToastContainer} from 'react-toastify'
import { auth } from './utils/firebase';
import Home from './pages/Home/Home';
import {BrowserRouter as Router} from 'react-router-dom'





 function App() {

  const [user, setUser] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  auth.onAuthStateChanged((currentUser) => {
    if(!currentUser){
      auth.signOut()
      setUser(null)
      
    }else{
      setUser(currentUser)
    }
    setIsLoading(false)
  })
  if(isLoading)
  return null


  return (
    < >


    {
      !user ?( <Login />) : (<Home user={user} />)
    
    }
    <ToastContainer  
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover={false}
    
    />
    </>
  );
}



export default App