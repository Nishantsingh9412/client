import React from 'react'
import HeadSection from './HeadSection'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4/Section4'
import Testimonials from './Testimonials'
import Footer from './Footer'
import TandC from '../TermsAndCondition/TandC'
import Imprints from '../Imprints/Imprints'


const Home = () => {
  return (
    <div>
        <HeadSection  />
        <div className='mt-5 pt-5 pb-5 mb-5'>
          <Section1 />
        </div>

        <div className='mt-5 pt-5 pb-5 mb-5'>
          <Section2 />
        </div>

        <div className='mt-5 pt-5 pb-5 mb-5'>
          <Section3 />
        </div>
        <Section4 />
        <div className='mt-5 pt-5  '>
        <Footer/>
        </div>


        {/* <Testimonials /> */}
    </div>
  )
}

export default Home
