# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (if needed) that the container will listen on
EXPOSE 3000

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
