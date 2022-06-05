import React from 'react';
import Card from "./Card";
import Navbar from './Navbar';

function Courses() {
    return (
        <div id='course-body'>
            <Navbar />

            <div class="gcse-search"></div> 

            <div className=' mydiv  d-flex justify-content-center align-items-center my-1' >
           
                <a  href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' >
                <Card
                    img={"../images/img2.jpg"}
                    name={"Ansh"}
                    detail={" gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
                    action={"Explore"}
                />
</a>
<a  href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' >
                <Card
                    img={"../images/img4.jpg"}
                    name={"Mansi"}
                    detail={" Beautiful gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
                    action={"Click"}
                />
</a>
<a  href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' >
                <Card
                    img={"../images/img1.jpg"}
                    name={"Mansi"}
                    detail={"Beautiful gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
                    action={"Visit"}
                />
                </a>
                <a  href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' >
                <Card
                    img={"../images/img2.jpg"}
                    name={"Ansh"}
                    detail={" gifted by the worlds most generous community of photographers Better than any royalty free or stock photos AboutBlog Community"}
                    action={"Explore"}
                />
</a>
    
                

            </div>
        </div>
    )
}

export default Courses