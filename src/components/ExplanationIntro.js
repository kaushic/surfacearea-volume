import React from 'react'
import { Container } from 'react-bootstrap';
import './ExplanationIntro.css'
import facts from '../assets/vitalGif.gif'
function ExplanationIntro() {
    return (
        <Container>
            <div>
                <br></br>
                <h2>okay...so what's this got to do with food?</h2>
                <p> I'm so glad you asked!</p>
                <p> Surface Area is <strong>VITAL</strong> for the best living experience. Thus, the <i>greater</i> the surface area to the volume the <i>better</i> the experience. <br /></p>
                <img className='centerGif' src={facts} />
                <p style={{ fontSize: '15px' }}>(Source: Science, specifically my biology courses).</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </Container >
    )
}

export default ExplanationIntro;