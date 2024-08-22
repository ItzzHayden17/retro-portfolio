import React from 'react'
import "./css/nav.css"
import { useState } from 'react';
import {useParams}from "react-router-dom"


const Nav = (props) => {
const [activePage,setActivePage] =useState(useParams().page)
  function handleClick(e){
    setActivePage(e.target.id)
  }

  props.onClick(activePage)
  
  return (
    <div className='Nav'>
      <i class="bi bi-arrow-return-left"></i>
      <div className='section'>
        <h1 onClick={handleClick} id="about" >About</h1>
        <h1 onClick={handleClick} id="portfolio">Portfolio</h1>
        <h1 onClick={handleClick} id="contact">Contact</h1>
      </div>
      <h1>My Posts</h1>
    </div>
  )
}

export default Nav
