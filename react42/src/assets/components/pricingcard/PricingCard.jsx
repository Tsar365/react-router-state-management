// import React from 'react';

import PricingFeatures from "./PricingFeatures";

const PricingCard = ({pricing}) => {
  console.log(pricing);
  return (
    <div>
      <div  className="border-2 border-red-300 rounded-lg p-4 m-4">
        <h2 className="text-2xl font-bold">{pricing.name}</h2>
        <p className="text-lg">${pricing.price.toFixed(2)}</p>
      </div>

      <div className="border-2 border-blue-300 rounded-lg p-4 m-4">
        <p>{pricing.description}</p>
        {
          pricing.features.map((feature, index) => <PricingFeatures key={index} feature={feature} ></PricingFeatures>)
        }
      </div>
    </div>

  );
};

export default PricingCard;