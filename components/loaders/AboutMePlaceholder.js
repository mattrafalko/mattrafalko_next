import React from 'react';

const AboutMePlaceholder = () => {
  return (
    <div class='rounded-md p-4 w-full mx-auto'>
      <div class='animate-pulse flex space-x-4'>
        <div class='flex-1 space-y-4 py-1'>
          <div class='h-4 bg-gray-200 rounded w-1/3'></div>
          <div class='space-y-2'>
            <div class='h-4 bg-gray-200 rounded w-4/6'></div>
            <div class='h-4 bg-gray-200 rounded w-5/6'></div>
            <div class='h-4 bg-gray-200 rounded w-3/5'></div>
          </div>
        </div>
        <div class='rounded-full bg-gray-200 h-32 w-32'></div>
      </div>
    </div>
  );
};

export default AboutMePlaceholder;
