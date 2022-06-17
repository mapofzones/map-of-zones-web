# Stage 1 - the build process
# pull official base image
FROM node:18-alpine as build-deps

# set the working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# add app
COPY . ./

# run build
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.19-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]