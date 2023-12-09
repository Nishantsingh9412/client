import React from 'react'

const Dirt = (props) => {
  return (
    <div className='ml-4'> 
        <select name="" id="" className='form-control col-md-6 mt-3' onChange={(e) => props.setMethod(parseFloat(e.target.value))}> 
            <option value="0"> Select Dirt Level </option>
            {
                props.dirtValues.map((dirt, index) => (
                    <option key={index} value={dirt.price}> {  dirt.dirt} </option>
                ))
            }
         </select>
    </div>
  )
}

export default Dirt
