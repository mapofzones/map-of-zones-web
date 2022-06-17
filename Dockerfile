# Stage 1 - the build process
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

# run build
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.19-alpine
COPY --from=builder ./app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]