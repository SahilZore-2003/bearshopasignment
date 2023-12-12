import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Navbar.scss"

const Navbar = ({search,setSearch}) => {
 
  return (
    <nav>
      <h1>Bear Shop</h1>
      <div className="searchbox">
         <input onChange={(e)=>setSearch(e.target.value)} type="text" value={search} placeholder='Search Bear' />
         <CiSearch />
      </div>
    </nav>
  )
}

export default Navbar
