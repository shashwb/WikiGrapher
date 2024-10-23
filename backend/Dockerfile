# BACKEND DOCKERFILE
# Goal: Create express server

# official node image
FROM node:18

# working dir
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install deps
RUN npm install

# copy all application files
COPY . .

# expose backend port
EXPOSE 5000

# start sever
CMD ["npm", "run", "start"]