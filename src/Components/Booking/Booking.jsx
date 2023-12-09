import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import emailjs, { send } from '@emailjs/browser';
import { CiCalendarDate } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { AddressData } from '../../Redux/action/Index';
import { saveState } from '../../Redux/action/saved';

import CSS from './Booking.module.css'

// https://prohousekeepers.com/#

// const notify = () => toast("Wow so easy!");

const Booking = () => {
    

    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState(null);
    const [serviceFreq, setServiceFreq] = useState(null);
    const [zip, setZip] = useState(0);
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('Hello World!');
    const [saved, setSaved] = useState(false);

    const allPrice = useSelector((state) => state.TotalpriceReducer); // This is the whole state price

    console.log(startDate, time, serviceFreq, zip, address)

    // const allStatesData = {
    //     "windowReducer": {
    //         "windowData": {
    //             "smallWindow": "1",
    //             "mediumWindow": "2",
    //             "largeWindow": "2"
    //         }
    //     },
    //     "saveReducer": {
    //         "isSaved": true
    //     },
    //     "gardenReducer": {
    //         "gardenData": {
    //             "noOfGarden": "01",
    //             "noOfHours": "05"
    //         }
    //     },
    //     "residentialReducer": {
    //         "residentialData": {
    //             "hall": 0,
    //             "bedroom": 0,
    //             "bathroom": 0,
    //             "kitchen": 0,
    //             "toilet": 0,
    //             "stairs": 0,
    //             "garden": 0,
    //             "livingRoom": 1,
    //             "other": 0
    //         }
    //     },
    //     "CommercialReducer": {
    //         "commercialData": {
    //             "floor": 0,
    //             "restRoom": 0,
    //             "washRoom": 0,
    //             "kitchen": 0,
    //             "commonRoom": 0,
    //             "officeRoom": 1
    //         }
    //     },
    //     "hoursReducer": {
    //         "hoursData": "7"
    //     },
    //     "addressReducer": {
    //         "addressData": {}
    //     }
    // }
    // console.log(76,allStatesData); // This is the whole state


    // console.log(79,"Whole State", useSelector((state) => state)); // This is the whole state


    const allStatesData2 = useSelector((state) => state);
    console.log(allStatesData2);

    let finalData = [];

    for (let reducer in allStatesData2) {
        if (typeof allStatesData2[reducer] === 'object' && allStatesData2[reducer] !== null) {
            for (let key in allStatesData2[reducer]) {
                let value = allStatesData2[reducer][key];
                if (typeof value === 'object' && value !== null) {
                    for (let subKey in value) {
                        let subValue = value[subKey];
                        if (subValue > 0 || (typeof subValue === 'string' && subValue.trim() !== '')) {
                            finalData.push({ key: subKey, value: subValue });
                        }
                    }
                } else if (value > 0 || (typeof value === 'string' && value.trim() !== '')) {
                    finalData.push({ key: key, value: value });
                }
            }
        }
    }

    console.log(105, finalData);


    // --------------------------------------- Email Start   ------------------------------------------------------



    const form = useRef();

    const sendEmail = (e) => { 
        e.preventDefault();

        if (!startDate || !time || !serviceFreq || !zip || !address) {
            toast.error("Please fill all the fields");
            return;
        }

        if(!saved){
            toast.error("Please save the data first");
            return; 
        }
    
        const templateParams = {
            from_name: e.target.user_name.value,
            to_email: e.target.user_email.value,
            // to_email:`${e.target.user_email.value}, tech13330@gmail.com`,
            // message: `<table>${finalData.map(obj => `<tr><td><strong>${obj.key}</strong></td><td>${obj.value}</td></tr>`).join('')}</table>`,
            message: `<center> <h1 style="color:teal;"> Your Orders </h1> </center>  <table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
            ${finalData.map(obj => `
            <div >
            <tr style="border: 1px solid black;">
              <td style="border: 1px solid black; color:#1468A3; padding: 8px; text-align:left;"><strong>&#10003; &nbsp;${obj.key} selected </strong></td>
              <td style="border: 1px solid black; padding: 8px;">${obj.value}</td>
            </tr>
            <div>   
            
            `).join('')}
          </table>`,

        };
        // `${e.target.user_email.value}, tech13330@gmail.com`

        emailjs.send('service_hxt6ark', 'template_0g5uxdd', templateParams, 'Kqji21Zb0xckJGvjk')
            .then((result) => {
                console.log(result.text);
                console.log('Data Sent Please Check');

            }, (error) => {
                console.log(error.text);
            });

            toast.success("Data Sent Successfully Check your Email");
    }

    // ------------------------------------- Email End ----------------------------





    const handleChange = (e) => {
        e.preventDefault();
        try {
            toast.success("Data Saved Successfully Submit it ! ");
            console.log(148, finalData.map(obj => `${obj.key}: ${obj.value}`).join('\n'),)
            dispatch(AddressData({ startDate, time, serviceFreq, zip, address }));
            dispatch(saveState());
            setSaved(true);     // Local State

        } catch (err) {
            console.log(err.message);
        }
    }

    const Address = useSelector((state) => state.addressReducer)
    // console.log("This is from UseSelector Address  Hook", Address);

    useEffect(() => {
        setStartDate(Address.addressData.startDate);
        setTime(Address.addressData.time);
        setServiceFreq(Address.addressData.serviceFreq);
        setZip(Address.addressData.zip);
        setAddress(Address.addressData.address);
    }, [Address])

    // const message = "Hello World!"


    return (
        <div className='container mt-5' >
            <h3>  </h3>
            {/* <select onChange={handleServiceChange}>
                <option value="">--Please choose a service--</option>
                {services.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                ))}
            </select> */}

            {/* Date */}


            {/* <form ref={form} onSubmit={sendEmail}> */}
            {/* <label>Name</label> */}
            {/* <input type="text" name="user_name" /> */}
            {/* <label>Email</label> */}
            {/* <input type="email" name="user_email" /> */}
            {/* <label>Message</label> */}
            {/* {{message}} */}
            {/* <textarea name="message"  /> */}
            {/* <input type="submit" value="Send" /> */}
            {/* </form> */}



            <form ref={form}  onSubmit={sendEmail} >

                <div className='d-flex mb-2'>
                    <div>
                        <label htmlFor='name'>Name<span className='text-danger'> * </span></label>
                        <input className='form-control col-md-12' type='text' name='user_name' id='name' placeholder='Enter your name' />

                    </div>

                    <div className='ml-4'>
                        <label htmlFor="Email"> Email <span className='text-danger'> * </span></label>
                        <input className='form-control col-md-12 ' type="email" name="user_email" id="Email" placeholder='Enter your email' />
                    </div>
                </div>


                <div class="form-group d-flex flex-column">
                    <label for="inputPassword" className="col-sm-2 form-group pl-0">Select Date <span className='text-danger'> * </span> </label>
                    <div className="" >
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText='Select date'
                        // showTimeSelect
                        // timeFormat="HH:mm"
                        // timeIntervals={15}
                        dateFormat="dd MMMM, yyyy"
                        />
                        {console.log(startDate)}
                    </div>
                </div>

                {/* Time */}
                {/* selct time */}

                <div class="form-group row col-md-2">
                    <label for="timeSelect">Select Time <span className='text-danger'> * </span></label>
                    <select class="form-control" name="" id="timeSelect" value={time} onChange={(e) => setTime((e.target.value))} required>
                        <option value=""> Select Time </option>
                        <option value="9AM"> 9:00 AM </option>
                        <option value="10AM"> 10:00 AM </option>
                        <option value="11AM"> 11:00 AM </option>
                        <option value="12AM"> 12:00 AM </option>
                        <option value="1PM"> 1:00 PM </option>
                        <option value="2PM"> 2:00 PM </option>
                        <option value="3PM"> 3:00 PM </option>
                        <option value="4PM"> 4:00 PM </option>
                        <option value="5PM"> 5:00 PM </option>
                        <option value="6PM"> 6:00 PM </option>
                        <option value="7PM"> 7:00 PM </option>
                        <option value="8PM"> 8:00 PM </option>
                        <option value="9PM"> 9:00 PM </option>
                        <option value="10PM"> 10:00 PM </option>
                    </select>
                </div>

                {/* Service frequency  */}
                <div className='form-group row col-md-4'>
                    <label for="timeSelect">Service Frequency <span className='text-danger'> * </span></label>
                    <select className='form-control' name="" id="" onChange={(e) => setServiceFreq(e.target.value)} >
                        <option value="serviceFrequency">Service Frequency</option>
                        <option value="oneTime">One Time</option>
                        <option value="weekly">Weekly</option>
                        <option value="every2weeks">Every 2 Weeks</option>
                        <option value="every3weeks">Every 3 Weeks</option>
                        <option value="every4weeks">Every 4 Weeks</option>
                        <option value="every6weeks"> Every 6 Weeks </option>
                        <option value="every8weeks"> Every 8 Weeks  </option>
                    </select>
                </div>

                {/* Zip */}

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label" >Zip Code  <span className='text-danger'> * </span> </label>
                    <div class="col-sm-2 pl-0">
                        <input type='number' class="form-control" id="inputPassword" placeholder="Zip Code" onChange={(e) => setZip(e.target.value)} />
                    </div>
                </div>

                {/* Address */}

                <div className='form-group'>
                    <label htmlFor="Address"> Address <span className='text-danger'> * </span> </label>
                    <input className='form-control' name="address" id="address" cols="20" rows="5" placeholder='H.no 124 Loas Angeles ' onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <button className='btn btn-info ' onClick={ handleChange}>  Save </button>

                <button type='submit' value="Send" className='ml-2 btn btn-success' >  Submit  </button>

            </form>
            
            <ToastContainer />


            {/* {selectedService && (
                <div>
                    <p>Price: &euro; {selectedService.price}</p>
                </div>
            )} */}

        </div>
    )
}

export default Booking;