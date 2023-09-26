import React from 'react'

import './sidebar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {LuMenuSquare} from 'react-icons/lu'
function Sidebar() {
    return (
        <>
            <ul className="nav flex flex-column sidebar">
                <li className="nav-item">
                    <a className="nav-link" href="#"><FaBars className='icon'/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><AiOutlineHome className='icon'/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><LuMenuSquare className='icon'/></a>
                </li>
           
            </ul>

        </>
    )
}

export default Sidebar
