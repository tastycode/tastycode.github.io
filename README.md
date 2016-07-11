### Overview

A simple slideshow for use with portable projectors at protests against
police violence.

### Usage

```
npm install
npm start
Open http://localhost:5000
```

### Linting

ESLint with React linting options have been enabled.

```
npm run lint
```


### Deployment

You must have access to github.com/tastycode/tastycode.github.io

1. Add an origin called `pages` `git remote add pages
   git@github.com:tastycode/tastycode.github.io.git`
2. Make sure the production release bundle has been built with `npm run
   build`
3. Commit the subtree changes `git add dist; git commit -m "Subtree
   deploy"`
4. Push the subtree `git subtree push --prefix dist pages master`
5. If you get a push rejection message, use `git push pages $(git subtree split --prefix dist master):master --force`

Wait a few moments for the deploy to take effect.
