import React from 'react'
import { Container } from 'react-bootstrap';
import './Questions.css'
import question from '../assets/questions.gif';

function Evidence() {
    return (
        <Container>
            <div>
                <br></br>
                <h2>questions?</h2>
                <img className='centerGif' src={question} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </Container >
    )
}

export default Evidence;