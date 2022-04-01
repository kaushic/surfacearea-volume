import React from 'react';
import { Container } from 'react-bootstrap';
import './Evidence.css';
import numberCrunching from '../assets/numberCrunch.gif';
import memes from '../assets/memes.png';
import meme2 from '../assets/meme2.png';
import graph1 from '../assets/graph1.png';
import caseStudy from '../assets/nuggetCaseStudy.png';
import caseStudy2 from '../assets/geometry.png';
function Evidence() {
    return (
        <Container>
            <div>
                <br></br>
                <h2>so i ran some numbers</h2>
                <img className='center' src={numberCrunching} />
                <h4>*i did like 2 calculations based on data I found on the internet, but the point still stands</h4>
                <p>If we evaluate the SA:V of Mini M&Ms and their counterparts we find that the:</p>
                <ul>
                    <li>Total volume of regular M&M: 0.320 cm<sup>3</sup></li>
                    <li>Total volume of mini M&M: 0.106 cm<sup>3</sup></li>
                    <li>Total surface area of regular M&M: 2.49 cm<sup>2</sup></li>
                    <li>Total surface area of mini M&M: 1.18 cm<sup>2</sup></li>
                </ul>
                <p>now my sig figs <i>could</i> be wrong here but overall the comparisons show that: </p>
                <ul style={{ listStyleType: 'none' }}>
                    <li style={{ fontSize: 'x-large' }}> <mark>SA:V of regular M&M = 7.781 cm</mark></li>
                    <br></br>
                    <li style={{ fontSize: 'x-large' }}><mark>SA:V of mini M&M = 11.132 cm</mark></li>
                </ul>
                <p style={{ fontSize: '15px' }}>(Source: <a href="http://sustainable-nano.com/2019/02/14/valentines-day-nanotechnology/" target="_blank" >http://sustainable-nano.com/2019/02/14/valentines-day-nanotechnology/</a>).</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>some twitter polls & graphs</h2>
                <img className='center' src={graph1} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>a couple of case studies & some more number crunching...</h2>
                <img className='center' src={caseStudy} />
                <h4>*not their actual scientific names</h4>
                <p>
                    SA: V of the regular chicken nugget: absolutely irrevelant</p>
                <p>
                    We can clearly see that the Stegosaurus Gallus Massa is the best tasting <strong>not</strong> because it’s my <em>favorite dinosaur</em> but because of its higher SA:V
                    ratio which can be attributed to the "ridge plates” across its spine
                </p>
                <img className='centerGif' src={caseStudy2} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>some more <strike>memes</strike> graphs</h2>
                <img className="center" src={memes} />
                <br></br>
                <img className="center" src={meme2} />
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