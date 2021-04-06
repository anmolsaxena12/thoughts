import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import {Avatar, IconButton, TextField} from '@material-ui/core'
import './CSS/Post.css'

// import { db } from './firebase';
// import firebase from 'firebase'
// import React, { useEffect, useState } from 'react'
// import Comment from './Comment';
// import { selectUser } from './features/userSlice';
// import { useSelector } from 'react-redux';
// import SendIcon from '@material-ui/icons/Send';

// due to bugs the code for "COMMENTS SECION" has benn commented out.

function Post({name, description, message, photoUrl}) {

    // const user = useSelector(selectUser)

    // const [input, setInput] = useState('');

    // const [comments, setComments] = useState([]);
    // const daba = db.collection('posts');
    // useEffect(() => {
    //     db.doc('/posts/${req.params.postID}/comment')
    //     // .orderBy("timestamp", "desc")
    //     .onSnapshot((snapshot) => 
    //         setComments(
    //             snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //             }))
    //         )
    //     );
        
    // }, []);

    // const sendComment = e => {
    //     e.preventDefault();
    //     daba.doc('/comment').add({
    //         name:user.displayName,
    //         comment: input,
    //         photoUrl : user.photoURL || "",
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     }).then(() => {
    //         console.log("Document successfully written!");})
    //         .catch((error) => {
    //             console.error("Error writing document: ", error);
    //         });
        
        
    //     setInput("");
    // }


    return (
        
        <div className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <div className="post__button">
                    <ThumbUpIcon />
                    <p>Like</p>               
                </div>
                <div className="post__button">
                    <ModeCommentIcon />
                    <p>Comment</p>                    
                </div>

            </div>
           
            {/* <div className="comment__from">
            <form noValidate autoComplete="off">
                <input value={input} className = 'comment__input'  placeholder="Add a comment . ." />
                <IconButton onClick={sendComment} color="primary" aria-label="add a comment">
  <SendIcon />
</IconButton>
            </form>
            </div>
            {comments.map(({ id, data: { name, comment,  photoUrl}}) => (
                <Comment
                  key={id}
                  name = {name}
                  comment= {comment}
                  photoUrl = {photoUrl}                
                />
            ))} */}
            
        </div>
        
    )
}

export default Post
