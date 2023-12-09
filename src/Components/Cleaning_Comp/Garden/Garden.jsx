import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UpdateGarden } from '../../../Redux/action/Index';
import { saveState } from '../../../Redux/action/saved';


const Garden = () => {

    const dispatch = useDispatch();
    const [noOfGarden, setNoOfGarden] = useState(0);
    const [noOfHours, setNoOfHours] = useState(0);

    const handleChange = () => {
      try{
        dispatch(UpdateGarden({noOfGarden,noOfHours}))
        dispatch(saveState())
        toast.success("Data Saved Successfully ", { position: toast.POSITION.TOP_CENTER });
      }catch(err){
        console.log("From from garden.jsx ",err.message);
      }
    }

    const gardenData = useSelector((state) => state.gardenReducer);
    console.log("This is from UseSelector Garden Hook ", gardenData)


    

    useEffect(() =>{
      setNoOfGarden(gardenData.gardenData.noOfGarden);  
      setNoOfHours(gardenData.gardenData.noOfHours);
    },[gardenData])


  return (
    <div>
      <h2> Select  <b>Garden cleaning </b> services </h2>
      <div className='mt-4 col-md-6 ml-2'>

        <div className='d-flex flex-column pt-2'>
          <label htmlFor="garden"  > Select No. of gardens  :</label>
          <input type="number" value={noOfGarden} className='col-md-4 form-control' onChange={(e) => setNoOfGarden(e.target.value)} />
        </div>

        <div className='d-flex flex-column pt-2'>
          <label htmlFor="hours"  > Select No. of Hours :</label>
          <input type="number" value={noOfHours} className='col-md-4 form-control' onChange={(e) => setNoOfHours(e.target.value)} />
        </div>
      </div>

      <button className='btn btn-success mt-4  ml-4 rounded-lg' onClick={handleChange}>  Save </button>
      <ToastContainer />
    </div>
  )
}

export default Garden
