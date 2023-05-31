# Installs Node.js image
FROM node:16.13.1-alpine

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]

# Installs all packages -- clean install for prod
RUN npm install

# Copies everything in the src directory to WORKDIR/src
COPY ./src ./src

# Runs the dev npm script to build & start the server
CMD ["npm", "run", "start:dev"]
