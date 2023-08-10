import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment';
import { useSelector } from 'react-redux';
import API from '../../services/API';

const Consumer = () => {

    const [data, setData] = useState([]);
    const {user} = useSelector((state)=>state.auth)

  const getDonors = async () => {
    try {
      const { data } = await API.post("/inventory/getInventoryHospital",{
        filters:{
            inventoryType : "out",
            hospital: user?._id
        }
      });
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);
  return (
    <Layout>
      {/* <h1>Consumer Page</h1> */}
      <div className="container mt-5">
      <table className="table table-container">
        <thead>
          <tr>
            <th scope="col">Blood Group</th>
            <th scope="col">Inventory Type</th>
            <th scope="col">Quantity</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.bloodGroup}</td>
              <td>{record.inventoryType}</td>
              <td>{record.quantity}</td>
              <td>{record.email}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Layout>
  )
}

export default Consumer
