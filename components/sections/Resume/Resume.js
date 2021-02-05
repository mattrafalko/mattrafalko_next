import { useContext } from 'react';
import ResumeItem from './ResumeItem';
import { userData } from '../../../Config';
import { LoadingContext } from '../../../context/LoadingContext';
import ResumePlaceHolder from '../../loaders/ResumePlaceHolder';

const Resume = () => {
  const { resumeData } = userData;
  const { loading } = useContext(LoadingContext);

  return (
    <div className='mb-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lg font-bold dark:text-gray-200'>Resume</h2>
      </div>
      <div className='mb-4 divide-y-2 dark:divide-indigo-900'>
        {!loading && resumeData && resumeData.length > 0 ? (
          resumeData.map((item, i) => <ResumeItem data={item} key={i} />)
        ) : (
          <ResumePlaceHolder />
        )}
      </div>
    </div>
  );
};

export default Resume;
