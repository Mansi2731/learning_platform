import React from 'react';
import Navbar from "./Navbar";
import useAuth from "./UseAuth";
// import Sidebar from "./Sidebar";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Card from "./Card";
import Body from "./Body";

import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Login from './Login';

import { colors } from '@material-ui/core';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Protected from "./Protected"
import { Router } from 'react-router-dom';



function App() {

  const[isAuth, login, logout]= useAuth(false);

  return (
    <div>
      {/* <Router> */}
        <Switch>

          <Route exact path="/about" component={About} />
          <Route path="/course" component={Courses} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          {/* <Protected path="/course" component={Courses} auth={isAuth}/> */}
          {/* <Redirect to="/" /> */}

        </Switch>
      {/* </Router> */}

      {/* <Navbar />
        <Body />
        <div className=' mydiv bg-dark d-flex justify-content-center align-items-center my-1' >
          <Card
            img={"../images/img4.jpg"}
            name={"Mansi"}
            detail={"Beautiful gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
            action={"Visit"}
          />


          <Card
            img={"../images/img2.jpg"}
            name={"Ansh"}
            detail={" gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
            action={"Explore"}
          />


          <Card
            img={"../images/img4.jpg"}
            name={"Mansi"}
            detail={" Beautiful gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
            action={"Click"}
          />

          <Card
            img={"../images/img1.jpg"}
            name={"Mansi"}
            detail={"Beautiful gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
            action={"Visit"}
          />

        </div> */}

    </div>
  )
}

export default App