# Character

> Character manager for role playing

## How to build this app
1. Install [git](https://git-scm.com) and [node](https://nodejs.org/)
2. Run `git clone https://github.com/unsetbit/character.git && cd character && npm install`
3. Run `npm start`. This command starts the build system starts the application at [http://localhost:8080](http://localhost:8080).
4. Modify the contents of `src` until the app looks just right.

`src/character.js` is the root of the [React](https://reactjs.org/) application which will be available at localhost:8080. Any variables exported from that file will be available as the `character` variable in global scope.

Update `webpack.config.js` once you're ready to rename your project to
something other that "starter".

## Sharing
1. Run `npm run prepublishOnly`
2. Run `git commit -Av` to check in your changes
3. Create [a new repository in github](https://github.com/new)
4. Run `git remote rename origin starter`
5. Run `git remote add origin <THE CLONE ADDRESS OF YOUR NEW REPO>`
6. Run `git push origin master`
7. Your application will be available at YOUR_GITHUB_NAME.gitbub.io/YOUR_REPO_NAME.

Running `npm run prepublishOnly` prior to publishing your work ensures that  `character.js` file in `docs` is updated. This allows you to easily host your application via
[GitHub pages](https://pages.github.com/).
