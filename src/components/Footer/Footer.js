import React, { useState } from 'react';
import  './Footer.css';

export default function Footer(){

    const[emailerror,seterror]=useState('')
   
    function subscribeHandler(){
        let email=document.getElementById('email').value;
        // console.log(email)
        if(email.includes('@gmail.com'))
        {
            seterror('')
            alert('Subsribed Successfully')
        }
        else{
            seterror('Enter valid email address');
            alert('Enter valid email address')

        }
    }


    return(
        <div>
        <div className='footer'>
            <div className='newsletter-cont'>
                <div className='newsletter'>
                    <h3>Newsletter</h3>
                    <p>Laoreet facilisi, parturient parturient dignissim proin.</p>
                    
                </div>
                <div className='input'>
                    <input id='email' type='email' placeholder='Email'/>
                                        
                    <button id='subscribe' onClick={subscribeHandler}>SUBSCRIBE</button>
                </div>
                <div id='error'>{emailerror}</div>
            </div>
        </div>
        <p id='privacy'>TEEN;S CLUB @ 2015 | PRIVACY POLICY</p>
        </div>
    );
}