import React from 'react'
import { BiDonateBlood, BiUserCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import {Link, useLocation, useNavigate} from "react-router-dom"
import img1 from "../../../assests/Blood3.png"

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const {user} = useSelector((state)=>state.auth)

    const handleLogout = ()=>{
        localStorage.clear();
        navigate("/login")
    }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
        {/* <h1>Blood <span className="navbar-brand ">Bank</span></h1> */}
        <img className='blood' src={img1} alt=""  width={"80px"} height={"80px"}/>
        {
          (location.pathname === "/") || (location.pathname === "/donor") || (location.pathname === "/hospital")
          // (location.pathname === "/organisation")
           ? (
            
              <Link to="/analytics" className='link' >
                Analytics
              </Link>
            
          ):(
           
              <Link to="/" className='link'>
                Home
              </Link>
            
          )
        }
      </div>
      
      <div className="blood-bank-container horizontal-reciprocal">
      <div className="blood-bank-logo">
        <i className="fas fa-tint"></i>
      </div>
      <div className="blood-bank-text">
        <h2 className="blood-bank-heading">Blood Bank</h2>
        <p className="blood-bank-description">Donate blood, save lives!</p>
      </div>
    </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
            
            <p className='user' style={{color:"#f39c12"}}><BiUserCircle size={"45px"}/>
            &nbsp;
              <span style={{fontSize:"22px"}}>Welcome
              &nbsp;
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="badge bg-secondary">{user?.role}</span>
              </span>
            </p>
        </li>
        
       
        
        <li className="nav-item mx-3">
              <button className="logout-button" onClick={handleLogout} >
                Logout
              </button>
              <BiDonateBlood className="navbar-icon" color='red'  />
        </li>
      </ul>
    </nav>
    
  )
}

export default Header
