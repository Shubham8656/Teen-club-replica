import React from 'react';
import  './Gallery2.css';
import camera2 from '../image/camera2.jpg';

export default function Gallery2(){
    return(
        <div className='container'>
            <p>Latest from the blog</p>
            <div className='grid-container1'>
                <img id='image' src={camera2} alt=''></img>
                <img id='image' src={camera2} alt=''></img>    
                <img id='image' src={camera2} alt=''></img>
                <img id='image' src={camera2} alt=''></img>
           </div>
           <button id='read'>Read more</button>
        </div>
    );
}