import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-light shadow pb-3">
    <div className="container">
      <br />
      <h1 className="text-primary">About</h1>
      <br />
      <h5>What?</h5>
      <p>
        Fitness Logger is an app for tracking exercises. Over time, diet
        tracking and social profiles will be added. Keep all of your workout
        data instead of losing it when you uninstall the app.
      </p>
      <br />
      <h5>How it Works?</h5>
      <p>
        For instructions on how to use the app, see{" "}
        <Link to="/help" className="text-primary">
          Help
        </Link>
        . This app is built by using MERN Stack and also various libraries used like JWT for session and password protection bycrpypt. This app is still work in progess 
      </p>
      <br />
      <h5>Made By</h5>
      <p>
        My name is{" "}
        <a
          href="https://themr.me"
          className="text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mahesh Ranpise
        </a>
        , a software developer currently seeking opportunity to use my skills
        in a professional capacity.
      </p>
    </div>
  </div>
  )
}

export default About