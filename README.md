
# gitEncy - _organize your repos_
<img width="25.66%" align="right" alt="logo" src="https://user-images.githubusercontent.com/81613530/124765145-fa44b680-df35-11eb-9fd4-4d2ec521ea37.gif"
 />
gitEncy uses the GitHub-RestApi/Oauth and MongoDB. The user is able to easily browser and search code of GitHub users' and organizations' repositories. Furthermore, they can save their favourite pieces of code inside the app's database (MongoDB).

## Demo 

Here you can view and test the app:

- [Adobe XD](https://xd.adobe.com/view/bcda805d-43b9-4eaa-b9db-efe404b72102-e989/)
- [Heroku](https://gitency.herokuapp.com/) (First deployment takes some time Heroku servers are quite slow)

The app is currently only supported as a mobile version.

## Install

First, install dependencies:

```shell
npm install
```



Create a `.env` file with the follwing environment variables


KEY	| VALUE
------------ | -------------
MONGODB_URL |	Required. Database Access URL from [MongoDB](https://www.mongodb.com/)
CLIENT_ID | Required. The client ID you received from GitHub when you [register](https://github.com/settings/applications/new) your OAuth App.
CLIENT_SECRET | Required. The client secret you received from GitHub for your OAuth App.
REDIRECT_URI | The URL in the application where users are sent after authorization.

In the project directory, you can then run:

```shell
npm run build
```

Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

```shell
npm start
```

Runs the server in production mode and serve production bundle from npm run build

```shell
npm run server:dev
```

Runs the server in development mode.

```shell
npm run client:dev
```

Runs the app in development mode. Open http://localhost:3000 (default PORT) to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

```shell
npm run storybook
```

Runs storybook.


## Developing

### Built With

<img width="3%" alt="logo" src="https://user-images.githubusercontent.com/81613530/124288016-fb9a6b80-db50-11eb-894b-46220c096ee8.png"
 /> [React](https://reactjs.org/)

### Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](http://expressjs.com/)
- [Node.js](https://nodejs.org)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/)
- [GitHub API](https://docs.github.com/en/rest)
- [OAuth](https://oauth.net/)
- [Storybook](https://storybook.js.org/)
- [Heroku](https://www.heroku.com)
- [dotenv](https://github.com/motdotla/dotenv)
- [node-fetch](https://github.com/node-fetch/node-fetch)
- [JEST](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Adobe XD](https://www.adobe.com/products/xd.html)
