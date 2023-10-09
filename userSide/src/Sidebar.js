import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> STYLE-X
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/products">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/users">
                    <BsPeopleFill className='icon'/> Users
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/admins">
                    <BsPeopleFill className='icon'/> Admins
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="/admin/orders">
                    <BsPeopleFill className='icon'/> Orders
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar