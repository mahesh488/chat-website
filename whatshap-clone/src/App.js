
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useStatevalue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const [{user},dispatch]=useStatevalue();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      dispatch({
            type:"SET_USER",
            user:user
      })
    })
  },[])
  return (
    <BrowserRouter>
      {!user?(<Login/>):(
          <Switch>
          <div className="App">
            <div className="app_body">
              <Sidebar />
              <Route exact path="/">
                <Chat />
              </Route>
              <Route  path="/rooms/:roomId">
                <Chat />
              </Route>
            </div>
          </div>
        </Switch>
      
      )}
    </BrowserRouter>
  );
}

export default App;
