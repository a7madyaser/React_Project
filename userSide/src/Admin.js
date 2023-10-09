import { useState } from 'react'
import './Admin.css';
import React, { useRef } from 'react';
import Header from './Headeer'
import Sidebar from './Sidebar'
import Home from './Home'
import Products from './comp/Product/get';
import Categories from './comp/Category/get'
import Users from './comp/Users/get';
import DeleteUser from './comp/Users/delete'
import EditUser from './comp/Users/edit'
import Add from './comp/Users/add'
import EditProduct from './comp/Product/edit'
import DeleteProduct from './comp/Product/delete'
import AddProduct from './comp/Product/add'
import Admins from './comp/admin/get';
import AdminEdit from './comp/admin/edit';
import AdminAdd from './comp/admin/add';
import AdminDelete from './comp/admin/delete';
import EditCategorie from './comp/Category/edit'
import DeleteCategorie from './comp/Category/delete'
import AddCategorie from './comp/Category/add'
import Orders from './comp/orders/get'


import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <BrowserRouter>
        <Routes>
          <Route path='/dashbord' element= {<Home/>} />
          <Route path='/categories' element= {<Categories/>} />
          <Route  path='/products' element= {<Products/>} />
          <Route path='/users' element= {<Users/>} />
          <Route path='/delete/:id' element= {<DeleteUser/>} />
          <Route path='/edit/:id' element= {<EditUser/>} />
          <Route path='/add' element= {<Add/>} />
          <Route path='/edit/product/:id' element= {<EditProduct/>} />
          <Route path='/delete/product/:id' element= {<DeleteProduct/>} />
          <Route path='/addProdcut' element= {<AddProduct/>} />
          <Route path='/admins' element= {<Admins/>} />
          <Route path='/edit/admin/:id' element= {<AdminEdit/>} />
          <Route path='/add/admin' element= {<AdminAdd/>} />
          <Route path='/delete/admin/:id' element= {<AdminDelete/>} />
          <Route path='/edit/category/:id' element= {<EditCategorie/>} />
          <Route path='/delete/category/:id' element= {<DeleteCategorie/>} />
          <Route path='/add/category' element= {<AddCategorie/>} />
          <Route path='/admin/orders' element= {<Orders/>} />


        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
