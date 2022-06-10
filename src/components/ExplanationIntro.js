import React from 'react'
import './ExplanationIntro.css'
import facts from '../assets/vitalGif.gif'
function ExplanationIntro() {
    return (
        <div className='centered'>
            <br></br>
            <h2>okay...so what's this got to do with food?</h2>
            <p> I'm so glad you asked!</p>
            <p> Surface Area is <strong>VITAL</strong> for the best living experience. Thus, the <i>greater</i> the surface area to the volume the <i>better</i> the experience. <br /></p>
            <img className='centerGif' src={facts} alt='' />
            <p style={{ fontSize: '15px' }}>(Source: Science, specifically my biology courses).</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default ExplanationIntro;