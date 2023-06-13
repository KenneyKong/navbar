import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nav--container'>
            <h1 className='dev'>DevAccelerator</h1>
            <nav>
                <ul className="nav--list">
                    <li>
                    <Link to="/Main">Home</Link>
                    </li>
                    <li>
                    <Link to="/About">About</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}