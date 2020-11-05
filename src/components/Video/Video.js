import React from 'react';
import  './Video.css';
import camera from '../image/camera1.jpg';
export default function Video(){
    return(
        <div className='video-container'>
           <div className='vcontainer'>
                <i className="fa fa-play-circle-o" id='play' style={{fontSize:'40px',color:'white'}}></i>
                <div className='card'>
                    <p>MAURIS ACCUMSAN</p>
                    <img id='video' src={camera} alt=''/>
                    <p>May 29,2015 by Robert Lourens</p>
                </div>
                <i className="fa fa-play-circle-o" id='play' style={{fontSize:'40px',color:'white'}}></i>
                <div className='card'>
                    <p>MAURIS ACCUMSAN</p>
                    <img id='video' src={camera} alt=''/>
                    <p>May 29,2015 by Robert Lourens</p>
                </div>
                <i className="fa fa-play-circle-o" id='play' style={{fontSize:'40px',color:'white'}}></i>
                <div className='card'>
                    <p>MAURIS ACCUMSAN</p>
                    <img id='video' src={camera} alt=''/>
                    <p>May 29,2015 by Robert Lourens</p>
                </div>
                <i className="fa fa-play-circle-o" id='play' style={{fontSize:'40px',color:'white'}}></i>
                <div className='card'>
                    <p>MAURIS ACCUMSAN</p>
                    <img id='video' src={camera} alt=''/>
                    <p>May 29,2015 by Robert Lourens</p>
                </div>
           </div>
        </div>
    );
}