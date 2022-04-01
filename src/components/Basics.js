import React from 'react'
import { Container } from 'react-bootstrap';
import './Basics.css'

function Basics() {
    return (
        <Container>
            <div>
                <br></br>
                <h2>before we dive deeper let's cover some basics...</h2>
                <ul className='padding'>
                    <li> What is surface area?
                        <br></br> <spacer></spacer>
                        A quick google search confirmed my original thoughts and that it's the area of the outermost layer.
                    </li>
                    <li> What is food? <br></br> <spacer></spacer>
                        Stuff you eat (ideally nutritious).
                    </li>
                    <li> Are you sure your calculations are correct? <br></br>
                        <spacer></spacer> Maybe, maybe not.
                    </li>
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </Container >
    )
}

export default Basics;