import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UpdateHour } from '../../../Redux/action/Index';
import { saveState } from '../../../Redux/action/saved';



const Others = () => {
    const [selectedHours, setSelectedHours] = useState(null);
    const dispatch = useDispatch(); 

    const handleChange = () => {
      try{
        dispatch(UpdateHour(selectedHours))
        dispatch(saveState())
        toast.success("Data Saved Successfully ", { position: toast.POSITION.TOP_CENTER });

      }
      catch(err){
        console.log(err.message);
      }
    }

    const UpdateHourAllData = useSelector((state) => state.hoursReducer);
    console.log("This is from UseSelector UpdateHour  Hook",UpdateHourAllData); 
    const allStates= useSelector((state) => state);
    console.log("This is from UseSelector allStates  Hook",allStates);

    useEffect(() => {
      setSelectedHours(UpdateHourAllData.hoursData)
    },[UpdateHourAllData])
    
  return (
    <div>
      <div className='mt-4'>
        <h2> Number of Hours ? </h2>
        <select className='mt-4 form-control col-md-4' value={selectedHours} onChange={(e) => setSelectedHours(e.target.value) }  name="" id="">
          <option value="0" defaultChecked> Select No. of hours  </option>
          <option value="1"> 1 Hour </option>
          <option value="2"> 2 Hours </option>
          <option value="3"> 3 Hours </option>
          <option value="4"> 4 Hours </option>
          <option value="5"> 5 Hours </option>
          <option value="6"> 6 Hours </option>
          <option value="7"> 7 Hours </option>
          <option value="8"> 8 Hours </option>
          <option value="9"> 9 Hours </option>
          <option value="10"> 10 Hours </option>
          <option value="11"> 11 Hours </option>
          <option value="12"> 12 Hours </option>
        </select>

        <button className='btn btn-success ml-2 mt-4' onClick={handleChange} > Save </button>
      </div> 
      <ToastContainer />

    </div>
  )
}

export default Others
