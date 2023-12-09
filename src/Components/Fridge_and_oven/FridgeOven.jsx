import React from 'react'

const FridgeOven = (props) => {
  return (
    <div>
      <div>
        <select  className='form-control'  onChange={(e) => props.setFridge(parseFloat(e.target.value))} >
            <option value="0"> Fridge Cleaning </option>
            <option value="0"> Outside </option>
            <option value="20"> Inside </option>
        </select>

        <select className='form-control'  onChange={(e) => props.setOven(parseFloat(e.target.value))} >
            <option value="0"> Oven Cleaning </option>
            <option value="0"> Outside </option>
            <option value="25"> Inside </option>
        </select>
      </div>
    </div>
  )
}

export default FridgeOven
