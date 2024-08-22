import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import About from "./About"
import Contact from "./Contact"
import {Projects} from "./Projects"

const Info = () => {

const [activePage,setActivePage] = useState()

  function handleClick(e){
    console.log(e)
    setActivePage(e)
  }

  
  return (
    <div>
      <Nav onClick={handleClick}/>
      <div className='Info'>
        {activePage == "about" ? <p>about</p>:
        activePage == "portfolio" ? <p>portfolio</p> :
        activePage == "contact" ? <p>contact</p>:<div></div>}
      </div>
      <Footer />
    </div>
  )
}

export default Info
