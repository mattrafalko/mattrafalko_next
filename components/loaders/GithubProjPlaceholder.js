import React from 'react';

const GithubProjPlaceholder = () => {
  const placeholders = [];
  for (let i = 0; i < 5; i++) {
    placeholders.push(
      <div class='flex-1 space-y-2 px-2 py-3 border b-2 border-gray-200 rounded mb-4'>
        <div class='space-y-2'>
          <div class='h-4 bg-gray-200 rounded w-5/6'></div>
          <div class='h-4 bg-gray-200 rounded w-3/5'></div>
        </div>
      </div>
    );
  }

  return (
    <div class='w-full mx-auto'>
      <div class='animate-pulse flex flex-col'>{placeholders}</div>
    </div>
  );
};

export default GithubProjPlaceholder;
