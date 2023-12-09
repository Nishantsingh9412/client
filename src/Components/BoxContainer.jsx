import React, { useState } from 'react'




const BoxContainer = ({ serviceName, value, setMethod }) => {

    


  return (
    <div>
      {/* <div className='col'>
        <div className='d-flex justify-content-center align-items-center' style={{ height: '8vw', width: '9vw', background: '#80C1EF', borderRadius: '2vw', textAlign: 'center', boxShadow: '10px 10px 10px #98b1b1' }}>
          <div> {serviceName}  : {value}</div>
        </div>

        <div className='mt-4 ml-3'>
          <button className='btn btn-info mr-2 ml-2 ' onClick={() => setMethod(value - 1)}> - </button>
          <button className='btn btn-info ml-3' onClick={() => setMethod(value + 1)}> + </button>
        </div>
      </div> */}
      <div className='col'>
        <div>
          <div>
            <div className='container mt-4 ml-3'>
              <button className='btn btn-info mr-2 ml-2 ' onClick={() => {
                  if(value <= 0){
                    setMethod(0)
                  }else{
                    setMethod(value - 1)
                  }
              }} > - </button>
              <label htmlFor="services" style={{width:'140px',paddingLeft:'20px'}}> {serviceName}  : {value} </label>
              <button className='btn btn-info ml-3' onClick={() => setMethod(value + 1)} > + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxContainer
