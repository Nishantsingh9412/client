
import React from 'react'
import { Routes , Route} from 'react-router-dom'

import Home from './Components/Landing/Home'
import Imprints from './Components/Imprints/Imprints'
import TandC from './Components/TermsAndCondition/TandC'
import Booking from './Components/Booking/Booking'
import BookingNew from './Components/Booking/BookingNew'
import Steps from './Components/Steps/Steps'
import SendMail from './Components/SendMail'


const AllRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/booking' element={<Booking />}  />
            <Route path='/imprints' element={<Imprints />}> </Route>
            <Route path='/tandc' element={<TandC />}></Route>
            <Route path='/booking-new' element={<BookingNew />} > </Route>
            <Route path='/steps' element={<Steps/>}  />
            <Route path='/mail' element={<SendMail/>}  />
        </Routes>
  )
}

export default AllRoutes
