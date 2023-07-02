import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../pages/SearchBar'
import { FaShoppingCart } from 'react-icons/fa'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to='/' className='logo links'>booksmart<span className='book_text'>Books shop</span></Link>

                <SearchBar />

                <Link to='/login' className='nav_login links'>login</Link>

                <Link to='cart'>
                    <ul className='shop'>
                        <li>
                            <span className='shopping'>
                                <FaShoppingCart />
                            </span>
                            <span className='cartCount'>0</span>
                        </li>
                    </ul>


                </Link>

            </div>


        </div >
    )
}

export default Navbar
