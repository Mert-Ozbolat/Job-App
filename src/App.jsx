import React from 'react'
import Home from './pages/home'
import Create from './pages/create'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App