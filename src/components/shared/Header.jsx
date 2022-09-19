import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

const [menu, setMenu] = useState(false)

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className='header'>
      {/* aqui va el logo*/ }
        <NavLink to='/'>
            <h1 className='header__logo'><i className="fa-brands fa-cc-stripe"></i></h1>
        </NavLink>
        
      {/* aqui va la el icono para el menu responsive*/ }
        <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/">
            <button onClick= {toogleMenu} className='header__button'>
              <i className="fa-solid fa-bars"></i>
            </button>            
        </NavLink>
     
     {/* aqui va el na var con los inconos para el menu normal*/ }
        <nav className={`header__nav ${ menu ? 'isActive': '' }`}>
            <ul className="header__list">
            <li className="header__item">
                  <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/">
                    <h2><i className="fa-solid fa-house"></i></h2>
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/purchases">
                    <h2><i className="fa-solid fa-basket-shopping"></i></h2>
                  </NavLink>
                </li>

                <li className="header__item">
                  <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/login">
                    <h2><i className="fa-solid fa-user"></i></h2>
                  </NavLink>
                </li>            

                <li className="header__item">
                <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/cart">
                    <h2><i className="fa-solid fa-cart-arrow-down"></i></h2>
                </NavLink>
                </li>               

            </ul>
        </nav>
    </header>
  )
}
export default Header