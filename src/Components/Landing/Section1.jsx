import React from 'react'

// ------------------- Images------------------
import Clean1 from '../../assets/img/clean_devi2.jpeg'
import Clean2 from '../../assets/img/clean_devi3.jpeg'
import Clean3 from '../../assets/img/clean_kudiye4.jpeg'

// ------------------ Check Icon -----------------
import { FaCheck } from "react-icons/fa";


import CSS from './Section1.module.css'

const Section1 = () => {
    return (
        <div className={`${CSS.mainOfAll}`}>
            <div className='container mt-4'>
                <div className='row'>
                    {/* ------------------------  LeftSection ----------------------------------- */}
                    <div className='col-md-12 col-12 col-lg-6 '>
                        <div className={`container ${CSS.AllImages} `}>
                            <img src={Clean1} className={`img-thumbnail img-responsive ${CSS.img1}`} alt="cleaner's Image" />
                            <img src={Clean2} className={CSS.img2} alt="cleaner's Image" />
                            <img src={Clean3} className={CSS.img3} alt="cleaner's Image" />
                        </div>
                    </div>
                    {/* ------------------------- RightSection ---------------------------------- */}
                    <div className='col-md-12 col-12 col-lg-6'>
                        <div className='container'>
                            <div className={CSS.rightSection}>
                                <p className={CSS.MainHeading}>We Are Very Experienced In Cleaning Services</p>
                                <h6 style={{ opacity: 0.7 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum! </h6>
                                <div className={CSS.commitments}>
                                    <div className='flex d-flex align-items-baseline'>
                                        <FaCheck color='#118AC5' />
                                        <h3 className='pl-3'>We are Commited </h3>
                                    </div>
                                    <p className={CSS.pointsSubH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum </p>
                                </div>

                                <div className={CSS.commitments}>
                                    <div className='flex d-flex align-items-baseline'>
                                        <FaCheck color='#118AC5' />
                                        <h3 className='pl-3'>We are Commited </h3>
                                    </div>
                                    <p className={CSS.pointsSubH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum </p>
                                </div>

                                <div className={CSS.commitments}>
                                    <div className='flex d-flex align-items-baseline'>
                                        <FaCheck color='#118AC5' />
                                        <h3 className='pl-3'>We are Commited </h3>
                                    </div>
                                    <p className={CSS.pointsSubH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
