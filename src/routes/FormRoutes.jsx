import React from 'react'
import {Routes,Route} from "react-router-dom"
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
function FormRoutes() {
  return (
    <div>
 <Routes>
    <Route path='/first' element={<First/>}></Route>
    <Route path='/second' element={<Second/>}></Route>
    <Route path='/third' element={<Third/>}></Route>  
 </Routes>

    </div>
  )
}

export default FormRoutes