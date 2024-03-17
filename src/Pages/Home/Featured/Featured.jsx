import React, { useEffect, useState } from 'react';
import FeatureCard from '../../../Components/FeatureCard';



const Featured = () => {

  const [featured, setFeatured] = useState([]);
  useEffect( ()=> {
      fetch('featured.json')
      .then(res=> res.json())
      .then(data=> {
        setFeatured(data)
      })
  },[]);
  console.log(featured)

    return (
        <div className='grid grid-cols-3 gap-6'>
          {
            featured.map(feature=> <FeatureCard feature={feature}></FeatureCard> )
          }
        </div>
    );
};

export default Featured;

// https://i.ibb.co/g7gdzb7/feature.png
// https://i.ibb.co/DD2Pqwp/feature1.png
// https://i.ibb.co/cYwgfZQ/feature2.png