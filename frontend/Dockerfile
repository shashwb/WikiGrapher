# FRONTEND DOCKERFILE

# use official node
FROM node:18

# working dir
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of application files
COPY . .

# build the application
RUN npm run build

# use an nginx image to server the static files 
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# expose the port
EXPOSE 80

# start nginx server
CMD ["nginx", "-g", "daemon off"]


