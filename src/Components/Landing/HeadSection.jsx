import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import HeadCSS from './HeadSection.module.css'
import Clean from '../../assets/img/clean_devi.png';
// Icons
import { FaGear } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

// TOAST
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const HeadSection = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState('');
  const [bookNow, setBookNow] = useState(false);
  const handleClick = () => {
    setBookNow(true);
  }

  const handleSelect = (e) => {
    const cities = e.target.value;

    if (cities === 'other_cities') {
      toast.warn('Coming Soon in your city');
      return;
    }
    if (cities === 'cities') {
      return;
    }
    else {
      navigate('/steps');
    }
  }



  return (
    <div className={`container-fluid ${HeadCSS.mainContainer}`}>

      {/* LeftSection  */}
      <div className='row'>
        <div className={`col-sm ${HeadCSS.MainleftSection}`} >
          <div className={`${HeadCSS.leftSection}`}>
            <p className={`${HeadCSS.yourTrusted}`}> <FaRegCheckCircle /> Your Trusted Cleaning Partner  </p>
            <p className={`${HeadCSS.mainHeading}`}> A new Solution for your Home Cleaning  </p>
            <p className={`mt-2 ${HeadCSS.subContent}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste neque illo, impedit eveniet placeat repellendus amet molestiae consectetur vitae.</p>
            <button className={`btn ${HeadCSS.BookNowBtn}`} onClick={handleClick}>
              Book Now
            </button>
            {bookNow ? (
              <select className='mt-5 col-md-4 form-control' name="" id="" onChange={handleSelect} >
                <option value="cities" > Select Cities </option>
                <option value="Cologne">Cologne</option>
                <option value="Leverkusen">Leverkusen</option>
                <option value="Hurth">Hurth</option>
                <option value="Bergisch Gladbach">Bergisch Gladbach</option>
                <option value="Troisdorf">Troisdorf</option>
                <option value="Siegburg">Siegburg</option>
                <option value="Frechen">Frechen</option>
                <option value="Pulheim">Pulheim</option>
                <option value="other_cities"> Other Cities </option>
              </select>
            ) : null}
            {console.log(cities)}
          </div>
          {/* Best Cleaning Service */}

          <div className={`${HeadCSS.BestCS}`} >
            <div className='p-4 flex-grid d-flex '>
              <TbActivity color='#FE7443' size='60px' />
              <div className='flex-column'>
                <h2>Best</h2>
                <p>Cleaning Service</p>
              </div>
            </div>
          </div>
        </div>


        {/* RightSection */}

        <div className={`col-sm ${HeadCSS.rightContainer}`}>
          <div className={`${HeadCSS.shieldContainer}`} >
            <div className='p-4'>
              <IoShieldCheckmarkSharp color='#FE7443' size='60px' />
            </div>
          </div>

          {/* <div className={`${HeadCSS.GearContainer}`} >
            <div className={` p-4 ${HeadCSS.GearContainer2}`}>
              <FaGear color='#FE7443' size='40px' />
              <div className={` pl-3 ${HeadCSS.GearText}`}>
                <h3 className='mb-0 '> Qualified </h3>
                <p className='pl-2 pt-0'> work team</p>
              </div>
            </div>
          </div> */}

          <div className={`${HeadCSS.Setting}`} >
            <div className={`${HeadCSS.GearContainer2}`}>
              <div>
                <FaGear color='#FE7443' size='40px' className='mt-3' />
              </div>
              <div className={`flex-column ${HeadCSS.QualifiedWT}`} >
                <span className={HeadCSS.Qualified}>Qualified</span>
                <p className={HeadCSS.QualifiedWT} >Work Team</p>
              </div>
            </div>
          </div>


          <img src={Clean} className={`img-responsive ${HeadCSS.imgStyleHeadSection}`} />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default HeadSection
