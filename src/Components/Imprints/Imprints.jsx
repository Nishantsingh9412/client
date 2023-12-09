import React, { useEffect } from 'react'
import Footer from '../Landing/Footer';

const myStyles = {
    backgroundColor: 'lemonchiffon',
    borderRadius: '3vw',
    border: '1px solid rgb(124, 185, 232)',
    padding: '6vw',
    marginBottom: '6vw',
  };



const Imprints = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div>
            <div className='container-fluid p-0 m-0 ' style={{paddingBottom:'4vw'}}>
                <div className='text-center text-white  mt-5' style={{ padding: '9vw', background: '#7CB9E8' }}>
                    <h4 style={{ fontWeight: 800 }}> Imprints </h4>
                </div>
                <div className='container mt-5 ' style={myStyles}>

                    <h5 className='font-weight-bold'> Business registration details </h5>
                    <br/>

                    <p>
                        A&K Ventures OÜ
                        Sepapaja 6
                        Tallinn 15551
                        Estonia
                        <br />
                        <br />

                        Registered at Tartu County Court Registration Department, Registry code 14080385
                        Management board: Amadeusz Annissimo, Karol Kaczmarek
                        
                        <br />
                        <br />
                        VAT Number: EE102039335
                    </p>
                    
                    <h5 className='mt-5 mb-2 font-weight-bold'> Contact Information </h5>
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p> +00 00 000 000 00</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Imprints
