import ResumeItem from './ResumeItem';
import { userData } from '../../../Config';

const Resume = () => {
  const { resumeData } = userData;

  return (
    <div className='mb-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lg font-bold dark:text-gray-200'>Resume</h2>
      </div>
      <div className='mb-4 divide-y-2 dark:divide-indigo-500'>
        {resumeData && resumeData.length > 0 ? (
          resumeData.map((item, i) => <ResumeItem data={item} key={i} />)
        ) : (
          <span>Loading</span>
        )}
      </div>
    </div>
  );
};

export default Resume;
