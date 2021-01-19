<p align="center">
  <img src="client\src\assets\img\transparentBanner.png" width="60%" />
</p>

##

<p align="center">
  <a href="#project-star2">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs-rocket">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#general-information-and-functionalities-information_source">General Information</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation-wrench">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#start-on">Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test-heavy_check_mark">Test</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#contributing-">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license-memo">License</a>
  <br>  
  <br>  
  <br>
  <a href="https://insomnia.rest/run/?label=Memed&uri=https%3A%2F%2Fgithub.com%2Fleoronne%2Fmedicine-checkout%2Fblob%2Fmaster%2Fserver%2Fserver-requests.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

##

<br>

<p align="center">
  <img src="client\src\assets\img\banner.png"/>
</p>

<br>

## Project :star2:

This repo contains a [challenge](https://github.com/leoronne/medicine-checkout/blob/master/challenge-description.md) proposed by Memed, it's an medicine checkout application based on e-Prescribing.

<br>

Deployed [here](https://e-prescription.ronne.dev).

<br>

## Techs :rocket:

- [x] [ReactJS](https://reactjs.org);
- [x] [Node.js](https://nodejs.org/);
- [x] [TypeScript](https://www.typescriptlang.org/);
- [x] [Styled Components](https://styled-components.com/).

<br>

## General Information and Functionalities :information_source:

For production basis, I decided to implement an server on the application to handle the requests directly to the original API, it's also responsible to get all the information from each pharmacy listed on the original request.

The application has two languages implemented (Portuguese-BR and English-USA), the user can easily alter it on the Header of the page. But it doesn't affect the names of the items received from the API (since it does not have this functionality implemented, unfortunatelly).

On the Checkout Page (when the application finds the nearest pharmacy with lowest price), the user can also open a modal in which lists all the pharmacies found, the total price and each item value.

The application is 100% responsive, so the user can acces it on the web and mobile.

There is also a Not Found Page if the user tries to access a route that doesn't exists.

<br>

<p align="center">
  <img src="client\src\assets\img\project-1.gif"/>
</p>

<br>

<p align="center">
  <img src="client\src\assets\img\project-2.gif"/>
</p>

<br>

## Installation :wrench:

First you need to clone the project using `git clone https://github.com/leoronne/medicine-checkout.git`.

Then you can install the application using `npm install` or `yarn install` on the client and server directory.

<br>

## Start :on:

To start the application <strong>interface</strong> just run `npm run start:web` or `yarn start:web` on the root dir of the folder.

To start the application <strong>server</strong> just run `npm run dev:server` or `yarn dev:server` on the root dir of the folder.

<strong>Note: you need to create a .env file on the [server directory](https://github.com/leoronne/medicine-checkout/blob/master/server/.env.example) and one on the [client directory](https://github.com/leoronne/medicine-checkout/blob/master/client/.env.example) based on the example files.</strong>

<br>

## Test :heavy_check_mark:

To run the tests on this application, just run `npm run test:cover` or `yarn test:cover` on the client directory, it will generate a coverage report on the same dir.

<br>

## Contributing 🤔

Please read [CONTRIBUTING](https://github.com/leoronne/medicine-checkout/blob/master/CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests to the project.

<br>

## License :memo:

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](https://github.com/leoronne/medicine-checkout/blob/master/LICENSE)**
- Copyright 2020 © <a href="https://github.com/leoronne" target="_blank">Leonardo Ronne</a>.

##
