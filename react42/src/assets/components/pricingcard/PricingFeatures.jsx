// import React from 'react';
import { CheckCheck } from 'lucide-react';

const PricingFeatures = ({feature}) => {
  return (
    <div>

      <p className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
        <CheckCheck></CheckCheck>{feature}
      </p>

    </div>
  );
};

export default PricingFeatures;