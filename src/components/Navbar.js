import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"



export default function Navbar(){
const [menuOpen, setMenuOpen] = useState(false);
const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




    return(
            <nav id="navbar">
                
                <h1 id="site-title">
                    
                    <Link to="/">Infinite Horizons</Link>
                </h1>
                
                
                    
                {menuOpen && (
                <div id="navlinks" className={menuOpen  || isLargeScreen? "open" : "closed"}>
                    <Link to="/">Home</Link>
                    <Link to="/Tech_Alternative">Tech/Alternative</Link>
                    <Link to="/HolisticWellness">Holistic Wellness</Link>
                    <Link to="/PersonalEnlightenment">Personal Enlightenment</Link>
                    </div>
                )}
                <div id="menu-icon" onClick={() =>setMenuOpen(!menuOpen)}>
                <div className="menu top-bar"></div>
                <div className="menu mid-bar"></div>
                <div className="menu bottom-bar"></div>
            </div>
            
            </nav>
    )
}