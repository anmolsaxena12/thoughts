import React, { useEffect } from 'react';
import './CSS/App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from "./Sidebar"

import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice"
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }
      else{
        //logged out
        dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="App">
    <Header />
      
      {!user? (
        <Login />
      ):(
        
        <div className="app_body">
          
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* widgets */}
        </div>
      )}
      

    </div>
  );
}

export default App;
