import React from 'react'
import CSS from './Section2.module.css'


// Icons 
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { MdOutlineRoofing } from "react-icons/md";

    
const mobileStyle = {
    // backgroundColor: 'blue',
 //   color: 'white',
}

const Section2 = () => {
    return (
        <div  className={`container ${CSS.mainContainer}`}  style={mobileStyle}>
            {/*  TextSection */}
            <div>
                <div className='mt-5'>
                    <div className={`${CSS.mainHeading}`}>
                        <h1 className={CSS.alwaysP}> We Always Provided The Best Service</h1>
                        <div className={`d-flex flex-column ${CSS.ourCSMainCont}`}>
                            <h3 className={`ml-5  ${CSS.OurS} `} style={{ color: '#FE7443', fontWeight: '600' }} > Our Services </h3>
                            <p className='ml-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut.  </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* IconsSection */}
            <div className={`mt-5 ${CSS.AllCardsContainer}`}>
                <div className={`container ${CSS.AllCards}`}>
                    <div className={CSS.Box}>
                        <div className={`${CSS.AllContent}`}>

                            <div className={CSS.HomeIcon}>
                                <AiFillHome className={`${CSS.iconSize}`} color='#118AC5' />
                            </div>
                            <p className={CSS.iconHeading}> House Cleaning </p>
                            {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                            {/* <MdOutlineRoofing />  --- CS  */}
                            <p className={`${CSS.iconSubH}`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, qui? </p>

                        </div>
                    </div>


                    <div className={CSS.Box2}>
                        <div className={`${CSS.AllContent}`}>

                            <div className={CSS.HomeIcon}>
                                <MdOutlineRoofing className={`${CSS.iconSize}`}  color='#118AC5' />
                            </div>
                            <p className={CSS.iconHeading}> Roof Cleaning </p>
                            {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                            {/* <MdOutlineRoofing />  --- CS  */}
                            <p className={`${CSS.iconSubH}`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, qui? </p>

                        </div>
                    </div>

                </div>


                <div className={` ${CSS.allCards2}`}>
                    <div className={CSS.Box}>
                        <div className={`${CSS.AllContent}`}>

                            <div className={CSS.HomeIcon}>
                                <RiCheckboxMultipleLine className={`${CSS.iconSize}`}  color='#118AC5' />
                            </div>
                            <p className={CSS.iconHeading}> Multi Cleaning </p>
                            {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                            {/* <MdOutlineRoofing />  --- CS  */}
                            <p className={`${CSS.iconSubH}`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, qui? </p>

                        </div>
                    </div>


                    <div className={CSS.Box2}>
                        <div className={`${CSS.AllContent}`}>

                            <div className={CSS.HomeIcon}>
                                <HiMiniBuildingOffice className={`${CSS.iconSize}`}  color='#118AC5' />
                            </div>
                            <p className={CSS.iconHeading}> Office Cleaning </p>
                            {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                            {/* <MdOutlineRoofing />  --- CS  */}
                            <p className={`${CSS.iconSubH}`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, qui? </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Section2
