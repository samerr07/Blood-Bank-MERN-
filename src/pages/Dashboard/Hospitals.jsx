import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment';
import API from '../../services/API';

const Hospitals = () => {

  const [data, setData] = useState([]);

  const getHospitals = async () => {
    try {
      const { data } = await API.get("/inventory/getHospitals");
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);
  return (
    <Layout>
      {/* <h1>Hospital Page</h1> */}
      <div className="container mt-5">
      <table className="table table-container">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Layout>
  )
}

export default Hospitals
