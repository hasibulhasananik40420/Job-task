import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='bgcolor'>
                <h3>New-in</h3>
                <h1>Sundae</h1>
                <h2>Lounges</h2>
                <button className='buttonmodal'>Shop Now</button>
            </div>

            <div className='images'>
                <img src="https://media.istockphoto.com/vectors/business-ladies-team-vector-id1185646511?k=20&m=1185646511&s=612x612&w=0&h=2geym12pZlUEdQqolvqy991GcOh83Zd4lFBNfq_O5u8=" alt="" />
            </div>
        </div>
    );
};

export default Banner;