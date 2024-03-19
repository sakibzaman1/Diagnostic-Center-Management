import React, { useEffect, useState } from 'react';

const AllBanner = () => {
    const [banners, setBanners] = useState([]);
    useEffect( ()=> {
        fetch('https://diagnostic-center-management-server-rho.vercel.app/banners')
        .then(res=> res.json())
        .then(data=> {
          setBanners(data)
        })
    },[]);
    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                banners?.map(banner=> <img banner={banner} src={banner?.image} className='w-96 h-80'></img>)
            }
        </div>
    );
};

export default AllBanner;