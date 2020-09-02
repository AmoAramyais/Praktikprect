import React from 'react';
import '../asseds/singin.scss';

export default ()=>{
    return(
        <div>
     <NavLink to ={'/Sing In'}>Need an account?</NavLink>
       <h2>Sing In</h2>
        <input type= 'text'placeholder='Email'/> 
        <input type= 'password'placeholder='Password'/>
        
        </div>
    )
}