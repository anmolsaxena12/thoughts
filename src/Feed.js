import React, { useEffect, useState } from 'react'
import './CSS/Feed.css'
import Post from './Post';

import CreateIcon from '@material-ui/icons/Create';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import { db } from './firebase';
import firebase from 'firebase'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Feed() {
    const user = useSelector(selectUser)

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        );
        
    }, []);

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description: user.email,
            message: input,
            photoUrl : user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange ={e => setInput(e.target.value)} placeholder='Start a post ...' type="text"/>
                        <button onClick={sendPost} type='submit'><SendIcon /></button><ImageIcon />
                    </form>
                </div>
                
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
                <Post
                  key={id}
                  name = {name}
                  description= {description}
                  message= {message}
                  photoUrl = {photoUrl}                
                />
            ))}

        </div>
    )
}

export default Feed
