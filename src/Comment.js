import './CSS/Comment.css'
import React from 'react'
import { Avatar } from '@material-ui/core'

function Comment({name, comment, photoUrl}) {
    return (
        <div className='comment'>
            <Avatar className='avatar' src={photoUrl}/>
            <b className='name'>{name}</b> 
            <p>{comment}</p>
        </div>
    )
}

export default Comment
