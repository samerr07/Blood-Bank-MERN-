import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import "./sideBar.css"
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const {user} = useSelector((state)=>state.auth)

    const location = useLocation()
  return (
    <div>
      <div className="sidebar" style={{backgroundColor:"#EBB02D"}}>
        <div className="menu">
          {
            user?.role === "organisation" && (
              <>
              <div className={`menu-item ${location.pathname === "/" && "active"}`} >
            <i className="fa-solid fa-warehouse"></i>
            <Link to="/">Inventory</Link>
          </div>
          <div className={`menu-item ${location.pathname === "/donor" && "active"}`} >
            <i className="fa-solid fa-hand-holding-medical"></i>
            <Link to="/donor">Donor</Link>
          </div>
          <div className={`menu-item ${location.pathname === "/hospital" && "active"}`} >
            <i className="fa-solid fa-hospital"></i>
            <Link to="/hospital">Hospital</Link>
          </div>
              </>
            )
          }

          {
            (user?.role === "donor" || user?.role === "hospital") && (
              <div className={`menu-item ${location.pathname === "/organisation" && "active"}`} >
            <i className="fa-solid fa-hospital"></i>
            <Link to="/organisation">Organisation</Link>
          </div>
            ) 
          }
          {
            user?.role === "hospital" && (
              <div className={`menu-item ${location.pathname === "/consumer" && "active"}`} >
            <i className="fa-solid fa-hospital"></i>
            <Link to="/consumer">Consumer</Link>
          </div>
            )
          }
          {
            user?.role === "donor" && (
              <div className={`menu-item ${location.pathname === "/donation" && "active"}`} >
            <i className="fa-solid fa-hospital"></i>
            <Link to="/donation">Donation</Link>
          </div>
            )
          }

{
            user?.role === "admin" && (
              <>
              <div className={`menu-item ${location.pathname === "/donorList" && "active"}`} >
            <i className="fa-solid fa-warehouse"></i>
            <Link to="/donorList">Donor List</Link>
          </div>
          <div className={`menu-item ${location.pathname === "/hospitalList" && "active"}`} >
            <i className="fa-solid fa-hand-holding-medical"></i>
            <Link to="/hospitalList">Hospital List</Link>
          </div>
          <div className={`menu-item ${location.pathname === "/orgList" && "active"}`} >
            <i className="fa-solid fa-hospital"></i>
            <Link to="/orgList">Organisation List</Link>
          </div>
              </>
            )
          }
          
                     
        </div>
      </div>


    </div>
  )
}

export default Sidebar
