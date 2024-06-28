import React from 'react'
import Home from '../Views/home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router