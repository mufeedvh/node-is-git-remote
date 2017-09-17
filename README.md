# is-git-remote

> Check if a git remote repository exists

[![Build Status](https://travis-ci.org/aichbauer/node-is-git-remote.svg?branch=master)](https://travis-ci.org/aichbauer/node-is-git-remote)
[![Build status](https://ci.appveyor.com/api/projects/status/eatqdfs3a7uhniti?svg=true)](https://ci.appveyor.com/project/aichbauer/node-is-git-remote)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/node-is-git-remote/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/node-is-git-remote?branch=master)

## Installation

```sh
$ npm i is-git-remote --save
```

or

```sh
$ yarn add is-git-remote
```

## Usage

```js
const isGitRemote = require('is-git-remote'); // import isGitRemote from 'is-git-remote'

countGitTags('www.github.com/username/repo-that-exists'); // => true

countGitTags('https://www.github.com/username/repo-that-exists'); // => true

countGitTags('username/repo-that-exists', 'bitbucket.com'); // => true

// automatically checks github if no host is provided
countGitTags('username/repo-that-not-exists'); // => false
```

## LICENSE

MIT © Lukas Aichbauer
