import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
        <div className="header">
          <Header/>
        </div>
        <div className='row g-0' style={{backgroundColor:"#F7A4A4"}}>
          <div className='col-md-3'><Sidebar/></div>
          <div className="col-md-9" style={{backgroundColor:"#F7A4A4"}}>{children}</div>
        </div>
        
    </>
  )
}

export default Layout
