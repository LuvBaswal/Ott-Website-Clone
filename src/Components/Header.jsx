import React from "react"
import logo from "../logo.png"
import {BrowserRouter, Link } from "react-router-dom"
import {ImSearch} from "react-icons/im"


const Header =()=>{
    
        return(
            <>
               <nav className="header">
                <img src={logo} alt="logo"/>

                <div>
                <BrowserRouter>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/">Tv&nbsp; Shows</Link>&nbsp;
                <Link to="/">Movies</Link>&nbsp;
                <Link to="/">&nbsp; Added</Link>&nbsp;
                <Link to="/">My&nbsp; List</Link>
                </BrowserRouter>
               </div>

               <ImSearch/>
               </nav>

               
            </>
        )
    
}
export default Header