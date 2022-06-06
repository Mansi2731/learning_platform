import React from 'react'
import {Route, Redirect} from "react-router-dom";
import Login from "./Login";
// import Protected from './Protected';

const Protected= ({auth, component: Component, ...rest}) =>{
    return(
        <Route {...rest} render={(props) =>{ 
           if(auth) return <Component {...props}/>;
           if(!auth) return <Login/>;
        }
        }/>
    );
};


export default Protected;
// Redirect to={{path:"/", state:{from: props.location}}}