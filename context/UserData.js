import axios from 'axios';

export const getGithubUserData = async () => {
  try {
    return await axios.get(
      `https://api.github.com/users/mattrafalko?client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
    );
  } catch (e) {
    return e;
    //console.error(e);
  }
};

export const getGithubProjectdata = async () => {
  let projects = [];
  try {
    projects = await axios.get(
      `https://api.github.com/users/mattrafalko/repos?per_page=50&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
    );
    projects = projects.data.filter((x) => x.fork === false);
  } catch (e) {
    console.error(e);
  }
  return projects;
};
