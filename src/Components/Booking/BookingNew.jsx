import React, { useState } from 'react'

import Window from '../Cleaning_Comp/Window_clean/Window'
import Garden from '../Cleaning_Comp/Garden/Garden';
import Resid from '../Cleaning_Comp/Residential/Resid';
import Commercial from '../Cleaning_Comp/Commercial/Commercial';
import Others from '../Cleaning_Comp/startingFrom/Others';
import CSS from  './BookingNew.module.css'
// Icons
import { FaRegWindowRestore } from "react-icons/fa";


const BookingNew = () => {
    const [cleaningType, setCleaningType] = useState(null);

    return (
        <div className='container mt-5 pt-4 rounded-lg' style={{height:'50vw',background:'  linear-gradient(120deg, #80C1EF, transparent)'}}>
            {cleaningType === null && <h2 className='text-center text-dark mb-4' style={{color:''}}> Please select a service </h2>}
            <div className='col'>
                <div className='mb-4 row'>
                    <button className='btn btn-primary ml-2 p-4' onClick={() => setCleaningType('window')} > Windows cleaning  </button>
                    <button className='btn btn-primary ml-2 p-4' onClick={() => setCleaningType('garden')} > Garden cleaning </button>
                    <button className='btn btn-primary ml-2 p-4' onClick={() => setCleaningType('residential')}> Residential cleaning </button>

                </div>

                <div className='mb-4 row'>
                    <button className='btn btn-primary ml-2 p-4' onClick={() => setCleaningType('commmercial')}> Commercial cleaning </button>
                    <button className='btn btn-primary ml-2 p-4' onClick={() => setCleaningType('25Euro')} > Starting From 25 &euro; per Hour </button>
                </div>
            </div>


            {/* Show Service According to Condition */}
            <div className='mt-4'>
                {cleaningType === 'window' ? (<Window />) : (

                    <>
                    </>

                )}
                {/* {cleaningType === 'window' && <Window />} */}
                {cleaningType === 'garden' ? (<Garden />) : (<></>)}
                {cleaningType === 'residential' ? (<Resid />) : (<></>)}
                {cleaningType === 'commmercial' ? (<Commercial />) : (<></>)}
                {cleaningType === '25Euro' ? (<Others />) : (<></>)}

            </div>

        </div>
    )
}

export default BookingNew
