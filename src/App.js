import React from 'react'
import {Sectionfirst,NavBar}from './nodes/components'
import { Route } from 'react-router-dom'





const App =()=>{
  return(
    <div>
      
      <div>
    <NavBar/>
    <Sectionfirst/>
    </div>

    <div>
      <Route/>
      </div>

    </div>
  )
}
export default App;