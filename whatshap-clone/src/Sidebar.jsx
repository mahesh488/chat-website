
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Morevert from "@material-ui/icons/MoreVert";
import Chat from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState,useEffect } from 'react';
import "./sidebar.css";
import Sidebar_chat from './Sidebar_chat';
import db from "./firebase";
import { useStatevalue } from './StateProvider';
import firebase from 'firebase';
import {auth} from './firebase';

const Sidebar = () => {
   const [blogs,setBlogs]=useState([])
   const[{user},dispatch]=useStatevalue();
  
  useEffect(() => {
   db.collection('rooms').onSnapshot(snapshot=>{
      setBlogs(snapshot.docs.map(doc=>({
         id:doc.id,
         data:doc.data()
      })))
   })    
}, [])

  return (
        <div className="sidebar">
         <div className="sidebar_header">
          <Avatar src={user.photoURL} onClick={(e)=>firebase.auth().signOut()}/>
         <div className="sidebar_right">
          <IconButton>
             <DonutLargeIcon/> 
          </IconButton>
          <IconButton>
             <Chat/> 
          </IconButton>
          <IconButton>
             <Morevert/> 
          </IconButton>
       
         </div>
          </div>
        <div className="sidebar_search">
         <SearchIcon/>
         <input type="text" placeholder="Serach a start a new chat"/>
        </div>
        <br/><br/>
        <div className="sidebar_chats">
        <Sidebar_chat addchat/>
         {
          blogs.map(blog=>{
             return <Sidebar_chat key={blog.id} id={blog.id} name={blog.data.name}/>
          })
         }
        </div>
        </div>
    )
}

export default Sidebar
