import React from 'react';
import  './Gallery1.css';
import table from '../image/table.jpg';
import camera from '../image/camera.jpg';
import camera1 from '../image/camera1.jpg';
import camera2 from '../image/camera2.jpg';


export default function Gallery1(){
    return(
        <div className='grid-container'>
            <img id='item1' src={table} alt=''></img>
            <img id='item2' src={camera} alt=''></img>    
            <img id='item3' src={camera1} alt=''></img>
            <img id='item4' src={camera2} alt=''></img>
        </div>
    );
}