import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./CSS/Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser)
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://image.freepik.com/free-vector/vibrant-diagonal-lines-pattern-background_1017-12311.jpg" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoURL} >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
                

            </div>
            <div className="sidebar__stats">
                <hr />
                <h6>Posts Count: 12</h6>
                <h6>Likes Received: 2000</h6>
            </div>
        </div>
    )
}

export default Sidebar
