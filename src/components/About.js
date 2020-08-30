import React from 'react';
import {NavLink} from 'react-router-dom';
import img2 from '../images/img2.JPG';
import Common from './Common';
import aws from '../images/aws.svg';
import css from '../images/css.svg';
import html from '../images/html5.svg';
import java from '../images/java.svg';
import javascript from '../images/javascript.svg';
import mongodb from '../images/mongodb.svg';
import mysql from '../images/mysql.svg';
import node from '../images/nodejs.svg';
import react from '../images/react.svg';
import express from '../images/express.svg';
import gcp from '../images/google-cloud-platform.svg';
import c from '../images/c.svg';






const About = () => {
  return (
    <>
      <Common name="About" imgsrc={img2} visit="/contact" btname="Contact Now" />

          
      <h1 className="text-center container">Skills</h1>
      
      <div className="row">
        <div className="column">
          <img src={html} alt="HTML5" width="100" height="120" />
        </div>
        <div className="column">
          <img src={css} alt="CSS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={javascript} alt="JS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={react} alt="React" width="100" height="120" />
        </div>
        <div className="column">
          <img src={java} alt="java" width="100" height="120" />
        </div>
        <div className="column">
          <img src={node} alt="NodeJS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={aws} alt="AWS" width="100" height="120" />
        </div>
        <div className="column">
          <img src={mongodb} alt="MongoDB" width="100" height="120" />
        </div>
        <div className="column">
          <img src={mysql} alt="MySQl" width="100" height="120" />
        </div>
        <div className="column">
          <img src={c} alt="C" width="100" height="120" />
        </div>
        
        <div className="column">
          <img src={express} alt="ExpressJS" width="100" height="120" />
        </div><div className="column">
          <img src={gcp} alt="Coogle Cloud Platform" width="100" height="120" />
        </div>
      </div>
      {/* </marquee> */}


    </>

  );
};


export default About;
