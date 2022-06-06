import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Courses from './Courses';

// 
// import { useState } from 'react';
// 

//

const isLogInVal= false;

function isLogIn(){
    isLogInVal= true;

    if(isLogInVal) return  <Courses/>;
    if(!isLogInVal) return <Login/>;
}



const Login = ()=> {

const [name, setName]= useState('');
const [email, setEmail]= useState('');
const [pswd, setPassword]= useState('');

const win= window.sessionStorage;

const handleSubmit =(e) =>{
    e.preventDefault();
    win.clear();
    setName('');
    setEmail('');
    setPassword('');

    isLogIn();


}


useEffect(()=>{

if(win.getItem('name'))
setName(win.getItem('name'));

if(win.getItem('email'))
setName(win.getItem('email'));

if(win.getItem('pswd'))
setName(win.getItem('pswd'));

}, [])

useEffect(()=>{
    win.setItem('name', name);
    win.setItem('email', email);
    win.setItem('pswd',pswd);
},[name, email,pswd])



 return (
     <div>
        <Navbar/>
        {/* <form > */}
            <div class="main text-center col-lg-6 col-md-6 col-12 justify-content-center align-items-center mx-auto">

 {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}

                <div class="signup">
                    {/* <form> */}
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input class="ip_form_cls" type="text" name="txt"  placeholder="User name" required="" onChange={(e)=>setName(e.target.value)}/>
                        <input class="ip_form_cls" type="email" name="email"  placeholder="Email" required="" onChange={(e)=>setName(e.target.value)}/>
                        <input class="ip_form_cls" type="password" name="pswd"  placeholder="Password" required="" onChange={(e)=>setName(e.target.value)}/>
                        <button type='submit' class="new-btn btn_form_cls" onClick={handleSubmit}>Sign up</button>
                    {/* </form> */}
                </div>

                <div class="login login_cls">
                    {/* <form> */}
                        <label for="chk" aria-hidden="true">Login</label>
                        <input class="ip_form_cls" type="email" name="email"  placeholder="Email" required="" onChange={(e)=>setName(e.target.value)}/>
                        <input class="ip_form_cls" type="password" name="pswd"  placeholder="Password" required="" onChange={(e)=>setName(e.target.value)}/>
                        <button class="new-btn btn_form_cls" onClick={handleSubmit} >Login</button>
                    {/* </form> */}
                </div>
            </div>
            {/* </form> */}
        </div>

    );

}

export default Login;