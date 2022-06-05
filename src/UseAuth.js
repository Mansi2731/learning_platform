 import React from 'react'
 import { useState } from 'react'
 
 export default function UseAuth(initVal) {
   const[isAuth, setIsAuth]= useState(initVal);

function login1(){
    setTimeout(()=>{
        setIsAuth(true);
    },1000)
}

function logout1(){
    setTimeout(()=>{
        setIsAuth(false);
    },1000)
}

   return [isAuth, login1, logout1];
 }


 
 