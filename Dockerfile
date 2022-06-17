# pull official base image
FROM node:18-alpine

# set the working directory
WORKDIR /app

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["yarn", "start"]