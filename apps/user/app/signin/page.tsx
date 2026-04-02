"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Provider } from "../provider";

export default function signin(){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const handleOAuth = (provider : string)=>{
        document.cookie = "auth-intent=signin; path=/";
        signIn(provider , {callbackUrl : "/"});
    }





    return <>
        <button onClick={async ()=>{await signIn('apple')}}>Signin with apple</button>
        <button onClick={async ()=>{await signIn('google')}}>Signin with google</button>
        <input onChange={(e) => username= e.target.value} type="text" placeholder="username"/>
        <input onChange={(e) => password= e.target.value} type="password"/>
        <button onClick={async ()=> {await signIn('credentials' ,{
                username , 
                password ,
                redirect : true,
                callbackUrl: "/"
        })}}>SignIn with credentials</button>
    </>

}