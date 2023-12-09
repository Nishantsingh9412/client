import React, { useEffect, useState } from 'react'

import BoxContainer from '../../BoxContainer.jsx'
import { useDispatch, useSelector } from 'react-redux';

import { saveState } from '../../../Redux/action/saved.js';
import { UpdateCommercial } from '../../../Redux/action/Index.js';

const Commercial = () => {

  const dispatch = useDispatch();
  const [floor, setFloor] = useState(0);
  const [restRoom, setRestRoom] = useState(0);
  const [washRoom, setWashRoom] = useState(0);
  const [kitchen, setKitchen] = useState(0);
  const [commonRoom, setCommonRoom] = useState(0);
  const [officeRoom, setOfficeRoom] = useState(0);

  const handleChange = () => {
    try{
      dispatch(UpdateCommercial({floor,restRoom,washRoom,kitchen,commonRoom,officeRoom}))
      dispatch(saveState());
    }catch(error){
      console.log(error.message);
    }
  }

  const CommercialData = useSelector((state) => state.CommercialReducer.commercialData);
  console.log("This is from UseSelector CommercialData  Hook",CommercialData);

  useEffect(() => {
    setFloor(CommercialData.floor);
    setRestRoom(CommercialData.restRoom);
    setWashRoom(CommercialData.washRoom);
    setKitchen(CommercialData.kitchen);
    setCommonRoom(CommercialData.commonRoom);
    setOfficeRoom(CommercialData.officeRoom);
  },[CommercialData])


  return (
    <div>
      <div className='container'>
        <h2> Select <b>Commercial cleaning</b> Services  </h2>
          <div className='row mt-3'>
            <BoxContainer serviceName={"Floor"} value={floor} setMethod={setFloor}> </BoxContainer>
            <BoxContainer serviceName={"Rest Room"} value={restRoom} setMethod={setRestRoom}> </BoxContainer>
            <BoxContainer serviceName={"Wash Room"} value={washRoom} setMethod={setWashRoom}> </BoxContainer>
            <BoxContainer serviceName={"Kitchen"} value={kitchen} setMethod={setKitchen}> </BoxContainer>
            <BoxContainer serviceName={"Common Room"} value={commonRoom} setMethod={setCommonRoom}> </BoxContainer>
          </div>
          <div className='row mt-3'>
            <BoxContainer serviceName={"Office Room"} value={officeRoom} setMethod={setOfficeRoom}> </BoxContainer>
          </div>
        <button className='btn btn-success mt-4 ml-3 mb-4' onClick={handleChange}> Save </button>
      
      </div>
    </div>
  )
}

export default Commercial
