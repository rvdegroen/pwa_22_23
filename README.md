# License

The source code is distributed under the GPL-3.0 license. See LICENSE.md for more information.

# The Office Quotes 2.0

The office quiz is a responsive progressive web app for bored students (or for bored people in general) who also happen to be enjoy the tv show "The Office" (US) and want to enjoy themselves a little bit with a quiz.

![my app](/images/app.png)

The website contains a quiz in which you need to guess which character from the tv show, said the quote.

You can find the deployed version on my app on the following link: https://tiny-bracelet-jay.cyclic.app/

## Progressive Web App

This application is a progressive web app, which means it can be used offline, you can install it on any device you want and you can enable push notifications (for example, but I don't have this in my application)

# Installation & running the app

There are two ways to use my app: by cloning this github and then using it on `localhost:3000` or by installing it via the browser (you can go to my deployed app in that case: https://tiny-bracelet-jay.cyclic.app/).

## Installing the app on your local machine and run it on localhost:3000

1. First you have to clone this repository with `git clone [CLONE LINK OF THIS REPOSITORY]` in the terminal, within the folder that you want this application to be located in.
2. When opening the application in the code, you will have to type in your code editor's terminal `npm install` or `npm i` to install all its dependencies that is needed to run this application.
3. Finally, you can start running the app with: `npm run dev` in the terminal. The app will run on `localhost:3000` in your browser.

## Installing the app as PWA

1. Go to my deployed app on https://tiny-bracelet-jay.cyclic.app/
2. Then you look in the adress bar and try to find an icon that has a screen with an arrow down. This means that the app is a PWA and you can install it on your local machine (www.youtube.com has this icon too).
3. Just follow the steps and start up your application.

# Activity diagram

Here you see my activity diagram with my service worker implemented:

![activity diagram](./images/activity-diagram.png)
