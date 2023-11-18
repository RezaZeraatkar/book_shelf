# Bookshelf Application

## Overview
The Bookshelf Application is a robust and efficient platform designed to manage your books. It is built using Node.js and Express.js, with MongoDB serving as the database through Mongoose. The application also implements user authentication using bcrypt and jsonwebtoken.
**This app was deployed on heroku free tier but due to new heroku pricing plans it's now out of access.**
## Prerequisites
- Node.js (version 12.x)
- MongoDB

## Dependencies
- bcrypt: ^3.0.6
- body-parser: ^1.19.0
- concurrently: ^5.0.0
- cookie-parser: ^1.4.4
- express: ^4.17.1
- jsonwebtoken: ^8.5.1
- moment-js: ^1.1.15
- mongoose: ^5.7.7
- nodemon: ^1.19.4

**Please note**: Some of these dependencies may be deprecated and could potentially cause the application to malfunction or not work at all. It is recommended to check for the latest versions before installation.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using the command `npm install`.
4. Start the server using the command `npm run start`.

## Usage
- `npm run start`: Starts the server.
- `npm run server`: Starts the server with nodemon for development.
- `npm run client`: Starts the client.
- `npm run dev`: Starts both the server and client concurrently.
- `npm run heroku-postbuild`: Builds the app for deployment on Heroku.

## License
This project is licensed under the ISC License. Please refer to the license documentation in the repository for more information.
