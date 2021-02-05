import React from 'react';

const ResumePlaceHolder = () => {
  const placeholders = [];
  for (let i = 0; i < 4; i++) {
    placeholders.push(
      <div class='flex-1 space-y-2 py-1 mb-2'>
        <div class='h-4 bg-gray-200 rounded w-1/3 lg:w-1/6'></div>
        <div class='space-y-2'>
          <div class='h-4 bg-gray-200 rounded w-3/5'></div>
        </div>
      </div>
    );
  }

  return (
    <div class='w-full mx-auto mt-2'>
      <div class='animate-pulse flex flex-col'>{placeholders}</div>
    </div>
  );
};

export default ResumePlaceHolder;
