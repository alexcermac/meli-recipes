import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const categories = ['appetizers', 'breakfast', 'lunch', 'dinner', 'dessert', 'drinks']

export default function Navbar() {
    return (
        <div className='navbar container'>
            <a href="/" className='navbar__logo'>
                <img src="/logo.png" alt="" />
            </a>
            <div className='navbar__navigation-container'>
                <nav className='navbar__navigation' >
                    <Link
                        to="/"
                        className='navbar__link'
                    >HOME</Link>
                    <div className='navbar__recipes'>
                        <Link
                            to="/recipes/all"
                            className='navbar__link'
                        >RECIPES</Link>
                        <div
                            className='navbar__dropdown'
                        >
                            {categories.map(category => {
                                return (
                                    <Link
                                        to={`/recipes/${category}`}
                                        className='navbar__link'
                                    >
                                        {category.toUpperCase()}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <Link
                        to="/about"
                        className='navbar__link'
                    >ABOUT</Link>
                    <Link
                        to="/contact"
                        className='navbar__link'
                    >CONTACT</Link>
                </nav>
            </div>
            <div className="navbar__right-side">
                <div className='navbar__social-media'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-facebook"></i>
                </div>
                <div className='navbar__search'>
                    <input type="text" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
}
