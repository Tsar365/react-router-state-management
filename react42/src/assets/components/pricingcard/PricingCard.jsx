// import React from 'react';

import PricingFeatures from "./PricingFeatures";

const PricingCard = ({pricing}) => {
  console.log(pricing);
  return (
		<div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg p-4 m-4 dark:border-gray-700">
			<div className="border-2 border-red-300 rounded-lg p-4 m-4">
				<h2 className="text-2xl font-bold">{pricing.name}</h2>
				<p className="text-lg">${pricing.price.toFixed(2)}</p>
			</div>

			<div className="border-2 border-blue-300 rounded-lg p-4 m-4 flex-1">
				<p>{pricing.description}</p>
				{pricing.features.map((feature, index) => (
					<PricingFeatures
						key={index}
						feature={feature}></PricingFeatures>
				))}
			</div>
			<button className="btn w-full">Wide</button>
		</div>
	);
};

export default PricingCard;