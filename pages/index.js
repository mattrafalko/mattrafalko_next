import Head from 'next/head';
import AboutMe from '../components/sections/AboutMe';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { GithubContext } from '../context/GitHubContext';
import { LoadingContext } from '../context/LoadingContext';
import { getGithubProjectdata, getGithubUserData } from '../context/UserData';
import Resume from '../components/sections/Resume/Resume';
import Github from '../components/sections/Github/Github';

const App = ({ userInfo, projectData }) => {
  if (userInfo.status && userInfo.status !== 200) {
    console.log(userInfo);
  } else {
    return (
      <html lang='en'>
        <Head>
          <title>Matt R</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='Matt Rafalko. Web Developer.' />
        </Head>

        <LoadingContext.Provider value={{ loading: false }}>
          <GithubContext.Provider
            value={{
              projects: [...projectData],
              githubUserInfo: { ...userInfo },
            }}
          >
            <AboutMe />
            <motion.div
              className='container px-3 py-4 pt-20 mb-24'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <Resume />
              <Github />
            </motion.div>
            <Footer />
          </GithubContext.Provider>
        </LoadingContext.Provider>
      </html>
    );
  }
};

export const getServerSideProps = async () => {
  // Fetch data from external API
  const userInfo = await getGithubUserData();
  const projectData = await getGithubProjectdata();

  // Pass data to the page via props
  return {
    props: {
      userInfo: userInfo.data,
      projectData: projectData,
    },
  };
};

export default App;
