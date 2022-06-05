import React from 'react';
import Navbar from "./Navbar";
import Body from "./Body";

function About() {
  return (
    <div>

    <Navbar />

    <div class="gcse-search"></div> 

    {/* <h1> about</h1> */}
    <Body/>
    <div className='abt-cls my-3 text-center '>
     <h3 class="text-center ">ABOUT PAGE</h3>
<p  class='text-center col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center mx-auto'> Did you know you can pull in images from Unsplash through their source API? This is one sweet and quick way to put images when building your pages. It certainly helps our team when building our web projects. There are so many high quality images available in almost any subject that are available FREE of use and without attribution.</p>

    </div>
        </div>
  )
}

export default About