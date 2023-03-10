# Stage 1 - the build process
# pull official base image
FROM node:18-alpine as build-deps

# set the working directory
WORKDIR /usr/src/app

# install app dependencies
ARG NPM_AUTH_TOKEN GENERATE_SOURCEMAP
COPY .npmrc .npmrc
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN rm -f .npmrc

# add app
COPY . ./

# run build
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]