import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {

    const {user} = useSelector((state)=>state.auth);
  return (
    <Layout>
        <div className="container">
            <div className="d-flex flex-column mt-4">
                <h1 className='typewriter-text' style={{color:"blue", fontWeight:"bold"}}>Welcome Admin <i className='text-success'>{user?.name}</i> </h1>
                <h3 style={{color:"red"}}>Manage Blood Bank App</h3>
                <hr />
                <p  style={{color:"blue", fontWeight:"bold",fontSize:"20px"}}
                >Blood donation and transfusion service is an indispensable part of contemporary medicine and health care. Blood management has been recognized as a challenging task because of life threatening nature of blood products entails the punctilious administration due to its perishable nature & required timely processing and it also saves the life.

Such great challenge has been considerably alleviated with the development of information and computer technology. e-Blood Bank is an integrated blood bank automation system. This web based mechanism inter connects all the Blood Banks of the State into a single network. Integrated Blood Bank MIS refers the acquisition, validation, storage and circulation of various live data and information electronically regarding blood donation and transfusion service. Such system is able to assemble heterogeneous data into legible reports to support decision making from effective donor screening to optimal blood dissemination in the field. Those electronic processes will help the public for easy access to the blood availability status of blood banks on finger tips; so that he can place a requisition of a particular blood group in nearby blood bank (Especially rare groups) save a valuable life.</p>
            </div>
        </div>
    </Layout>
  )
}

export default AdminHome
