import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {


    return (
        <>
            <div className='searchBar'>
                <input type="text" placeholder='search products' className='search_input' />
                <button className='search_button' ><FaSearch /></button>
            </div>
        </>
    )
}

export default SearchBar
