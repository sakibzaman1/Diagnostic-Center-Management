import React, { useEffect, useState } from 'react';
import TestCard from '../../Components/TestCard';

const AllTests = () => {

    const [tests, setTests] = useState([]);
    useEffect( ()=> {
        fetch('https://diagnostic-center-management-server-rho.vercel.app/allTests')
        .then(res=> res.json())
        .then(data=> {
          setTests(data)
        })
    },[]);
    console.log(tests)

    return (
        <div>
        
            <div className='grid grid-cols-3 gap-6'>
                {
                    tests?.map(test=> <TestCard test={test}></TestCard>)
                }
            </div>
        </div>
    );
};

export default AllTests;

// https://i.ibb.co/xFz7Vbn/test.png
// https://i.ibb.co/0cJ5fNK/test1.png
// https://i.ibb.co/4McwKqP/test2.jpg