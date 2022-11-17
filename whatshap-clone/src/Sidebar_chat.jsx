import React,{useEffect,useState} from 'react'
import {Avatar} from "@material-ui/core";
import "./sidebar.css";
import db from './firebase';
import { Link } from 'react-router-dom';

const Sidebar_chat = ({id,name,addchat}) => {
   const[seed,setSeed]=useState([]);
    useEffect(()=>{
      setSeed(Math.floor(Math.random()*5000))
    },[])
    const addChat=()=>{
      const blog=prompt('add new chat');
      alert(blog);
      if(blog){
        db.collection('rooms').add({
          name:blog
        })
      }
    }
    return (
      
      !addchat?(
         <Link to={'/rooms/'+id} className="color1">  
           <div className="sidebar_chat">
           
            <Avatar src={'https://avatars.dicebear.com/api/adventurer/${seed}.svg'}/> 
            <div className="data_chat">
            <h2>{name}</h2>
            <p>Last Manage...</p>
            </div>
         </div>
         </Link>
        ):(
           <div className="sidebar_chat" onClick={addChat}>
            <h2>Add chat</h2>
            </div> 
        )
       )
        
}

export default Sidebar_chat
