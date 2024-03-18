import React from 'react';

const FeatureCard = ({feature}) => {

  console.log(feature?.image)

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={feature?.image}  className="rounded-xl h-52 w-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{feature?.test_name}</h2>
          <p>{feature?.price} $</p>
          {/* <div className="card-actions">
            <button className="btn">Details</button>
          </div> */}
        </div>
        </div>
    );
};

export default FeatureCard;