import React from 'react';
import  './Event.css';

export default function Event(){
    return(
        <div className='event-container'>

            <div id='event-image'></div>
            <div className='upcoming-event'>

                <div className='event-head'>
                    <h3>Upcoming Events</h3>
                    <p id='desc'>Tortor velit magnis facilisis euismod vehicula ante viverra sapien faucibus penatibus urna. Conubia nisl inceptos dapibus. Consectetur augue praesent curabitur convallis libero erat curae; mollis elementum at? Inceptos fermentum erat etiam porttitor egestas aliquet elementum ac velit habitasse vitae.</p>   
                </div>
                <div className='articles'>
                    <div id='info'>
                        <h4>AM CONGUE FERMENTUM </h4>
                        <p>Eget urna torquent vulputate iaculis blandit felis curabitur.</p>
                    </div>
                    <div id='info'>
                        <h4>AM CONGUE FERMENTUM </h4>
                        <p>Laoreet facilisi, parturient parturient dignissim proin.</p>
                    </div>
                    <div id='info'>
                        <h4>AM CONGUE FERMENTUM </h4>
                        <p>Condimentum lobortis porttitor porta aptent ridiculus curae. </p>
                    </div>
                    <div id='info'>
                        <h4>AM CONGUE FERMENTUM </h4>
                        <p>Lectus mus dignissim aliquam posuere elit nec ullamcorper.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}