import React from 'react'
import Home from '../components/Hero/Home'
import AddEmp from '../components/addEmp/AddEmp'
import UpdateEmp from '../components/updateEmp/UpdateEmp'
import AboutUs from '../components/aboutUs/AboutUs'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import { Routes, Route } from 'react-router-dom'
import Help from '../components/help/Help'
import Feedback from '../components/feedback/feedback'
export default function RoutePath() {
  return (
    <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/addEmp' element = {<AddEmp />} />
        <Route path = '/updateEmp' element = {<UpdateEmp/>} />
        <Route path = '/about-us' element = {<AboutUs/>} />
        <Route path = '/register' element = {<Register/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/help' element = {<Help/>} />
        <Route path = '/feedback' element = {<Feedback/>} />
    </Routes>
  )
}
