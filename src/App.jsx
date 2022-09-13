import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import ProductDetail from './components/routes/ProductDetail'
import Header from './components/shared/Header'
import Cart from './components/shared/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
