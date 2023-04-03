# Stage 1 - the build process
# pull official base image
FROM node:18-alpine as build-deps

# set the working directory
WORKDIR /usr/src/app

# install git, because of build error "Could't find the binary git"
RUN apk add --no-cache git

# install app dependencies
ARG NPM_AUTH_TOKEN=npm_token
ARG GENERATE_SOURCEMAP_FLAG
ARG REACT_APP_AMPLITUDE_KEY
ARG REACT_APP_MAINTENANCE_MODE

COPY package.json ./
COPY yarn.lock ./

RUN echo "//registry.npmjs.org/:_authToken=$NPM_AUTH_TOKEN" > .npmrc && \
    yarn install && \
    rm -f .npmrc

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