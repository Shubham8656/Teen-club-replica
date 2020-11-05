import React from 'react';
import  './Navigation.css'
export default function Navigation(){
    return(
        <div className='nav'>
            <div className='nav-container'>
                <div className='nav-bar'>
                    <div id='nav-head'>Home</div>
                    <div id='nav-content'>Welcome Page</div>
                </div>
                <div className='nav-bar'>
                    <div id='nav-head'>About us</div>
                    <div id='nav-content'>Who we are</div>
                </div>
                <div className='nav-bar'>
                    <div id='nav-head'>Activities</div>
                    <div id='nav-content'>What we do</div>
                </div>
                <div className='nav-bar'>
                    <div id='nav-head'>Gallery</div>
                    <div id='nav-content'>Photos & videos</div>
                </div>
                <div className='nav-bar'>
                    <div id='nav-head'>News</div>
                    <div id='nav-content'>News & events</div>
                </div>
                <div className='nav-bar'>
                    <div id='nav-head'>Contacts</div>
                    <div id='nav-content'>How to find us</div>
                </div>
            </div>
        </div>
    );
}