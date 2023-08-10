import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment';
import API from '../../services/API';
import { useSelector } from 'react-redux';

const Organisation = () => {
    
    const {user} = useSelector((state)=>state.auth)
    const [data, setData] = useState([]);

  const getOrgs = async () => {
    try {
      if(user?.role === "donor"){
        const { data } = await API.get("/inventory/getOrganisations");
      if (data?.success) {
        setData(data?.organisations);
      }
      }
      if(user?.role === "hospital"){
        const { data } = await API.get("/inventory/getOrganisationsForHospital");
      if (data?.success) {
        setData(data?.organisations);
      }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrgs();
  }, [user]);
  return (
    <Layout>
      <div className="container mt-5">
      {/* <h1>Org Page</h1> */}
      <table className="table  table-container">
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
              <td>{record.organisationName}</td>
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

export default Organisation
