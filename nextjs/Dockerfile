FROM node

ENV PORT 3000

# Create app directory
RUN mkdir -p /home/nextjs-app
WORKDIR /home/nextjs-app

# Installing dependencies
COPY package*.json /home/nextjs-app/
RUN npm install

# Copying source files
COPY . /home/nextjs-app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"