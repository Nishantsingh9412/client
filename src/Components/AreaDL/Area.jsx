import React from 'react'

const Area = (props) => {
  return (
    <div className='ml-4'>
        <select name="" id="" className='form-control col-md-6' onChange={(e) => props.setMethod(parseFloat(e.target.value))}> 
            <option value="0"> Select Area </option>
            {props.areaValues.map((area, index) => (
            <option key={index} value={area.price}> {area.areaMain} </option>
            ))}
         </select>
    </div>
  )
}

export default Area
