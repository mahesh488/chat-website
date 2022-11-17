import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';
import {useStatevalue} from './StateProvider';
const Login = () => {
    const[{},dispatch]=useStatevalue()
    const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>{
        dispatch({
            type:"SET_USER",
            user:result.user
        })
    }).catch(error=>alert(error))   
}
    return (
        <div className="login_wrapper">
            <div className="login">
             <img src="https://www.citypng.com/public/uploads/small/41601412057vxlybersiynrfk16koqmh0lhmvkzaf63nhr0q49ltrlayhugbaraffkmruk2bep3rrqqtnxbxejghrlpymwb10o2ohh5pmooydqr.png"/>
             <h1>Sign In With Whatshap</h1>
             <button style={{color:'#fff'}} onClick={signIn}>Login In With Gmail</button>
            </div>
        </div>
    )
}

export default Login
