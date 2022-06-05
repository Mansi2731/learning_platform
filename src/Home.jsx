import React from 'react';
import Navbar from "./Navbar";
import Body from "./Body";

function Home() {
  return (
    <div>

<Navbar />
<div class="gcse-search"></div> 
{/* <h1> home</h1> */}
<Body/>

<section class="bg-light">
<div class="my-3 text-center "> 
<h1 className='text-center  '>HOME PAGE</h1>
<hr class="w-25 mx-auto"/>
<p class='text-center col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center mx-auto'> Navbar navigation links build on our .nav options with their own modifier class and require the use of toggler classes for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned
Navbar navigation links build on our .nav options with their own modifier class and require the use of toggler classes for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned
Navbar navigation links build on our .nav options with their own modifier class and require the use of toggler classes for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.</p>
</div>
</section>

    </div>
  )
}

export default Home