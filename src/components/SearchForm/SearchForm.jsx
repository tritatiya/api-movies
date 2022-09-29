import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/searchSlice';
import './SearchForm.css'

const SearchForm = () => {

    const dispatch = useDispatch();

    const [searchInput,setSearchInput] = useState('')
    const handleChange = (e) => setSearchInput(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearch(searchInput))
    }


  return (
    <div className="search-container">
        <div className="search-form">
                <div className="container">
                    <div className="search-form-content">
                        <form onSubmit={handleSubmit} className="search-form" >
                            <div className="search-form-elem flex flex-sb bg-white">
                                <input type="text" className="form-control"
                                    placeholder='The Lost World ...'
                                    value={searchInput}
                                    onChange={handleChange}
                                />
                                <button type='submit' className="flex flex-c" >
                                    <FaSearch className='text-purple' size={32} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchForm