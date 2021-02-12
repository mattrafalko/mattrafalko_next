import axios from 'axios';

export const getGithubUserData = async () => {
  try {
    return await axios.get(`https://api.github.com/users/mattrafalko`, {
      auth: {
        clientID: process.env.NEXT_PUBLIC_GITHUB_CLIENTID,
        secret: process.env.NEXT_PUBLIC_GITHUB_CLIENTSECRET,
      },
    });
  } catch (e) {
    return e;
  }
};

export const getGithubProjectdata = async () => {
  let projects = [];
  try {
    projects = await axios.get(
      `https://api.github.com/users/mattrafalko/repos?per_page=50&sort=created:asc`,
      {
        auth: {
          clientID: process.env.NEXT_PUBLIC_GITHUB_CLIENTID,
          secret: process.env.NEXT_PUBLIC_GITHUB_CLIENTSECRET,
        },
      }
    );
    projects = projects.data.filter((x) => x.fork === false);
  } catch (e) {
    return e;
  }
  return projects;
};
