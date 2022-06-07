import React from 'react';
import Navbar from "./Navbar";
import { BlurOnTwoTone, Brightness1 } from '@material-ui/icons';


const name= document.getElementById("name");
const email= document.getElementById("email");
const password= document.getElementById("password");


//const button1 = document.getElementById("button1");

const data = [];
const data1 =[];
//var data_arr= [];
var isLoggedIn= false;

console.log(name);

// button1.addEventListener("submit", (e)=>{

//     //e.preventDefault();
//      data.push({
//         name: "mansi",
//         email: "sikarwar",
//         password: "123",

//      });

     //localStorage.setItem("data", JSON.stringify(data));
//});

// function filter(data_arr){
//         // name= value.name;
//         // email=value.email;
//         // password=value.password;


//         if(email===data1.email1 && password===data1.password1)
//         isLoggedIn= true;

// //console.log(isLoggedIn);
// console.log(isLoggedIn);
// }

const handleSignUp=(e)=>{
    e.preventDefault();
    data.push({
           name: name.value,
           email: email.value,
           password: password.value,
        
        });

     //  console.log(data);

       // data.splice(0, 1);
        localStorage.setItem("data", JSON.stringify(data));
       // console.log(data);

  //  console.log(typeof(JSON.parse(localStorage.getItem("data"))));
}

const handleLogin=(e)=>{
    e.preventDefault();
    const email1= document.getElementById("email1");
    const password1= document.getElementById("password1");

   console.log(email1)
   console.log(password1)


//const [LogEmail, LogPassword]= data1;

//var data_arr= localStorage.getItem("data");

//console.log(data_arr);

{JSON.parse(localStorage.getItem("data")).map((value)=>{
    // name= value.name;
    // email=value.email;
    // password=value.password;

    

    if(data1.email1===value.email && data1.password1===value.password)
    isLoggedIn= true;

//console.log(isLoggedIn);
console.log(isLoggedIn);
})}

}

function Login_demo(){

 return (
     <>
        <Navbar/>
        <form > 
            <div class="main text-center col-lg-6 col-md-6 col-12 justify-content-center align-items-center mx-auto">

 {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}

                <div class="signup">
                     <form> 
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input class="ip_form_cls" type="text" id="name"  placeholder="User name" required=""/>
                        <input class="ip_form_cls" type="email" id="email"  placeholder="Email" required="" />
                        <input class="ip_form_cls" type="password" id="password"  placeholder="Password" required="" />
                        <button id="button1" type='submit' class="new-btn btn_form_cls" onClick={handleSignUp} >Sign up</button>
                    </form> 
                </div>

                <div class="login login_cls">
                     <form> 
                        <label for="chk" aria-hidden="true">Login</label>
                        <input class="ip_form_cls" type="email" id="email1" name="email"  placeholder="Email" required=""/>
                        <input class="ip_form_cls" type="password" id="password1" name="pswd"  placeholder="Password" required="" />
                        <button id="button2" class="new-btn btn_form_cls" onClick={handleLogin} >Login</button>
                     </form> 
                </div>
            </div>
             </form> 
        </>

    );

}

export default Login_demo;