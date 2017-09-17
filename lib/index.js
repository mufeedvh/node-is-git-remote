import execa from 'execa';
import inputIs from 'input-is';

const isGitRemte = (URL, host) => {
  let thisURL = URL;
  const thisHost = host || 'github.com';

  if (inputIs.url(thisURL) && !inputIs.valid(thisURL, /https:\/\//)) {
    thisURL = `https://${thisURL}`;
  } else if (!inputIs.url(thisURL) && inputIs.valid(thisURL, /.\/./)) {
    thisURL = `https://www.${thisHost}/${thisURL}`;
  }

  try {
    execa.shellSync(`git ls-remote ${thisURL}`);
    return true;
  } catch (e) {
    return false;
  }
};

export default isGitRemte;
