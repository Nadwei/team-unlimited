import React from "react";
import { Link } from "react-router-dom"



export default function Navbar(){




    return(
            <nav id="navbar">
                
                <h1 id="site-title">
                    <Link to="/">Team Unlimited</Link>
                </h1>
                
                    
                { (
                <div id="navlinks" className="">
                    <Link to="/">Home</Link>
                    <Link to="/Briefing">Briefing</Link>
                    <Link to="/Counter_Dynamical">Counter Dynamical</Link>
                    <Link to="/Exotic_Tech">Exotic Tech</Link>
                    </div>
                )}
                <div id="menu-icon">
                  <div className="menu top-bar"></div>
                  <div className="menu mid-bar"></div>
                  <div className="menu bottom-bar"></div>
                </div>
            
            </nav>
    )
}