# is-git-remote

> Check if a git remote repository exists

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
