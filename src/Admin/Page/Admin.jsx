import React from 'react'
import AddProduct from "../AddProduct"
import ListProduct from '../ListProduct'
import Admin_Sidebar from '../Sidebar'
import Admin_Navbar from '../Navbar'

const Admin = () => {
  return (
    <>
    <Admin_Navbar/>
    <Admin_Sidebar/>
    <AddProduct />
    <ListProduct />
    
</>
  )
}

export default Admin

