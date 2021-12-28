# pull official base image
FROM node:16 AS build

# set working directory could be name anything
WORKDIR /app

# install app dependencies first you copy them to the current docker directory
COPY package*.json ./
RUN npm ci

# add app, and the installed dependencies to the current docker running directory
COPY . ./

#run the build script so we have the build folder to upload to nginx
RUN npm run build-prod

#new stage start from FROM and copys build onto nginx
FROM nginx:1.20-alpine
COPY --from=build /app/dist/kubak-landing /usr/share/nginx/html 
