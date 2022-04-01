import React from 'react'
import { Container } from 'react-bootstrap';
import './Conclusion.css'


function Evidence() {
    return (
        <Container>
            <div>
                <br></br>
                <h2>some food for thought</h2>
                <h3 className='showdown'> these foods have <strong> high SA:V </strong>🤤 ✅ 😋</h3>
                <ul>
                    <li>NY Style Pizza</li>
                    <li>Thin Bagels</li>
                    <li>Waffles</li>
                    <li>Sandwiches Cut Diagonally</li>
                    <li>Thin Oreos</li>
                    <li>Mini Hotdogs</li>
                    <li>Mini Tacos</li>
                    <li>Mini Cupcakes</li>
                </ul>
                <h3 className='showdown'> these foods have <strong> low SA:V </strong> 😔 ❌ 🥴</h3>
                <ul>
                    <li>Deep Dish Pizza (the only item on this list i can't support)</li>
                    <li>Regular Bagels*</li>
                    <li>Pancakes*</li>
                    <li>Sandwiches*</li>
                    <li>Regular Oreos*</li>
                    <li>Regular Hotdogs*</li>
                    <li>Regular Tacos*</li>
                    <li>Regular Cupcakes*</li>
                </ul>
                <p style={{ fontSize: '16px' }}>*<i>still pretty good...just inferior to their mini counterparts</i></p>
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