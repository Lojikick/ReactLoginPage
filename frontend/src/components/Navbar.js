import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav>
            <Link to='/Login'>Login</Link>
            <Link to='/Sign'>Signin</Link>
        </nav>
    )
}