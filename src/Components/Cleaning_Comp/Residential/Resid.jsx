import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BoxContainer from '../../BoxContainer.jsx'
import { saveState } from '../../../Redux/action/saved.js'
import { UpdateResidential } from '../../../Redux/action/Index.js'
import Area from '../../AreaDL/Area.jsx';
import Dirt from '../../AreaDL/Dirt.jsx';
import FridgeOven from '../../Fridge_and_oven/FridgeOven.jsx';
import { setTotalPrice } from '../../../Redux/action/price.js';

const Resid = () => {
  const dispatch = useDispatch();
  const [residPrice, setResidPrice] = useState(0);
  const [add, setAdd] = useState(0);
  const [hall, setHall] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [kitchen, setKitchen] = useState(0);
  const [toilet, setToilet] = useState(0);
  const [stairs, setStairs] = useState(0);
  // const [garden, setGarden] = useState(0);
  const [livingRoom, setLivingRoom] = useState(0);
  const [other, setOther] = useState(0);



  // Prices
  const [livingRoomPrice, setLivingRoomPrice] = useState(0.0);
  const [livingRoomDirtPrice, setLivingRoomDirtPrice] = useState(0.0);

  const [bedroomPrice, setBedroomPrice] = useState(0.0);
  const [bedroomDirtPrice, setBedroomDirtPrice] = useState(0.0);

  const [bathroomPrice, setBathroomPrice] = useState(0.0);
  const [bathroomDirtPrice, setBathroomDirtPrice] = useState(0.0);

  const [otherPrice, setOtherPrice] = useState(0.0);
  const [otherDirtPrice, setOtherDirtPrice] = useState(0.0);

  const [kitchenPrice, setKitchenPrice] = useState(0.0);
  const [kitchenDirtPrice, setKitchenDirtPrice] = useState(0.0);
  const [fridgePrice, setFridgePrice] = useState(0.0);
  const [ovenPrice, setOvenPrice] = useState(0.0);

  const [toiletPrice, setToiletPrice] = useState(0.0);
  const [toiletDirtPrice, setToiletDirtPrice] = useState(0.0);

  const [stairsDirtPrice, setStairsDirtPrice] = useState(0.0);

  const[hallPrice, setHallPrice] = useState(0.0);
  const [hallDirtPrice, setHallDirtPrice] = useState(0.0);



  const totalPrice = useSelector((state) => state.TotalpriceReducer);
  console.log("This is from UseSelector totalPrice  Hook", totalPrice);

  const livingRoomAreas = [
    { area_in_v: "110", areaMain: "1-10", price: 25 },
    { area_in_v: "1120", areaMain: "11-20", price: 30 },
    { area_in_v: "2130", areaMain: "21-30", price: 40 },
    { area_in_v: "30100", areaMain: "30-100", price: 70 }
  ];

  const livingRoomDirt = [
    { dirt: "Light", price: 0 },
    { dirt: "Contaminated", price: 15 },
    { dirt: "Heavily Polluted", price: 30 }
  ]

  const kitchenAreas = [
    { area_in_v: "13", areaMain: "1-3", price: 25 },
    { area_in_v: "46", areaMain: "4-6", price: 30 },
    { area_in_v: "79", areaMain: "7-9", price: 40 },
    { area_in_v: "1013", areaMain: "10-13", price: 45 },
    { area_in_v: "1434", areaMain: "14-34", price: 50 }
  ]

  const kitchenDirt = [
    { dirt: "Light", price: 0 },
    { dirt: "Contaminated", price: 20 },
    { dirt: "Heavily Polluted", price: 30 }
  ]

  const toiletAreas = [
    {area_in_v: "12", areaMain: "1-2", price: 20 },
    {area_in_v: "34", areaMain: "3-4", price: 25 },
    {area_in_v: "56", areaMain: "5-6", price: 40 },
    {area_in_v: "78", areaMain: "7-8", price: 45 },
    {area_in_v: "910", areaMain: "9-10", price: 50 },
  ]

  const toiletDirt = [
    { dirt: "Light", price: 0 },
    { dirt: "Contaminated", price: 15 },
    { dirt: "Heavily Polluted", price: 30 }
  ]

  const stairsDirt = [
    { dirt: "Light", price: 0 },
    { dirt: "Contaminated", price: 5 },
    { dirt: "Heavily Polluted", price: 10 }
  ]
  


  // Total prices 

  const livingRoomTotalPrice = (livingRoomPrice + livingRoomDirtPrice) * livingRoom;
  const bedroomTotalPrice = (bedroomPrice + bedroomDirtPrice) * bedroom;
  const bathroomTotalPrice = (bathroomPrice + bathroomDirtPrice) * bathroom;
  const otherTotalPrice = (otherPrice + otherDirtPrice) * other;
  const kitchenTotalPrice = (kitchenPrice + kitchenDirtPrice + fridgePrice + ovenPrice ) * kitchen;
  const toiletTotalPrice = (toiletPrice + toiletDirtPrice) * toilet;
  const stairsTotalPrice = stairsDirtPrice * stairs;
  const hallTotalPrice = (hallPrice + hallDirtPrice) * hall;





  const finalPrice = stairsTotalPrice + toiletTotalPrice + kitchenTotalPrice +  otherTotalPrice + livingRoomTotalPrice + bedroomTotalPrice + bathroomTotalPrice + totalPrice.totalPrice;



  const handleChange = () => {
    try {
      dispatch(UpdateResidential({ hall, bedroom, bathroom, kitchen, toilet, stairs, livingRoom }))
      dispatch(setTotalPrice(finalPrice))
      dispatch(saveState())
      toast.success("Data Saved Successfully ", { position: toast.POSITION.TOP_CENTER });

    } catch (err) {
      console.log(err.message);
    }
  }

  const ResidentialData = useSelector((state) => state.residentialReducer);
  console.log("This is from UseSelector ResidentialData  Hook", ResidentialData);

  useEffect(() => {
    setHall(ResidentialData.residentialData.hall);
    setBedroom(ResidentialData.residentialData.bedroom);
    setBathroom(ResidentialData.residentialData.bathroom);
    setKitchen(ResidentialData.residentialData.kitchen);
    setToilet(ResidentialData.residentialData.toilet);
    setStairs(ResidentialData.residentialData.stairs);
    // setGarden(ResidentialData.residentialData.garden);
    setLivingRoom(ResidentialData.residentialData.livingRoom);
    // setOther(ResidentialData.residentialData.other);
  }, [ResidentialData])


  return (
    <div>
      <div className='container'>
        <h2> Select <b>Residential cleaning</b> Services  </h2>
        <div className='row mt-3'>
          <div className=''>
            <BoxContainer serviceName={"Living Room"} value={livingRoom} setMethod={setLivingRoom} />
            <div className='mt-3 ml-4 '>
              {livingRoom > 0 ?
                <>
                  <Area areaValues={livingRoomAreas} setMethod={setLivingRoomPrice} />
                  <Dirt  dirtValues = {livingRoomDirt}  setMethod={setLivingRoomDirtPrice} />
                </>
                : <></>}

            </div>
          </div>
          <BoxContainer serviceName={"Bedroom"} value={bedroom} setMethod={setBedroom} />
          <div className='mt-3 ml-4 '>
            {bedroom > 0 ?
              <>
                <Area areaValues={livingRoomAreas} setMethod={setBedroomPrice} />
                <Dirt dirtValues = {livingRoomDirt} setMethod={setBedroomDirtPrice} />
              </>
              : <></>
            }
          </div>
          <BoxContainer serviceName={"Bathroom"} value={bathroom} setMethod={setBathroom} />
          <div className='mt-3 ml-4 '>
            {bathroom > 0 ?
              <>
                <Area areaValues={livingRoomAreas} setMethod={setBathroomPrice} />
                <Dirt dirtValues = {livingRoomDirt} setMethod={setBathroomDirtPrice} />
              </> : <></>
            }
          </div>
          <BoxContainer serviceName={"Kitchen"} value={kitchen} setMethod={setKitchen} />
          {
            kitchen > 0 ?
            <>
              <Area areaValues={kitchenAreas} setMethod={setKitchenPrice} />
              <Dirt dirtValues = {kitchenDirt} setMethod={setKitchenDirtPrice} />
              <FridgeOven  setFridge = {setFridgePrice} setOven = {setOvenPrice} />
            </> : <></>
          }
          <BoxContainer serviceName={"Toilet"} value={toilet} setMethod={setToilet} />
          {
            toilet > 0 ?
            <>
              <Area areaValues={toiletAreas} setMethod={setToiletPrice} />
              <Dirt dirtValues = {toiletDirt} setMethod={setToiletDirtPrice} />
            </> : <></>
          }
        </div>

        <div className='row mt-5'>
          <BoxContainer serviceName={"Stairs"} value={stairs} setMethod={setStairs} />
          {
            stairs > 0 ?
            <>
              <Dirt dirtValues = {stairsDirt} setMethod={setStairsDirtPrice} />
            </> : <></>
          }
          <BoxContainer serviceName={"Hall"} value={hall} setMethod={setHall} />
          {
            hall > 0 ?
            <>  
              <Area areaValues={livingRoomAreas} setMethod={setHallPrice} />
              <Dirt dirtValues = {livingRoomDirt} setMethod={setHallDirtPrice} />
            </> : <></>
          }

          {/* <BoxContainer serviceName={"Garden"} value={garden} setMethod={setGarden} /> */}
          <BoxContainer serviceName={"Other"} value={other} setMethod={setOther} />
          <div className='mt-3 ml-4 '>
            {other > 0 ?
              <>
                <Area areaValues={livingRoomAreas} setMethod={setOtherPrice} />
                <Dirt dirtValues = {livingRoomDirt} setMethod={setOtherDirtPrice} />
              </>
              : <></>
            }
          </div>

        </div>

        <div className='d-flex  mt-5 ml-5 '>
          <h4> Total Price : </h4>
          {/* <h3 className='ml-2'> &euro;{totalPrice.totalPrice} </h3> */}
          <h3 className='ml-2'> &euro;{finalPrice} </h3>
        </div>

        <button className='btn btn-success mt-4 ml-3 mb-4' onClick={handleChange} > Save </button>
        <div className='row'>
          <div className='col'>
            <p> FinalPrice : {finalPrice} </p>
            <p> LivingRoomPrice : {livingRoomPrice} </p>
            <p> LivingRoomDirtPrice : {livingRoomDirtPrice} </p>
            <p> livingRoomTotalPrice : {livingRoomTotalPrice}  </p>
          </div>
          <div className='col'>
            <p> BedroomPrice : {bedroomPrice} </p>
            <p> BedroomDirtPrice : {bedroomDirtPrice} </p>
            <p> bedroomTotalPrice : {bedroomTotalPrice} </p>
          </div>

          <div className='col'>
            <p> BathroomPrice : {bathroomPrice} </p>
            <p> BathroomDirtPrice : {bathroomDirtPrice} </p>
            <p> bathroomTotalPrice : {bathroomTotalPrice} </p>
          </div>

          <div className='col'>
            <p> OtherPrice : {otherPrice} </p>
            <p> OtherDirtPrice : {otherDirtPrice} </p>
            <p> otherTotalPrice : {otherTotalPrice} </p>
          </div>
          
          <div className='col'>
            <p> KitchenPrice : {kitchenPrice} </p>
            <p> KitchenDirtPrice : {kitchenDirtPrice} </p>
            <p> FridgePrice : {fridgePrice} </p>
            <p> OvenPrice : {ovenPrice} </p>
            <p> kitchenTotalPrice : {kitchenTotalPrice} </p>
          </div>
          
          <div className="col">
            <p> ToiletPrice : {toiletPrice} </p>
            <p> ToiletDirtPrice : {toiletDirtPrice} </p>
            <p> toiletTotalPrice : {toiletTotalPrice} </p>
          </div>
          
          
          <div className='col'>
            <p> StairsDirtPrice : {stairsDirtPrice} </p>
            <p> stairsTotalPrice : {stairsTotalPrice} </p>
          </div>
          
          <div className="col">
            <p> HallPrice : {hallPrice} </p>
            <p> HallDirtPrice : {hallDirtPrice} </p>
            <p> hallTotalPrice : {hallTotalPrice} </p>
          </div>

        </div>



      </div>

      <ToastContainer />

    </div>
  )
}

export default Resid
