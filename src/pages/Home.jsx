import "./css/home.css"
import React from 'react'
import Availability from "../components/Availability"
import { useState,useEffect } from "react"
import Footer from "../components/Footer"
const Home = () => {
const [menu,setMenu]= useState(false)
const [contactActive,setContactActive]= useState(true)
const [aboutActive,setAboutActive]= useState(false)
const [projectActive,setProjectActive]= useState(false)
const [cursorPosition,setCursorPosition] = useState({top:440,left:0})

useEffect(()=>{
  window.addEventListener("keydown",handleKeydown)
})
function handleKeydown(e){
  // Activate the menu
  if (e.key === " ") {
    setMenu(true)
  };
  // Control the choices
  if (e.key === "ArrowUp") {
    if (contactActive) {
      setProjectActive(true)
      setContactActive(false)
      setAboutActive(false)
    }
    if (projectActive) {
      setAboutActive(true)
      setProjectActive(false)
      setContactActive(false)
    }
    if (aboutActive) {
      setContactActive(true)
      setAboutActive(false)
      setProjectActive(false)
    }
  } else if (e.key === "ArrowDown") {
    if (contactActive) {
      setAboutActive(true)
      setContactActive(false)
    }
    if (aboutActive) {
      setProjectActive(true)
      setAboutActive(false)
    }
    if (projectActive) {
      setContactActive(true)
      setProjectActive(false)
    }
  }
  // Enter the link of choice
  if (e.key === "Enter") {
    if (contactActive) {
      window.location.href = "/contact"

    }
    if (aboutActive) {
      window.location.href = "/about"
    }
    if (projectActive) {
      window.location.href = "/portfolio"
    }
  }
}

  
function handleMouse(e){
    
    if (e.screenY > 330) {
      setCursorPosition({ top: (e.screenY-120), left: (e.screenX-50) }) 
    }else{
      setCursorPosition({ top: 330, left: (e.screenX-50) }) 
    }
    
}

function handleImage(e){

    
}
  return (
    <div className='Home' tabIndex={0} onKeyDown={handleKeydown} onMouseMove={handleMouse}>
      <div>
        <Availability/>
        <div className="main" >
          <div className="header">
          <h1>I am</h1>
          <h1>Anray Hayden</h1>
          </div>
          {menu?
            <div className="menu">
              <h1>Where do you want to go?</h1>
              <ul></ul>
              {contactActive? <p><img src="/pointer.gif" width="20px"/>go to contact me</p> : <p>go to contact me</p>}
              {aboutActive? <p><img src="/pointer.gif" width="20px"/>go to more about me</p> :<p>go to more about me</p>}
              {projectActive? <p><img src="/pointer.gif" width="20px"/>go to my projects</p> : <p>go to my projects</p>}
            </div>           
              :
            <div className="subtext">
            <h3>press <span onClick={()=>{setMenu(true)}}>space</span> for menu</h3>
            </div>}
            <Footer/>
        </div>
        
        <div className="anray" style={{ ...cursorPosition }} ref={handleImage}>
        <img src="/anray.gif" alt="" width="70px" />
      </div>
      
      </div>
      
    </div>
  )
}

export default Home
