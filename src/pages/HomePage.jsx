import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'
import Layout from '../components/shared/Layout/Layout'
import Modal1 from '../components/shared/Modal/Modal1'
import API from '../services/API'
import moment from "moment"
import { useNavigate } from 'react-router-dom'




const HomePage = () => {
  const {loading,error,user} = useSelector((state)=>state.auth)
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const getBloodRecords = async()=>{
    try{
      const {data} = await API.get("/inventory/getInventory")

      if(data?.success){
        setData(data?.inventory)
        console.log(data?.inventory)
      }
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getBloodRecords();
  },[])

  return (
    <Layout>
      {user?.role === "admin" && navigate("/admin")}
    {error && <span>{alert(error)}</span>}
    {
      loading ? (
        <Spinner/>
      ) : (
        <>
          <div className="container">
          <h4
            className='ms-4'
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{cursor:"pointer"}}
          >
            <i className='fa-solid fa-plus text-success py-4'></i>
            &nbsp;
            Add Inventory
          </h4>
          <table className="table table-container">
  <thead>
    <tr>
      <th scope="col">Blood Group</th>
      <th scope="col">Inventory Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Donor Email</th>
      <th scope="col">Time & Date</th>
    </tr>
  </thead>
  <tbody>

    {
      data?.map((record)=>(
        <tr key={record._id}>
          <td>{record.bloodGroup}</td>
          <td>{record.inventoryType}</td>
          <td>{record.quantity} (ML)</td>
          <td>{record.email}</td>
          <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
        </tr>
      ))
    }
  </tbody>
</table>
<Modal1/>
          </div>
          
        </>
      )
    }
    
    </Layout>
  )
}

export default HomePage
