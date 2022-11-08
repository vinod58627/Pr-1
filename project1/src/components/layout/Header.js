import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header(props) {  
    

  return (<div className="m-2">
   <ul className="p-3">
    <li className="nav"><NavLink className="navlink" to="home" >Home</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="about">About</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="one">One</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="two">Two</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="three">Three</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="four">Four</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="five">Five</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="six">Six</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="seven">Seven</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="eight">Eight</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="nine">Nine</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="ten">Ten</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="reg">Regis</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="page">Page</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="ex1">Ex1</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="ex2">Ex2</NavLink></li>
    <li className="nav"><NavLink className="navlink" to="jsx">Jsx</NavLink></li>
   
          {/* <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
        </div>*/}
    </ul>
    
    </div>)
}
