import React, { useState } from 'react'
import './CSS/Login.css'
import logo from './images/logo.png'
import { Button, TextField } from '@material-ui/core'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'





function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profile, setProfile] = useState("")
    const dispatch = useDispatch();


    const register= () =>{
        if(!name){
            return alert("Enter Name")
        }    

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL:profile,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profile,
                }))
            })
        }).catch(error => alert(error.message))
    };



    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL:userAuth.user.photoURL,
            }))
        }).catch(error => alert(error.message))
    };
    


    return (
        
            <div className='login' >
            <img src={logo} alt="logo"/>
            <form action="">
            <TextField value={name}
             onChange={e=> setName(e.target.value)}
             className="formItem" id="standard-basic" label="Full Name" />

            <TextField value={profile}
             onChange={e=> setProfile(e.target.value)}
             className="formItem" id="standard-basic" label="Profile Picture URL" />

            <TextField value={email}
             onChange={e=> setEmail(e.target.value)}
              className="formItem" id="standard-basic"
               label="Email" type="email" />

            <TextField value={password}
             onChange={e=> setPassword(e.target.value)} 
             className="formItem" id="standard-password-input" 
             label="Password" type="password" />

            <Button className="formItem" variant="contained" color="primary" onClick={loginToApp}>Log In</Button>
                </form>
                <p>Not a member?
                <Button color="primary" onClick={register}>Register Now</Button>
                </p>

        </div>
        
    )
}

export default Login
