import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'

export default function Navbar() {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div>
        <nav>
          <ul>
            <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
            <li><NavLink activeClassName="active" to="/posts">Posts</NavLink></li>
            <li><NavLink activeClassName="active" to="/albums">Albums</NavLink></li>
            <li><NavLink activeClassName="active" to="/formik">Formik</NavLink></li>
            <li><NavLink activeClassName="active" to="/signUp">SignUp</NavLink></li>
            <li><NavLink activeClassName="active" to="/weather-app">Weather App</NavLink></li>
            <li>
              <button onClick={()=> setTheme(theme === 'dark' ? ' light' : 'dark')} >Tema Switcher</button>
            </li>
          </ul>
        </nav>
    </div>
  )
}
