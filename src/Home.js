import React from 'react'
import './home.css'
import { Routes, Route, Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1 className='text-center text-white bg-dark py-2'>Welcome to BookStore</h1>
            <div className='links'>
                <Link to="/booklist">
                    <button className='btn btn-primary my-3'>Book List</button>
                </Link>
                <Link to="/addbook">
                    <button className='btn btn-primary my-3'>Add Book</button>
                </Link>
            </div>
        </div>
    )
}

export default Home