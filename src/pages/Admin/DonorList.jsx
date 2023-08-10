import React, { useEffect, useState } from 'react'
import Layout from "../../components/shared/Layout/Layout"
import API from '../../services/API';
import moment from 'moment';

const DonorList = () => {

  const [data1, setData1] = useState([]);

  const getDonorsList = async () => {
    try {
      const { data } = await API.get("/admin/getDonorList");
      if (data?.success) {
        setData1(data?.donorData);
        console.log(data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDonorsList();
  }, []);

  //Delete function

  const handleDelete = async(id)=>{
    try{
    let answer = window.prompt("Are You Sure Want To Delete This Donor","Sure") 

    if(!answer) return;

    const {data} = await API.delete(`/admin/deleteDonor/${id}`);
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
      <h1>Donor List</h1>
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
              <td>{record.name || record.organisationName + " (ORG)"}</td>
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

export default DonorList
