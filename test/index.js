import test from 'ava';

import isGitRemote from '../lib';

test('IS GIT REMOTE | a github repository, with an URL, without https://', (t) => {
  const value = isGitRemote('www.github.com/aichbauer/test-public');

  t.true(value);
});

test('IS GIT REMOTE | a github repository, with an URL, with https://', (t) => {
  const value = isGitRemote('https://www.github.com/aichbauer/test-public');

  t.true(value);
});

test('IS GIT REMOTE | a github repository, with "username/reponame"', (t) => {
  const value = isGitRemote('aichbauer/test-public');

  t.true(value);
});

test('IS GIT REMOTE | not a github repository, with "username/reponame"', (t) => {
  const value = isGitRemote('aichbauer/non-existing-repository');

  t.false(value);
});

test('IS GIT REMOTE | a github repository, with "username/reponame", with hist provided', (t) => {
  const value = isGitRemote('aichbauer/test-public', 'github.com');

  t.true(value);
});

test('IS GIT REMOTE | a bitbucket repository', (t) => {
  const value = isGitRemote('https://bitbucket.org/Mr_LA/test-public');

  t.true(value);
});
