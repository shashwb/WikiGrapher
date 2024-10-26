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
EXPOSE 3001

# start server (use ts-node to run typescript files)
CMD ["npx", "ts-node", "server.ts"]