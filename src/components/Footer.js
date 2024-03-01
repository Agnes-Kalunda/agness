// Footer.js
import React from 'react';
import { FaGithub, FaTwitter, FaMedium, FaLinkedin } from 'react-icons/fa';
import '../App.css'; 

export const Footer = () => {
  return (
    <footer className="footer-container">
    <div className="social-icons">
      <a href="https://github.com/Agnes-Kalunda" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://twitter.com/A_ggie_" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://medium.com/@AgnesMbiti" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
      <a href="https://www.linkedin.com/in/agnes-mbiti-a23760236/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
    <p className="made-by">Made by Agnes, 2024</p>
  </footer>
  );
};


