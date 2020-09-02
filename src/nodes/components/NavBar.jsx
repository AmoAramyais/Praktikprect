import React from 'react';
import {NavLink} from 'react-router-dom';
import '../asseds/navbar.scss'

const NavBar =()=>{

    return(
        <div className='nav'>
            <div>
                <h2>conduit</h2>
            </div>
            <nav>
                <ul>
                    <li><NavLink to ={"/"}>Home</NavLink></li>
                    <li><NavLink to ={"Sing In"}>Sign in</NavLink></li>
                    <li><NavLink to ={"/Sing Up"}>Sign up</NavLink></li>
                </ul>
            </nav>
            
        </div>   

      )
}
        

export default NavBar;


