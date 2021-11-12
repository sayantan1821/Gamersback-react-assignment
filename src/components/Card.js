import React from 'react'
import './Card.css'

function Card() {
    return (
        <div>
            <div className='card'>
                <div className="card-txt">
                <h1><strong>Get <span>insights</span> that help your business grow.</strong></h1>

                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                experience, and overall efficiency.</p>
                <div className="footer">
                    <div className='companies'> <h1>10K+</h1> <p>COMPANIES</p> </div>
                    <div class='templates'> <h1>314</h1> <p>TEMPLATES</p> </div>
                    <div className='queries'> <h1>12M+</h1> <p>QUARIES</p> </div> 
                </div>
                </div>
                <div className="card-img">
                
                </div>
            </div>


            <div className="attribution">
                <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.</span> 
                <span>Coded by <a href="#!">Your Name Here</a>.</span>
            </div>
        </div>
    )
}
//update card.js

export default Card
