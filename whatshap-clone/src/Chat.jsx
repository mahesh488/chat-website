import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import MoreVert from "@material-ui/icons/MoreVert";
import AttachmentIcon from '@material-ui/icons/Attachment';
import "./sidebar.css";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { useParams } from 'react-router';
import db from './firebase';
import firebase from 'firebase';
import { useStatevalue } from './StateProvider';
const Chat = () => {
  const[input,setInput]=useState('');
  const[fetch,setFetch]=useState('');
  const { roomId } = useParams();
  const[messages,setMessage]=useState([]);
  const[{user},dispatch]=useStatevalue();
  console.log(roomId);
  useEffect(()=>{
   if(roomId){
     db.collection('rooms').doc(roomId).onSnapshot(snapshot=>{
       setFetch(snapshot.data().name)
     })
     db.collection('rooms').doc(roomId).collection('message').orderBy('timestamp','asc').onSnapshot(snapshot=>{
       setMessage(snapshot.docs.map(doc=>doc.data()))
     })
    }
  },[roomId])
  const sendMessage=(e)=>{
    e.preventDefault();
    if(input==''){
      alert('enter the message');
    }
    db.collection('rooms').doc(roomId).collection('message').add({
      name:user.displayName,
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })  
    setInput('');
  }
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://avatars.dicebear.com/api/human/1234.svg" />
      </div>
      <div className="chat_info">
        <h2>{fetch}</h2>
        <p>Last sem....</p>
      </div>
      <div className="chat_header_right">
        <IconButton>
          <SearchIcon />

        </IconButton>
        <IconButton>
          <MoreVert />

        </IconButton>
        <IconButton>
          <AttachmentIcon />

        </IconButton>


      </div>
      <div className="chat_body">
         {
          messages.map(message=>(
            <p className="chat_message chat_receiver">
            <p>{message.name}</p>
            <span> {message.message}</span>
            <span className="chat_time">{}</span>
  
          </p>
          )) 
      
}
    
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <AttachmentIcon />

        <form method="" onSubmit={sendMessage}>
          <input type="text" value={input} placeholder="enter the chat name" className="data" onChange={(e)=>setInput(e.target.value)} />

        </form>

      </div>
    </div>
  )
}

export default Chat
