# Full Stack Blog

In this project, I want to create, from scratch, a website with a database. This will be for educational purposes -- I will make a real blog after and host it on my Raspberry pi :)

### July 8 2022
I'm starting from a `create-react-app` project template and moving from there. 
I'm actually torn whether I should use Bootstrap or not. On the one hand, I want to build this from scratch, so it might be best if I implement my own CSS since this is for educational purposes. On the other, it's also good practice to use and modify existing code. So we shall see...

### July 9 2022
Ok, I've given in to bootstrap. I think I will focus more on the hosting and backend of the website, so I will just do some very basic bootstrapping.

Nevermind -- I went back and erased the bootstrap. Going to use only custom CSS here! I think I will keep really "low-budget" to to speak. 

Nevermind again. I am back to bootstrap. Here is the reason: I am trying to wrestle with `react-router-dom` and it's absolutely killing me. They upgraded from v5 to v6 and changed a whole bunch of stuff, making this nav bar tutorial useless to me.

Wow... I am really wrestling with `react-router-dom`. It is very challenging to develop in an environment that has changed so drastically so quickly without any backwards compatibility. I have spent *hours* looking up stuff online about how to do certain things and everyone tells me different stuff. Eventually with experimentation I will figure it out, but it is *not* fun.

### July 11 2022
I am starting now on the back end. I think this is what I need the most help with. Right now, I am using Express.js but I will explore Django afterwords. Then I will hook it up with AWS, but then explore Firebase after that. Once I have all those pieces down, I will make a site for my own home server.

Most of the backend is set -- I have a server I can post requests from via *Postman* app, I have `nodemon` running to live refresh the server. I also have functionality that will allow for "upvoting" articles as well as leaving comments. I used a makeshift database to test it -- I will integrate MongoDB next.

So the installation for MongoDB via terminal commands don't work on a M1 chip right now. So I will have to do something else...!

### July 12 2022
Ran into another roadblock -- I am having trouble with Homebrew on this M1 machine and can't find a fix yet... I will spend some time figuring that out. Very frustrating. But I will have to practice Node.js in another environment without MongoDB. Off to another repo...! 
______________________________
# Documentation for React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
