import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment';
import API from '../../services/API';

const HospitalList = () => {

  const [data1, setData1] = useState([]);

  const getHospitalsList = async () => {
    try {
      const { data } = await API.get("/admin/getHospitalList");
      if (data?.success) {
        setData1(data?.hospitalData);
        console.log(data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHospitalsList();
  }, []);

  //Delete function

  const handleDelete = async(id)=>{
    try{
    let answer = window.prompt("Are You Sure Want To Delete This Donor","Sure") 

    if(!answer) return;

    const {data} = await API.delete(`/admin/deleteHospital/${id}`);
    console.log(data)
    alert(data?.message)
    //window.location.reload()
    setData1(data1.filter((e)=>e._id !== id))
    } catch(err){
      console.log(err)
    }
  }
  return (
    <Layout>
      <div className="container mt-4">
      <h1>Hospitals List</h1>
      <table className="table table-container">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data1?.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td >
              <button type="button" onClick={()=>handleDelete(record._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Layout>
  )
}

export default HospitalList
