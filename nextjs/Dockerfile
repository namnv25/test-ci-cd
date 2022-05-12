FROM node

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/nextjs-app
WORKDIR /usr/src/nextjs-app

# Installing dependencies
COPY package*.json /usr/src/nextjs-app/
RUN npm install

# Copying source files
COPY . /usr/src/nextjs-app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"