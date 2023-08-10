import React, { useState } from "react";
import InputType from "../Form/InputType";
import API from "./../../../services/API";
import { useSelector } from "react-redux";

const Modal1 = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");

  const {user} = useSelector((state)=>state.auth)

  const handleModalSubmt = async()=>{
    try{
      if(!bloodGroup || !quantity){
        return alert("Please fill all fields")
      }
      const {data} = await API.post("/inventory/createInventory",{
        
        email,
        organisation:user?._id,
        inventoryType,
        bloodGroup,
        quantity
      })
      if(data?.success){
        alert("New record created")
        window.location.reload()
      }
    } catch(err){
      
      // console.log(err)
      alert(err.response.data.message)
      window.location.reload()
    }
  }

  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Records
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* kaam ki chij  */}
              <div className="d-flex mb-3">
                Blood Type: &nbsp;
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"in"}
                    defaultChecked
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option defaultValue={"Open this select menu"}>Open this select menu</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>

              <InputType 
                labelText={"Donor Email"}
                labelFor={"donorEmail"}
                inputType={"email"}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <InputType 
                labelText={"Quantity (mL)"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={handleModalSubmt}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
