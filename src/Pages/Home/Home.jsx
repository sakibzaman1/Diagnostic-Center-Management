import React from 'react';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import Recommendation from './Recommendation/Recommendation';

const Home = () => {
    return (
        <div>
           
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h1 className='text-5xl'>Featured Tests</h1>
                <Featured></Featured>
            </div>
            <div>
            <h1 className='text-5xl mb-10'>Personalized Recommendation</h1>
            <Recommendation></Recommendation>
            </div>
        </div>
    );
};

export default Home;