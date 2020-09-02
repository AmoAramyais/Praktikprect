import React from 'react';
import {Switch,Route} from 'react-router-dom'


export default ()=>{
    return(
        <div><Switch>
            <Route exact path ={'/'}/>
            <Route  path ={'/Sign In'}/>
            <Route  path ={'/Sign Up'}/>
            <Route  path ={'/Post/:id'}/>
            </Switch>
        </div>
    )
}