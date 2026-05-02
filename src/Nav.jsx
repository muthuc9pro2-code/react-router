import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
  return (
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search Posts</label>
            <input type="text"
            id='seacrh'
            placeholder='Search Posts'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </form>
        <ul>
            <li Link to="/">Home</li>
            <li LInk to="/post">Post</li>
            <li Link to="/about">About</li>
        </ul>
    </nav>
  )
}

export default Nav