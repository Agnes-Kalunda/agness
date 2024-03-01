import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import vite from "../assets/img/vite.svg";
import contact from "../assets/img/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      setStatus({ type: 'pending', message: 'Sending...' });


      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log(result.text);
      setStatus({ type: 'success', message: 'Message sent successfully' });
      setShowSuccessAlert(true);

    } catch (error) {
      console.log(error.text);
      setStatus({ type: 'error', message: 'Error sending message' });
    
    }
  };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Name" name="from_name" />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" name="from_name" />
                    </Col>
                   
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"  name="message"></textarea>
                      <button type="submit" disabled={status && status.type === 'pending'}>
                         <span>{status ? (status.type === 'pending' ? 'Sending...' : 'Send') : 'Send'}</span>
                      </button>
                    </Col>

                    {status && (
                     
                      <p></p>
                     
      )}
                      {showSuccessAlert && (
        <div className="success-alert">
          <p>Message successfully sent to Agnes!</p>
          {/* <button onClick={() => setShowSuccessAlert(false)}>Close</button> */}
        </div>
      )}

                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}