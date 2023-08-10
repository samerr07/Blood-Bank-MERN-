import React from 'react'

const InputType = ({name,inputType,value,onChange,labelFor,labelText}) => {
  return (
    <>
        <div className="mb-3">
              <label htmlFor={labelFor} className="form-label"
              style={{color:"red", fontWeight:"bold"}}
              >
                {labelText}
              </label>
              <input
                type={inputType}
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
              />
            </div>
    </>
  )
}

export default InputType
