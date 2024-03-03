import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgg from "../assets/img/IMG_92vnxx.jpg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
 



  

  return (
    <section className="banner" id="home">
      <Container>
       <div>
       <p>
                    Hi, My name is <strong className="white-text">Agnes</strong>. My friends call me <strong className="white-text">Aggie. </strong>
                    I am both a <h3><strong className="white-text">Software Engineer</strong></h3> and a <h3><strong className="white-text">Technical writer :))</strong></h3>.
                    I'm a Tech enthusiast skilled in JavaScript (ReactJs) and Python (Django, FastAPI, Flask).
                    Currrently Exploring machine learning with Python. Check out my projects and blogs!
                    Excited to change the world, one line of code at a time.
                  </p>

                  <button onClick={() => console.log('connect')} style={{ color: 'white' }}>
  <a href="#connect" style={{ color: 'white', textDecoration: 'none' }}>Let’s Connect <ArrowRightCircle size={25} /></a>
</button>
       </div>
      </Container>
    </section>
  )
}