import React from 'react';
import  './Connect.css'
export default function Connect(){
    return(
        <div className='connect'>
            <p>Connect with us</p>
            <div className='connect-container'>
                <div className='item'>
                    <div id='symbol' className="fa fa-facebook-f" style={{fontSize:"150%"}}></div>
                    <h5>Like us on</h5>
                    <div>FACEBOOK</div>
                </div>
                <div className='item'>
                    <div id='symbol' className="fa fa-twitter" style={{fontSize:"150%"}}></div>
                    <h5>Like us on</h5>
                    <div>TWITTER</div>
                </div>
                <div className='item'>
                    <div id='symbol' className="fa fa-pinterest" style={{fontSize:"150%"}}></div>
                    <h5>Like us on</h5>
                    <div>PINTEREST</div>
                </div>
                <div className='item'>
                    <div id='symbol' className="fa fa-instagram" style={{fontSize:"150%"}}></div>
                    <h5>Like us on</h5>
                    <div>INSTAGRAM</div>
                </div>
            </div>
        </div>
    );
}