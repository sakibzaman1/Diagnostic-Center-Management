import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner2 from '../../../assets/banner2.png'

const Banner = () => {
    return (
        <div className='my-20 flex justify-between gap-20 items-center'>

           
            <div>
            <a className="btn">All Tests</a>
            </div>
            <div className='w-[70%]'>
            <img className='w-screen' src={banner2} alt="" />
            </div>
 

{/* 
  <AwesomeSlider>
    <div className='w-screen'><img className='' src={banner1} alt="" /></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider> */}

        </div>
    );
};

export default Banner;