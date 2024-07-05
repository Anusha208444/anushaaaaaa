import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>this is my website</h1>
        <Link to='/allproducts'>click to view products</Link>
    </div>
  )
}

export default Home