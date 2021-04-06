import React from 'react'
import './CSS/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import logo from './images/logo.png'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () =>{
        dispatch(logout())
        auth.signOut();    
    }


    return (
        <div className='header'>
     
            <div className = "header__left">
                <img 
                src={logo}
                alt=""
                ></img>
                <div className = "header__search">
                    <SearchIcon color="Primary" />
                    <input type="text" placeholder="Search"></input>
                    

                </div>
            </div>
            
           
            <div className = "header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={ForumIcon} title="Messages"/>
                <HeaderOptions avatar ={true}
                 title="ME"
                 onClick={logoutOfApp} />
            </div>
        </div>
    );
}

export default Header
