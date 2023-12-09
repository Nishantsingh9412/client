import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UpdateWindows } from '../../../Redux/action/Index';
import { saveState } from '../../../Redux/action/saved';
import { setTotalPrice } from '../../../Redux/action/price';

const Window = () => {
  const dispatch = useDispatch();

  const reducerPrice = useSelector((state) => state.TotalpriceReducer);

  console.log("Reducers Price :", reducerPrice); 
  const [smallWindow, setSmallWindow] = useState(null);
  const [mediumWindow, setMediumWindow] = useState(null);
  const [largeWindow, setLargeWindow] = useState(null);
  // const [saved,setSaved] = useState(false);


  
  const [smallWindowPrice,setSmallWindowPrice] = useState(0.0);
  const [mediumWindowPrice,setMediumWindowPrice] = useState(0.0);
  const [largeWindowPrice,setLargeWindowPrice] = useState(0.0);
  const [windowsPrice,setWindowsPrice] = useState(0.0);
  
  // const smallWindowPrice = parseFloat(smallWindow) * 5;
  // const mediumWindowPrice = parseFloat(mediumWindow) * 10
  // const largeWindowPrice = parseFloat(largeWindow) * 15;
  

  const handleChange = () => {

    try {
      dispatch(UpdateWindows({ smallWindow, mediumWindow, largeWindow }))
      // setSmallWindow(WindowsData.windowData.smallWindow);
      // setMediumWindow(WindowsData.windowData.mediumWindow);
      // setLargeWindow(WindowsData.windowData.largeWindow);
      dispatch(setTotalPrice(windowsPrice))
      dispatch(saveState())
      toast.success("Data Saved Successfully ", { position: toast.POSITION.TOP_CENTER });
    } catch (err) {
      console.log(err.message);
    }
  }

  const WindowsData = useSelector((state) => state.windowReducer);
  console.log("This is from UseSelector WindowsData  Hook", WindowsData);



  useEffect(() => {
    setSmallWindow(WindowsData.windowData.smallWindow);
    setMediumWindow(WindowsData.windowData.mediumWindow);
    setLargeWindow(WindowsData.windowData.largeWindow);
    setWindowsPrice(parseFloat(smallWindowPrice) + parseFloat(mediumWindowPrice) + parseFloat(largeWindowPrice));
  }, [WindowsData]);

  let windowArray = [];

  for (let key in WindowsData.windowData) {
    let value = WindowsData.windowData[key];
    if (value > 0) {
      windowArray.push({ key: key, value: value });
    }
  }

  // console.log(43, windowArray);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateWindowData({ smallWindow, mediumWindow, largeWindow }));
  // }, [smallWindow, mediumWindow, largeWindow]);











  // const handleDataChange = (newData) => {
  //   props.updateData(newData);
  // };


  // useEffect(() => {
  //   handleDataChange;
  // },[smallWindow,mediumWindow,largeWindow]
  // )



  return (
    <div>

      <h2> Select <b>window cleaning</b> Services  </h2>

      <h4> </h4>

      {/* <div className='container'>
          <button className='btn btn-success ml-2 mt-2' onClick={()=>setWindow('windInside')}> Window Cleaning Inside </button>
          <button className='btn btn-success ml-2 mt-2' onClick={()=>setWindow('windOutside')}>  Window Cleaning Outside </button>
          <button className='btn btn-success ml-2 mt-2' onClick={()=>setWindow('windBoth')} > Window cleaning inside and outside </button>
      </div> */}

      {/* Show Service According to Condition */}
      <div className='mt-4 col-md-6 ml-2'>
        <div>
          <div className='d-flex flex-column pt-2'>
            <label htmlFor="small Window"  > Small Windows  : (  &euro;5 / window) </label>
            <input type="number" value={smallWindow} className='col-md-4 form-control' onChange={
              (e) => {
                setSmallWindow(e.target.value)
                const newSmallWindowPrice = parseFloat(e.target.value* 5);
                setSmallWindowPrice(newSmallWindowPrice);
                setWindowsPrice(parseFloat(newSmallWindowPrice) + parseFloat(mediumWindowPrice) + parseFloat(largeWindowPrice));
              }
              
              
              } />
          </div>
          <div className='d-flex flex-column pt-2'>
            <label htmlFor="medium Window"  > Medium Windows  : (  &euro;10 / window) </label>
            <input type="number" value={mediumWindow} className='col-md-4 form-control' onChange={(e) => {
              setMediumWindow(e.target.value)
              const newMediumWindowPrice = parseFloat(e.target.value* 10);
              setMediumWindowPrice(newMediumWindowPrice);
              setWindowsPrice(parseFloat(smallWindowPrice) + parseFloat(newMediumWindowPrice) + parseFloat(largeWindowPrice));              
              }} />
          </div>

          <div className='d-flex flex-column pt-2'>
            <label htmlFor="large Window"  > Large Windows  : (  &euro;15 / window) </label>
            <input type="number" value={largeWindow} className='col-md-4 form-control' onChange={(e) => {
              setLargeWindow(e.target.value)
              const newLargeWindowPrice = parseFloat(e.target.value* 15);
              setLargeWindowPrice(newLargeWindowPrice);
              setWindowsPrice(parseFloat(smallWindowPrice) + parseFloat(mediumWindowPrice) + parseFloat(newLargeWindowPrice));              
              }} />
          </div>
        </div>
        <div className='d-flex p-1 mt-3'>
         <h4> Total Price :  </h4>
         <h3 className='ml-2'> &euro;{windowsPrice} </h3>
          </div>
        <button className='btn btn-success mt-4' onClick={handleChange}> Save </button>
        <ToastContainer />
      </div>


    </div>
  )
}

export default Window
