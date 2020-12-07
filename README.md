
# Getting started

Requirement:
- node 12 or higher.
- mongodb 4 or higher.


To get the Node server running locally:


- Clone this repo and get into the directory.
- `npm install` to install all required dependencies
- `npm run start:dev` to start the local development server. default port: 5000
- `npm run start:prod` to start the production server locally.


## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [joi](https://github.com/sideway/joi) - For validating user input.
  