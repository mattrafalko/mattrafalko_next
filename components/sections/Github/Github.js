import { useContext } from 'react';
import GithubProj from './GithubProj';
import { GithubContext } from '../../../context/GitHubContext';
import { LoadingContext } from '../../../context/LoadingContext';
import Loader from '../../../components/loaders/Loader';

const Github = () => {
  const { projects } = useContext(GithubContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div className={`${loading ? 'animate-pulse' : null}`}>
      <h1 className='text-lg font-bold mb-4 mt-4 dark:text-gray-200'>
        Projects
      </h1>
      <div>
        {!loading && projects && projects.length > 0 ? (
          projects.map((project, i) => <GithubProj project={project} key={i} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Github;
