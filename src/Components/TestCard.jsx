import React from 'react';
import { Link } from 'react-router-dom';

const TestCard = ({test}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img className='w-80 h-60' src={test?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title h-20">
      {test?.title}
      <div className="badge w-20">{test?.price} $ </div>
    </h2>
    <p>{test?.short_description}</p>
    <div className="card-actions justify-center mt-6">
      <div className="badge badge-outline">Available</div> 
      <Link to={`/testDetails/${test?._id}`}><div className="badge badge-outline"><button>Details</button></div></Link>
    </div>
  </div>
</div>
    );
};

export default TestCard;