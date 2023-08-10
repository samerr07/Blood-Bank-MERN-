import React, { useState } from "react";
import InputType from "./InputType";
import {Link} from "react-router-dom"
import { handleLogin, handleRegister } from "../../../services/authServices";

const Form = ({ submitBtn, formTitle, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form onSubmit={(e)=>{
        if(formType === "login"){
          return handleLogin(e,email,password,role)
        } else if (formType === "register"){
          return handleRegister(
            e,
            name,
            email,
            role,
            password,
            phone,
            website,
            address,
            organisationName,
            hospitalName
          )
        }
      }}>
        <h1 className="text-center" style={{color:"white",fontFamily:"Poppins"}}>{formTitle}</h1>
        <hr />

        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadio"
              value={"donor"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="donorRadio"
            style={{color:"#461959"}}
            >
              Donor
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
              
            />
            <label className="form-check-label" htmlFor="adminRadio"
            style={{color:"#461959"}}
            >
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="hospitalRadio"
            style={{color:"#461959"}}
            >
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="organisationRadio"
            style={{color:"#461959"}}>
              Organisation
            </label>
          </div>
        </div>

        {/* Switch statement  */}

        {(() => {
          // eslint-disable-next-line
          switch (true) { 
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"forPassword"}
                    labelText={"Password"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }

            case formType === "register": {
              return (
                <>
                  {(role === "donor" || role === "admin") && (
                    <InputType
                      labelFor={"forName"}
                      labelText={"Name"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"forPassword"}
                    labelText={"Password"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {role === "organisation" && (
                    <InputType
                      labelFor={"forOrganisationName"}
                      labelText={"Organisation Name"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelFor={"forHospitalName"}
                      labelText={"Hospital Name"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelFor={"forWebsiteName"}
                    labelText={"Website"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelFor={"forAddressName"}
                    labelText={"Address"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelFor={"forPhone"}
                    labelText={"Phone No:"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
            {
                formType === "login" ? (
                    <p>
                        Not registered yet ? Register
                        <Link to="/register"> Here !</Link>
                    </p>
                ) : (
                    <p>
                        Already have an account? 
                        <Link to="/login"> Login</Link>

                    </p>
                )
            }
          <button type="submit" className="btn btn-primary">
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;




