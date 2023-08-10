import React, { useEffect, useState } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([])
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  //Get Blood group Data

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroupData");
      if (data?.success) {
        setData(data?.bloodGroupData);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  const getBloodRecords = async()=>{
    try{
      const {data} = await API.get("/inventory/getRecentInventory")

      if(data?.success){
        setRecentData(data?.inventory)
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
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap analytics" >
        {data?.map((record, i) => (
          <div className="card m-3 p-1" style={{width: "18rem", backgroundColor:`${colors[i]}`}} key={i}>
          
          <div className="card-body">
            <h1 className="card-title bg-light text-dark text-center mb-3">{record.bloodGroup}</h1>
            <p className="card-text">
              Total In : <b>{record.totalIn}</b>(mL)
            </p>
            <p className="card-text">
              Total Out : <b>{record.totalOut}</b>(mL)
            </p> 
          </div>
          <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availableBlood}</b> (ML)
              {/* console.log(record.availabeBlood) */}
            </div>
        </div>
        ))}
      </div>
      <div className="container my-3 tableAna" style={{backgroundColor:"#F7A4A4"}}>
      <h1 className="my-3">Recent Blood Transactions</h1>
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
      recentData?.map((record)=>(
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
      </div>
    </>
  );
};

export default Analytics;
