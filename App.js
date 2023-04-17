import './App.css';
import React from 'react'
import LoginPanel from './Componets/Loginpanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashborad from './Componets/Dashborad'
import TotalTables from './Componets/TotalTables'
import Food from './Componets/Food'
import Analyse from './Componets/Analyse'
import CashPayment from './Componets/CashPayment'

export default function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <Routes>
        <Route path='/' element={<LoginPanel/>}></Route>
        <Route path='/Dashborad' element={<Dashborad/>}></Route>
        <Route path='/TotalTables' element={<TotalTables/>}></Route>
        <Route path='/Food' element={<Food/>}></Route>
        <Route path='/Analyse' element={<Analyse/>}></Route>
        <Route path='/CashPayment' element={<CashPayment/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
