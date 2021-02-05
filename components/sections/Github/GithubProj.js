const GithubProj = ({ project }) => {
  return (
    <div>
      <div className='mb-4 px-2 py-3 flex flex-col border-2 border-solid border-gray-300 dark:border-indigo-900 rounded shadow-sm hover:shadow-md transition ease-in'>
        <div className='transform -translate-y-7'>
          <span className='md:text-lg text-sm bg-white dark:bg-gray-800 dark:text-gray-200 px-1'>
            {project.name}
          </span>
        </div>
        <div className='-mt-5'>
          <span className='text-sm dark:text-gray-300'>
            {project.description}
          </span>
        </div>
        <div className='flex justify-end items-center pt-5'>
          {project.homepage && project.homepage !== '' ? (
            <a href={project.homepage} target='_blank' rel='noreferrer'>
              <button className='text-gray-700 dark:text-gray-300 hover:text-gray-100 border-gray-300 dark:border-indigo-700 hover:border-gray-800 dark:hover:border-indigo-500 hover:bg-gray-800 border-2 border-solid hover:shadow-md  px-3 rounded transition ease-in mr-2'>
                Demo
              </button>
            </a>
          ) : null}
          <a href={project.html_url} target='_blank' rel='noreferrer'>
            <button className='text-gray-700 dark:text-gray-300 hover:text-gray-100 border-gray-300 dark:border-indigo-700 hover:border-gray-800 dark:hover:border-indigo-500 hover:bg-gray-800 border-2 border-solid hover:shadow-md  px-3 rounded transition ease-in'>
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubProj;
